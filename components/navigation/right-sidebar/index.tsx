import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

const questionsArray = [
  { _id: "1", title: "How to center a div in CSS?" },
  {
    _id: "2",
    title: "What is the difference between let and var in JavaScript?",
  },
  { _id: "3", title: "How to create a responsive layout using Flexbox?" },
  { _id: "4", title: "What are closures in JavaScript?" },
  { _id: "5", title: "How to optimize React application performance?" },
];

export default function RightSidebar() {
  return (
    <section className='pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-lg:hidden'>
      <div>
        <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>

        <div className='mt-7 flex w-full flex-col gap-[30px]'>
          {questionsArray.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className='flex cursor-pointer items-center gap-7 justify-between'
            >
              <p className='body-medium text-dark500_light700'>{title}</p>
              <Image
                src='/icons/chevron-right.svg'
                alt='chevron right'
                width={20}
                height={20}
                className='invert-colors'
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
