import { getAdviceBySlug } from "lib/advice";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
): Promise<NextResponse> {
  const { slug } = await params;
  const origin = new URL(req.url).origin;
  const item = getAdviceBySlug(slug, origin);

  if (!item) {
    return NextResponse.json({ error: "Advice not found" }, { status: 404 });
  }

  return NextResponse.json(item);
}
