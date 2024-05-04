import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { faker } from "@faker-js/faker";

export async function GET() {
  const response = NextResponse.json({
    message: "Success",
  });
  const jwtSecret = process.env.JWT_SECRET || "default-secret";

  const dummyUser = {
    name: faker.person.fullName(),
    user_name: faker.internet.userName(),
    email: faker.internet.email(),
    phoneNumber: faker.helpers.fromRegExp(/^[6-9]\d{9}$/),
    age: 30,
    gender: faker.helpers.arrayElement(["MALE", "FEMALE"]),
    status: "ACTIVE",
    role: "USER",
  };

  const token = jwt.sign({ user: dummyUser }, jwtSecret);

  response.cookies.set({
    name: "x-user",
    value: token,
    httpOnly: true,
  });

  return response;
}
