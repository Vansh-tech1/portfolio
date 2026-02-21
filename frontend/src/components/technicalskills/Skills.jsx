import React, { useEffect, useState } from "react";
import SkillsList from "./skillsList";
import "./skills.css";
import "../about/about.css";
import reactIcon from "../../assets/reacticon.svg";
import nodeIcon from "../../assets/node.svg";
import mongoIcon from "../../assets/mongo.svg";
import expressIcon from "../../assets/express.svg";
import jsIcon from "../../assets/js.svg";
import githubIcon from "../../assets/githubicon.svg";
import dockerIcon from "../../assets/dockericon.svg";
import mysqlIcon from "../../assets/mysqlicon.svg";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/cssIcon.svg";
import linuxIcon from "../../assets/linuxicon.svg";
import knexIcon from "../../assets/knexicon.svg";

export default function Skills() {
  //   const techSkills = [{ technology: "ReactJS" }];

  const menu = ["All", "Frontend", "Backend", "Database", "Tools"];
  const [selectedMenu, setSelectedMenu] = useState(0);

  const techSkills = [
    [
      { technology: "ReactJS", icon: reactIcon },
      { technology: "JavaScript", icon: jsIcon },
      { technology: "HTML", icon: htmlIcon },
      { technology: "CSS", icon: cssIcon },
    ],
    [
      { technology: "NodeJS", icon: nodeIcon },
      { technology: "ExpressJS", icon: expressIcon },
      { technology: "KnexJS", icon: knexIcon },
    ],
    [
      { technology: "MongoDB", icon: mongoIcon },
      { technology: "MySQL", icon: mysqlIcon },
    ],
    [
      { technology: "Git", icon: githubIcon },
      { technology: "Docker", icon: dockerIcon },
      { technology: "Linux", icon: linuxIcon },
    ],
  ];

  //   console.log("Selected Menu:", selectedMenu);
  const filteredSkills =
    selectedMenu == 0
      ? [...techSkills[0], ...techSkills[1], ...techSkills[2], ...techSkills[3]]
      : techSkills[selectedMenu - 1];
  //   console.log("Filtered Skills:", filteredSkills);

  console.log(techSkills[1]);
  useEffect(() => {
    console.log(filteredSkills);
  }, [filteredSkills]);

  return (
    <>
      <div className="skills_container">
        <h1>
          <span className="highlighted_Text">TECH</span>NICAL SKILLS
        </h1>
        <p>Programming languages, frameworks, and tools</p>
        <div className="skills_menu">
          {menu.map((item, index) => (
            <div
              key={index}
              className={
                selectedMenu == index
                  ? "skills_options_active"
                  : "skills_options"
              }
              onClick={() => setSelectedMenu(index)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <SkillsList skills={filteredSkills} />;
      
    </>
  );
}
