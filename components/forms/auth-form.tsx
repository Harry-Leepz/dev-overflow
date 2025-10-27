"use client";

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ROUTES from "@/constants/routes";

type AuthFormProps<T extends FieldValues> = {
  schema: ZodType<T>;
  formType: "SIGN_IN" | "SIGN_UP";
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
};

export default function AuthForm<T extends FieldValues>({
  schema,
  formType,
  defaultValues,
  onSubmit,
}: AuthFormProps<T>) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof schema>>({
    resolver: standardSchemaResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  async function handleSubmit(): SubmitHandler<T> {
    // TODO : HANDLE FORM SUBMISSION  AND AUTHENTICATION LOGIC
  }

  const btnText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='mt-10 space-y-8'
      >
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem className='flex flex-col gap-2.5'>
                <FormLabel className='paragraph-medium text-dark400_light700'>
                  {field.name === "email"
                    ? "Email Address"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FormLabel>
                <FormControl>
                  <Input
                    type={field.name === "password" ? "password" : "text"}
                    {...field}
                    className='paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          disabled={form.formState.isSubmitting}
          className='primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 text-light-900! font-bold'
        >
          {form.formState.isSubmitting
            ? btnText === "Sign In"
              ? "Signing In..."
              : "Signing Up..."
            : btnText}
        </Button>
        {formType === "SIGN_IN" ? (
          <p>
            Don&apos;t have an account?{" "}
            <Link
              href={ROUTES.SIGN_UP}
              className='paragraph-semibold primary-text-gradient'
            >
              Sign Up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link
              href={ROUTES.SIGN_IN}
              className='paragraph-semibold primary-text-gradient'
            >
              Sign In
            </Link>
          </p>
        )}
      </form>
    </Form>
  );
}
