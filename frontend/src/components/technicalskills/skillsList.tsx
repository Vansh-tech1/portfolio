import React from "react";
import { DotPattern } from "../ui/dot-pattern";
import { cn } from "@/lib/utils";
type SkillsListProps = {
  skills: {
    technology: string;
    icon: string;
  }[];
};
import "./skills.css";

export default function SkillsList({ skills }: SkillsListProps) {
  // console.log(skills);
  return (
    <div className="bg-background-black relative flex h-[600px] w-full flex-col items-center  overflow-hidden rounded-lg ">
      {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        )}
      /> */}

      <div className="tech_skill_container">
        {skills.map((skill, index) => (
          <>
            <div
              key={index}
              className="text-white text-2xl mx-4 my-2 tech_skill_item "
            >
              <div className="tech_skill_logo">
                <img src={skill.icon} alt={skill.technology} />
              </div>
              <p>{skill.technology}</p>
            </div>
            {/* <p>{skill.technology}</p> */}
          </>
        ))}
      </div>
      <div className="skills_info">
        <p>
          Worked with these technologies and more, while continuously learning
          to improve and expand my skill set.
        </p>
      </div>
    </div>
  );
}
