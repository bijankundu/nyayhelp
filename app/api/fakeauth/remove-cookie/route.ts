import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({
    message: "Success",
  });

  response.cookies.delete("x-user");

  return response;
}
