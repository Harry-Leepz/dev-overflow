"use client";

import { SIDEBAR_LINKS } from "@/constants/sidebar-links";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  isMobileNav?: boolean;
};

export default function NavLinks({ isMobileNav = false }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {SIDEBAR_LINKS.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

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
              className={cn({ "invert-colors:": !isActive })}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hadden"
              )}
            >
              {item.label}
            </p>
          </Link>
        );

        return LinkComponent;
      })}
    </>
  );
}
