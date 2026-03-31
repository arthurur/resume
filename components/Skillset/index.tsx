import type { ReactNode } from "react";
import { SKILL_SET_TYPES } from "../../contexts/ArthurContext";
import { Skill } from "../../contexts/types";

const { MAJOR } = SKILL_SET_TYPES;
type SkillSetType = (typeof SKILL_SET_TYPES)[keyof typeof SKILL_SET_TYPES];

type SkillListProps = {
  name: string;
  type: SkillSetType;
  skillList: Skill[];
};

export default function SkillList({ name, type, skillList }: SkillListProps) {
  const displayName = name === "Also" ? "Tools & Domains" : name;

  if (type !== MAJOR) {
    return (
      <div>
        <h2 className="font-display text-xl text-maroon mb-3">
          {displayName}
        </h2>
        <div className="flex flex-wrap gap-2">
          {skillList.map((skill) => (
            <span
              key={skill.name}
              className="px-3 py-1 rounded-full bg-rose/10 text-text-secondary text-xs font-medium"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-display text-xl text-maroon mb-3">{displayName}</h2>
      <ul className="space-y-2">
        {skillList.map((skill) => (
          <li key={skill.name} className="flex items-center justify-between">
            <span className="text-sm text-text">{skill.name}</span>
            <SkillLevel level={skill.level} />
          </li>
        ))}
      </ul>
    </div>
  );
}

type SkillLevelProps = {
  level?: number;
};

function SkillLevel({ level = 0 }: SkillLevelProps) {
  const maxLevel = 5;
  const marks: ReactNode[] = [];

  for (let i = 0; i < maxLevel; i++) {
    const isFilled = i < level;
    marks.push(
      <span
        key={i}
        className={`inline-block h-2.5 w-2.5 rotate-45 ${
          isFilled
            ? "bg-rose"
            : "border border-rose/40 bg-transparent"
        }`}
      />
    );
  }

  return <div className="flex items-center gap-1.5">{marks}</div>;
}
