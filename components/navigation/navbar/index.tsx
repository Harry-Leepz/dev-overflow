import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className='flex-between background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none shadow-light-100 sm:px-12 gap-5'>
      <Link href='/' className='flex items-center gap-2'>
        <Image
          src='/images/site-logo.svg'
          alt='Dev Overflow Logo'
          width={23}
          height={23}
        />
        <p className='h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden'>
          Dev <span className='text-primary-500'>Overflow</span>
        </p>
      </Link>

      <p>Global search here</p>

      <ThemeToggle />
    </nav>
  );
}
