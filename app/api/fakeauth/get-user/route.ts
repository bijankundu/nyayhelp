import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
  const authToken = (request.cookies.get("x-user")?.value || "") as string;
  const jwtSecret = process.env.JWT_SECRET || "default-secret";

  const { user = {} } = jwt.verify(authToken, jwtSecret) as { user: {} };

  return NextResponse.json({
    user,
  });
}
