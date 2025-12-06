// global definitions for server actions and api responses

import { NextResponse } from "next/server";

type ActionsResponse<T = null> = {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    details?: Record<string, string[]>;
  };
  status?: number;
};

type SucessResponse<T = null> = ActionsResponse<T> & { success: true };
type ErrorResponse = ActionsResponse<undefined> & { success: false };

type APIErrorResponse = NextResponse<ErrorResponse>;
type APIResponse<T = null> = NextResponse<SucessResponse<T> | ErrorResponse>;
