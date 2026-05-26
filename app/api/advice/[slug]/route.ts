import {
  fetchDatoAdviceBySlug,
  isDatoCmsConfigured,
} from "lib/cms/demo-store-advice";
import { fetchShopifyAdviceBySlug } from "lib/shopify-advice";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 300;

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
): Promise<NextResponse> {
  const { slug } = await params;

  try {
    const item = isDatoCmsConfigured()
      ? await fetchDatoAdviceBySlug(slug)
      : await fetchShopifyAdviceBySlug(slug);

    if (!item) {
      return NextResponse.json({ error: "Advice not found" }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch advice item" },
      { status: 502 },
    );
  }
}
