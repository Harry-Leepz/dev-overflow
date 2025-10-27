"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

export default function SocialAuthForm() {
  const btnClassName =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 hover:cursor-pointer hover:border";

  async function handleSignIn(provider: "github" | "google") {
    try {
      await signIn(provider, { callbackUrl: ROUTES.HOME });
    } catch (error) {
      console.log("Error during social sign-in:", error);

      toast.error(
        "Failed to sign in with " +
          provider.charAt(0).toUpperCase() +
          provider.slice(1),
        {
          description:
            error instanceof Error
              ? error.message
              : "An unknown error occurred.",
        }
      );
    }
  }

  return (
    <div className='mt-10 flex flex-wrap gap-2.5'>
      <Button className={btnClassName} onClick={() => handleSignIn("github")}>
        <Image
          src='/icons/github.svg'
          alt='GitHub Logo'
          width={20}
          height={20}
          className='invert-colors mr-2.5 object-contain'
        />
        <span>Sign in with GitHub</span>
      </Button>
      <Button className={btnClassName} onClick={() => handleSignIn("google")}>
        <Image
          src='/icons/google.svg'
          alt='Google Logo'
          width={20}
          height={20}
          className='mr-2.5 object-contain'
        />
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
}
