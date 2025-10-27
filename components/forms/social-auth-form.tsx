import Image from "next/image";
import { Button } from "../ui/button";

export default function SocialAuthForm() {
  const btnClassName =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 hover:cursor-pointer hover:border";

  return (
    <div className='mt-10 flex flex-wrap gap-2.5'>
      <Button className={btnClassName}>
        <Image
          src='/icons/github.svg'
          alt='GitHub Logo'
          width={20}
          height={20}
          className='invert-colors mr-2.5 object-contain'
        />
        <span>Sign in with GitHub</span>
      </Button>
      <Button className={btnClassName}>
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
