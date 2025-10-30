"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input } from "../ui/input";
import { buildUrlWithQuery, removeQueryFromUrl } from "@/lib/url";

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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState<string>(query);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (searchQuery.trim() !== "") {
        const newUrl = buildUrlWithQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeQueryFromUrl({
            params: searchParams.toString(),
            queryToRemove: ["query"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 2000);

    return () => clearTimeout(debounceTimeout);
  }, [searchQuery, pathname, route, router, searchParams]);

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
