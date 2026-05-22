import { getAdviceFeed } from "lib/advice";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const origin = new URL(req.url).origin;
  const adviceFeed = getAdviceFeed(origin);

  return NextResponse.json({ adviceFeed });
}
