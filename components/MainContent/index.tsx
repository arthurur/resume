"use client";

import Education from "../Education";
import WorkExperience from "../WorkExperience";
import { useArthur } from "../../contexts/ArthurContext";

export default function MainContent() {
  const { education, workExperienceList } = useArthur();

  return (
    <div className="space-y-10">
      <Education {...education} />
      <WorkExperience workExperienceList={workExperienceList} />
    </div>
  );
}
