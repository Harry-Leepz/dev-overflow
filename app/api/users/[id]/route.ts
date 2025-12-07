import { NextResponse } from "next/server";

import dbConnnect from "@/lib/mongoose";
import User from "@/database/models/user.model";

import handleError from "@/lib/handlers/error";
import { APIErrorResponse } from "@/types/response";
import { NotFoundError } from "@/lib/http-errors";
import { UserSchema } from "@/lib/validations";

type Params = {
  params: {
    id: string;
  };
};

// GET /api/users/[id] - Retrieve a user by ID
export async function GET(_: Request, { params }: Params) {
  if (!params.id) throw new NotFoundError("User");

  try {
    await dbConnnect();

    const user = await User.findById(params.id);
    if (!user) throw new NotFoundError("User");

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// DELETE /api/users/[id] - Delete a user by ID
export async function DELETE(_: Request, { params }: Params) {
  if (!params.id) throw new NotFoundError("User");

  try {
    await dbConnnect();

    const user = await User.findByIdAndDelete(params.id);
    if (!user) throw new NotFoundError("User");

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// PUT /api/users/[id] - Update a user by ID
export async function PUT(request: Request, { params }: Params) {
  if (!params.id) throw new NotFoundError("User");

  try {
    await dbConnnect();

    const requestBody = await request.json();
    const validatedData = UserSchema.partial().parse(requestBody);

    const updatedUser = await User.findByIdAndUpdate(params.id, validatedData, {
      new: true,
    });

    if (!updatedUser) throw new NotFoundError("User");

    return NextResponse.json(
      { success: true, data: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
