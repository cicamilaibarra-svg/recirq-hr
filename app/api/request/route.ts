import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("✅ API route reached");

  const body = await request.json();

  console.log(body);

  return NextResponse.json({
    success: true,
    reference: "TEST-12345",
  });
}