"use client";

import { useInView } from "../../hooks/useInView";

type EducationProps = {
  title: string;
  graduation: string;
  duration: string;
  university: string;
};

export default function Education({
  title,
  graduation,
  duration,
  university,
}: EducationProps) {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`pb-8 border-b border-maroon/10 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
    >
      <h2 className="font-display text-2xl text-maroon mb-3">{title}</h2>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-base font-semibold text-text">{graduation}</h3>
        <span className="text-sm font-semibold text-rose whitespace-nowrap">
          {duration}
        </span>
      </div>
      <p className="text-sm text-brown font-medium mt-1">{university}</p>
    </section>
  );
}
