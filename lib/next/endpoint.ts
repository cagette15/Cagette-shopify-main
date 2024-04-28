/* eslint-disable no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

// helper function to avoid ternaries
function s(status: number, always200: boolean) {
  return always200 ? 200 : status;
}

// generic types
type Awaitable<T> = T | Promise<T>;

type Context = {
  params: Record<string, string>;
};

type NextRoute = (req: NextRequest, context: Context) => Awaitable<Response>;

type SuccessOrFailure<S, F> = ResponseInit &
  ({ success: true; data: S } | { success: false; errors: F });

// useful types
export type ApiEndpoint<S, F> = NextRoute & {
  success: S;
  failure: F;
};

export type ApiRoute<S = unknown, F = unknown> = (
  req: NextRequest,
  context: Context
) => Awaitable<SuccessOrFailure<S, F>>;

export type ApiSuccess<T> = T extends ApiEndpoint<infer S, any> ? S : never;

export type ApiFailure<T> = T extends ApiEndpoint<any, infer F> ? F : never;

export type ApiResponse<T> = {
  success: ApiSuccess<T>;
  failure: ApiFailure<T>;
};

export function endpoint<S extends any, F extends any>(route: ApiRoute<S, F>, always200 = false) {
  const handler: ApiEndpoint<S, F> = async (req: NextRequest, context: Context) => {
    try {
      const res = await route(req, context);

      if (res.success) {
        return NextResponse.json(
          {
            success: true,
            data: res.data
          },
          {
            status: 200,
            headers: res.headers
          }
        );
      }

      return NextResponse.json(
        {
          success: false,
          errors: res.errors
        },
        {
          status: s(400, always200),
          headers: res.headers
        }
      );
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          errors: [(error as any).message ?? error]
        },
        {
          status: s(500, always200)
        }
      );
    }
  };

  // dummy type carriers for type inference
  handler.success = undefined as S;
  handler.failure = undefined as F;

  return handler;
}
