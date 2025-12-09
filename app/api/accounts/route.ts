import { NextResponse } from "next/server";

import dbConnnect from "@/lib/mongoose";
import Account from "@/database/models/account.model";
import handleError from "@/lib/handlers/error";

import { APIErrorResponse } from "@/types/response";
import { AccountSchema } from "@/lib/validations";
import { ForbiddenError } from "@/lib/http-errors";

// GET /api/accounts - Retrieve a list of accounts
export async function GET() {
  try {
    await dbConnnect();

    const accounts = await Account.find();
    return NextResponse.json(
      { success: true, data: accounts },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// POST /api/users - Create a new user
export async function POST(request: Request) {
  try {
    await dbConnnect();

    const requestBody = await request.json();
    const validateData = AccountSchema.parse(requestBody);

    const existingAccount = await Account.findOne({
      provider: validateData.provider,
      providerAccountId: validateData.providerAccountId,
    });

    if (existingAccount) {
      throw new ForbiddenError(
        "Account with this provider and provider account ID already exists."
      );
    }

    const newAccount = await Account.create(validateData);

    return NextResponse.json(
      { success: true, data: newAccount },
      { status: 201 }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
