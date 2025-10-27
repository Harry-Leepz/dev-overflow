"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SheetClose } from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { SIDEBAR_LINKS } from "@/constants/sidebar-links";

type NavLinksProps = {
  isMobileNav?: boolean;
};

export default function NavLinks({ isMobileNav = false }: NavLinksProps) {
  const pathname = usePathname();
  const userId = 1; // Replace with actual user ID retrieval logic

  return (
    <>
      {SIDEBAR_LINKS.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        if (item.route === "/profile") {
          if (userId) item.route = `/profile/${userId}`;
          else return null;
        }

        const LinkComponent = (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900!",
              "flex items-center justify-start gap-4 bg-transparent p-4"
            )}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={cn(
                // white icons → medium gray in light mode, stay white in dark mode
                "invert dark:invert-0 brightness-[0.3] dark:brightness-100",
                isActive && "opacity-100",
                !isActive && "opacity-80"
              )}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {item.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={item.label}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.label}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
}
