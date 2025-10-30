"use client";
import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { Input } from "../ui/input";

type SearchProps = {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
};

export default function Search({
  route,
  imgSrc,
  placeholder,
  otherClasses,
}: SearchProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState<string>(query);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-14 grow items-center gap-4 px-4 rounded-[10px] ${otherClasses}`}
    >
      <Image
        src={imgSrc}
        alt='Search Icon'
        width={24}
        height={24}
        className='cursor-pointer'
      />
      <Input
        type='text'
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none'
      />
    </div>
  );
}
