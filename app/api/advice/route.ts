import { fetchShopifyAdviceFeed } from "lib/shopify-advice";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 300;

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const cursor = req.nextUrl.searchParams.get("cursor");
    const data = await fetchShopifyAdviceFeed({ cursor });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch advice feed from Shopify" },
      { status: 502 },
    );
  }
}
