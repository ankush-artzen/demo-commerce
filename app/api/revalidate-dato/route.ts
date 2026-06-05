import { datoCacheTag } from "lib/cms/datocms";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type DatoWebhookBody = {
  cache_tags?: string[];
  entity?: {
    attributes?: { slug?: string };
  };
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  const secret =
    req.headers.get("x-datocms-webhook-secret") ??
    req.nextUrl.searchParams.get("secret");

  if (!secret || secret !== process.env.DATOCMS_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: DatoWebhookBody = {};
  try {
    body = (await req.json()) as DatoWebhookBody;
  } catch {
    // Record-update webhooks may send an empty body.
  }

  if (body.cache_tags?.length) {
    for (const tag of body.cache_tags) {
      revalidateTag(tag);
    }
  }

  revalidateTag(datoCacheTag());
  revalidatePath("/advice");

  const slug = body.entity?.attributes?.slug;
  if (slug) {
    revalidatePath(`/advice/${slug}`);
  }

  return NextResponse.json({
    revalidated: true,
    slug: slug ?? null,
    now: Date.now(),
  });
}
