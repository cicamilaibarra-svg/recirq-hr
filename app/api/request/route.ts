import { NextResponse } from "next/server";
import { createRequest } from "@/lib/services/requestService";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const request = await createRequest(body);

    return NextResponse.json(request);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to create request."
      },
      {
        status: 500
      }
    );
  }
}