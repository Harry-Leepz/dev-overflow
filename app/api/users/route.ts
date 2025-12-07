import dbConnnect from "@/lib/mongoose";
import User from "@/database/models/user.model";

import handleError from "@/lib/handlers/error";
import { APIErrorResponse } from "@/types/response";
import { NextResponse } from "next/server";
import { UserSchema } from "@/lib/validations";
import { ValidationError } from "@/lib/http-errors";

// GET /api/users - Retrieve a list of users
export async function GET() {
  try {
    await dbConnnect();

    const users = await User.find();

    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// POST /api/users - Create a new user
export async function POST(request: Request) {
  try {
    await dbConnnect();

    const requestBody = await request.json();
    const validateData = UserSchema.safeParse(requestBody);

    if (!validateData.success) {
      throw new ValidationError(validateData.error.flatten().fieldErrors);
    }

    const { email, username } = validateData.data;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User with this email already exists.");
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      throw new Error("User with this username already exists.");
    }

    const newUser = await User.create(validateData.data);
    return NextResponse.json({ success: true, data: newUser }, { status: 201 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
