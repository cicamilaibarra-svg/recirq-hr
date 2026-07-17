import { NextResponse } from "next/server";
import { createRequest } from "@/lib/services/requestService";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const newRequest = await createRequest(body);

    return NextResponse.json(newRequest);
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to create request.",
      },
      {
        status: 500,
      }
    );
  }
}