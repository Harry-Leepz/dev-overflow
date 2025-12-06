import dbConnnect from "@/lib/mongoose";
import User from "@/database/models/user.model";

import handleError from "@/lib/handlers/error";
import { APIErrorResponse } from "@/types/response";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnnect();

    const users = await User.find();

    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
