import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src='/icons/hamburger.svg'
          alt='Menu'
          width={36}
          height={36}
          className='invert-colors sm:hidden'
        />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='background-light900_dark200 border-none p-5'
      >
        <SheetTitle className='hidden'>Navigation</SheetTitle>

        <Link href='/' className='flex items-center gap-1'>
          <Image
            src='/images/site-logo.svg'
            alt='Dev Overflow Logo'
            width={23}
            height={23}
          />
          <p className='h2-bold font-space-grotesk text-dark-100 dark:text-light-900'>
            Dev <span className='text-primary-500'>Overflow</span>
          </p>
        </Link>

        <div className='no-scrollbar flex flex-col justify-between overflow-y-auto h-[calc(100vh-80px)]'>
          <SheetClose asChild>
            <section className='flex h-full flex-col gap-6 pt-16'>
              <p>NAV LINKS HERE</p>
            </section>
          </SheetClose>

          <div className='flex flex-col gap-3'>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className='small-medium btn-secondary min-h-[50px] w-full rounded-lg px-4 py-3 shadow-none'>
                  <span className='primary-text-gradient'>Sign In</span>
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[50px] w-full rounded-lg border px-4 py-3 shadow-none'>
                  <span>Sign Up</span>
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
