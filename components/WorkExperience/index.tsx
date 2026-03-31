"use client";

import { useState } from "react";
import { WorkExperienceEntry } from "../../contexts/types";
import { useInView } from "../../hooks/useInView";

type WorkExperienceProps = {
  workExperienceList: WorkExperienceEntry[];
};

export default function WorkExperience({
  workExperienceList,
}: WorkExperienceProps) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const { ref, isInView } = useInView();

  const toggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section ref={ref}>
      <h2
        className={`font-display text-2xl text-maroon mb-6 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
      >
        Work Experience
      </h2>

      <div className="relative border-l-2 border-maroon/15 ml-2">
        {workExperienceList.map((experience, index) => (
          <Experience
            key={experience.company.name}
            entry={experience}
            isExpanded={expandedIndex === index}
            onToggle={() => toggle(index)}
            isInView={isInView}
            delay={index * 80}
          />
        ))}
      </div>
    </section>
  );
}

type ExperienceProps = {
  entry: WorkExperienceEntry;
  isExpanded: boolean;
  onToggle: () => void;
  isInView: boolean;
  delay: number;
};

function Experience({
  entry,
  isExpanded,
  onToggle,
  isInView,
  delay,
}: ExperienceProps) {
  const { position, duration, company, bullets } = entry;

  return (
    <div
      className={`relative pl-8 pb-8 last:pb-0 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Diamond node */}
      <span className="absolute left-0 top-1.5 -translate-x-[calc(50%+1px)] h-3 w-3 rotate-45 bg-maroon" />

      {/* Clickable header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left group cursor-pointer"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold text-text group-hover:text-maroon transition-colors">
            {position}
          </h3>
          <ChevronIcon isExpanded={isExpanded} />
        </div>
        <div className="flex items-center justify-between gap-4 mt-1">
          <a
            href={company.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-sm font-semibold text-brown hover:underline underline-offset-2"
          >
            {company.name}
          </a>
          <span className="text-sm font-semibold text-rose whitespace-nowrap">
            {duration}
          </span>
        </div>
      </button>

      {/* Expandable content */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-4">
            <p className="text-sm text-text-secondary leading-relaxed">
              {company.description}
            </p>
            <ul className="mt-3 space-y-2 pl-4">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm text-text-secondary leading-relaxed list-disc marker:text-rose/50"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronIcon({ isExpanded }: { isExpanded: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={`mt-1 shrink-0 text-text-secondary transition-transform duration-300 ${
        isExpanded ? "rotate-180" : ""
      }`}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
