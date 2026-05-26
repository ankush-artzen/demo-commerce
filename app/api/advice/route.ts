import {
  fetchDatoAdviceFeed,
  isDatoCmsConfigured,
} from "lib/cms/demo-store-advice";
import { fetchShopifyAdviceFeed } from "lib/shopify-advice";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 300;

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    if (isDatoCmsConfigured()) {
      const data = await fetchDatoAdviceFeed();
      return NextResponse.json(data);
    }

    const cursor = req.nextUrl.searchParams.get("cursor");
    const data = await fetchShopifyAdviceFeed({ cursor });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch advice feed" },
      { status: 502 },
    );
  }
}
