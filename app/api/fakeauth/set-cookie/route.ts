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
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    phoneNumber: faker.helpers.fromRegExp(/[6-9][0-9]{9}/),
    age: faker.number.int({ min: 18, max: 40 }),
    gender: faker.person.sex().toUpperCase(),
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
