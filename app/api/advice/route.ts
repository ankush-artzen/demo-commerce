import { parsePalaceAdviceData } from "lib/parse-palace-advice-data";
import { NextRequest, NextResponse } from "next/server";

const PALACE_ADVICE_DATA_URL = "https://palaceskateboards.com/advice.data";

export async function GET(request: NextRequest) {
  const index = request.nextUrl.searchParams.get("index");
  const upstream = new URL(PALACE_ADVICE_DATA_URL);

  if (index) {
    upstream.searchParams.set("index", index);
  }

  try {
    const res = await fetch(upstream, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Upstream returned ${res.status}` },
        { status: res.status },
      );
    }

    const raw = await res.json();
    const { items, totalCount } = parsePalaceAdviceData(raw);

    return NextResponse.json(
      { items, totalCount },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      },
    );
  } catch (error) {
    console.error("Advice proxy error:", error);
    return NextResponse.json(
      { error: "Failed to fetch advice feed" },
      { status: 500 },
    );
  }
}
