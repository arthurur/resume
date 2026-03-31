"use client";

import Personal from "../Personal";
import Skillset from "../Skillset";
import ThemeToggle from "../ThemeToggle";
import { useArthur } from "../../contexts/ArthurContext";
import { useInView } from "../../hooks/useInView";

export default function Sidebar() {
  const { name, personalInformation, skillsetList } = useArthur();
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className="grid grid-rows-[auto] gap-8">
      <div
        className={`transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
      >
        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
        <div className="flex items-start justify-between gap-4 mb-6">
          <h1 className="font-display text-2xl tracking-tight text-maroon">
            {name}
          </h1>
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-rose/30 ring-offset-2 ring-offset-cream">
          <img
            src="/profile.jpeg"
            alt="Arthur Uberti Rolim"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        className={`transition-all duration-500 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
      >
        <Personal personalInformation={personalInformation} />
      </div>

      {skillsetList.map((skillSet, index) => (
        <div
          key={skillSet.name}
          className={`transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDelay: `${(index + 2) * 100}ms` }}
        >
          <Skillset {...skillSet} />
        </div>
      ))}
    </div>
  );
}
