import Image from "next/image";
import Link from "next/link";
import { is } from "zod/locales";

type MetricProps = {
  imgUrl: string;
  altText: string;
  value: number | string;
  title: string;
  href?: string;
  isAuthor?: boolean;
  textStyles?: string;
  titleStyles?: string;
  imgStyles?: string;
};

export default function Metric({
  imgUrl,
  altText,
  value,
  title,
  href,
  isAuthor,
  textStyles,
  titleStyles,
  imgStyles,
}: MetricProps) {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={altText}
        width={16}
        height={16}
        className={`rounded-full object-contain ${imgStyles}`}
      />

      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );

  return href ? (
    <Link href={href} className='flex-center gap-1'>
      {metricContent}
    </Link>
  ) : (
    <div className='flex-center gap-1'>{metricContent}</div>
  );
}
