import React from "react";
import "./landing.css";
import LandingImage from "../../assets/landingImage.svg";
import reactIcon from "../../assets/reacticon.svg";
import nodeIcon from "../../assets/node.svg";
import mongoIcon from "../../assets/mongo.svg";
import expressIcon from "../../assets/express.svg";
import jsIcon from "../../assets/js.svg";
import { WordRotate } from "../ui/word-rotate";
import { TypingAnimation } from "../ui/typing-animation";
import { color } from "motion/react";

export default function Landing() {
  let texts = [
    "Full Stack Web Developer",
    "Backend Developer",
    "Problem Solver",
    "Tech Enthusiast",
    "MERN Stack Developer",
  ];
  return (
    <>
      <div className="landing_Container">
        <div className="landing_Left">
          <TypingAnimation className="animated_name">
            Hi, I'm Vansh Saini
          </TypingAnimation>

          <div className="animated_Skills">
            <div>
              <h3>A &nbsp; </h3>
            </div>
            <div>
              <WordRotate
                className="text-4xl font-bold text-black dark:text-white highlighted_text_orange"
                words={texts}
              />
            </div>
          </div>

          <h3>
            Turning Ideas into Fast, Functional and <br />
            User-Focused{" "}
            <span className="highlighted_text_orange bold_text">
              web Applications
            </span>
          </h3>

          <div className="tech_container">
            <div className="tech_list">
              <img src={reactIcon} draggable={false} alt="" style={{height:"2.1rem"}} />
            </div>
            <div className="tech_list">
              <img src={nodeIcon} draggable={false} alt="" style={{height:"5rem"}} />
            </div>
            <div className="tech_list">
              <img src={jsIcon} draggable={false} alt="" id="js_icon" />
            </div>
            <div className="tech_list">
              <img src={expressIcon} draggable={false} alt="" />
            </div>
            <div className="tech_list">
              <img src={mongoIcon} draggable={false} alt="" />
            </div>
          </div>
        </div>
        <div className="landing_Right">
          <img src={LandingImage} draggable={false} alt="" />
        </div>
      </div>
    </>
  );
}
