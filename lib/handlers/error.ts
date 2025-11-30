import { NextResponse } from "next/server";
import { RequestError, ValidationError } from "../http-errors";
import { ZodError, z } from "zod";

export type ResponseType = "api" | "server";

function formatResponse(
  responseType: ResponseType,
  status: number,
  message: string,
  errors?: Record<string, string[]>
) {
  const responseContent = {
    success: false,
    error: {
      message,
      details: errors,
    },
  };

  return responseType === "api"
    ? NextResponse.json(responseContent, { status })
    : { status, ...responseContent };
}

export default function handleError(
  error: unknown,
  responseType: ResponseType = "server"
) {
  if (error instanceof RequestError) {
    return formatResponse(
      responseType,
      error.statusCode,
      error.message,
      error.errors
    );
  }

  if (error instanceof ZodError) {
    const { fieldErrors } = z.flattenError(error);

    const validationError = new ValidationError(
      fieldErrors as Record<string, string[]>
    );

    return formatResponse(
      responseType,
      validationError.statusCode,
      validationError.message,
      validationError.errors
    );
  }

  if (error instanceof Error) {
    return formatResponse(responseType, 500, error.message);
  }

  return formatResponse(responseType, 500, "An un-expected error occurred.");
}
