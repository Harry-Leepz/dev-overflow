import Image from "next/image";
import Link from "next/link";
import TagCard from "@/components/cards/tag-card";
import ROUTES from "@/constants/routes";

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

const popularTags = [
  {
    _id: "1",
    name: "next js",
    questions: 5,
  },
  {
    _id: "2",
    name: "javaScript",
    questions: 8,
  },
  {
    _id: "3",
    name: "react",
    questions: 12,
  },
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

        <div className='mt-16'>
          <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>

          <div className='flex flex-col mt-7 gap-4'>
            {popularTags.map(({ _id, name, questions }) => (
              <TagCard
                key={_id}
                _id={_id}
                name={name}
                questions={questions}
                showCount
                compact
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
