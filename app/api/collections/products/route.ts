import { loadCollectionProductsPage } from "lib/shopify";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const collection =
    request.nextUrl.searchParams.get("collection")?.trim() || "all";
  const cursor = request.nextUrl.searchParams.get("cursor");

  const page = await loadCollectionProductsPage({
    collection,
    cursor,
  });

  return NextResponse.json(page);
}
