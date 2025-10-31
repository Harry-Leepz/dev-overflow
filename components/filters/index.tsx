"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "../ui/button";

import { cn } from "@/lib/utils";
import { buildUrlWithQuery, removeQueryFromUrl } from "@/lib/url";

const homefilters = [
  { name: "Most Recent", value: "newest" },
  { name: "Popular", value: "popular" },
  { name: "Recommended", value: "recommended" },
  { name: "Unanswered", value: "unanswered" },
];

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const [selectedFilter, setSelectedFilter] = useState<string>(
    filterParams || ""
  );

  function handleClick(filterValue: string) {
    let newUrl = "";

    if (filterValue === selectedFilter) {
      setSelectedFilter("");
      newUrl = removeQueryFromUrl({
        params: searchParams.toString(),
        queryToRemove: ["filter"],
      });
    } else {
      setSelectedFilter(filterValue);
      newUrl = buildUrlWithQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filterValue.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  }

  return (
    <div className='mt-10 hidden flex-wrap gap-3 sm:flex'>
      {homefilters.map((filter) => (
        <Button
          onClick={() => handleClick(filter.value)}
          key={filter.value}
          className={cn(
            `body-medium rounded-lg px-6 py-3 capitalize shadow-none cursor-pointer`,
            selectedFilter === filter.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-700 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-400"
          )}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
}
