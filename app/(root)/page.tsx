import Link from "next/link";

import { Button } from "@/components/ui/button";

import ROUTES from "@/constants/routes";
import Search from "@/components/search";

export default async function Home() {
  return (
    <>
      <section className='w-full flex flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>All Questions</h1>

        <Button
          className='primary-gradient min-h-[46px] px-4 py-3 text-light-900!'
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask A Question</Link>
        </Button>
      </section>
      <section className='mt-11'>
        <Search
          route='/'
          imgSrc='/icons/search.svg'
          placeholder='Search for questions here..'
          otherClasses='flex-1'
        />
      </section>
      Local Search
      <div className='mt-10 flex w-full flex-col gap-6'>
        <p>Question 1</p>
        <p>Question 2</p>
        <p>Question 3</p>
        <p>Question 4</p>
        <p>Question 5</p>
      </div>
    </>
  );
}
