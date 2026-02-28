import React from "react";
import "./about.css";
import eyeicon from "../../assets/eyesvgrepo.svg";
import githubicon from "../../assets/githubicon.svg";
import linkedinicon from "../../assets/linkedinicon.svg";
import discordicon from "../../assets/discordicon.svg";
import twittericon from "../../assets/twittericon.svg";

export default function About() {
  return (
    <>
      <div className="about_Container">
        <h1>
          ABOUT <span className="highlighted_Text">ME</span>
        </h1>
        <p>
          I'm a <span className="highlighted_Text">MERN Stack Developer</span>{" "}
          focused on building full-
        </p>
        <p>
          Stack Applications. I'm pursuing BCA and have build <br />
          3+ projects to gain deeper hands-on experience with <br />
          modern web technologies.
        </p>

        <p>
          I enjoy learning, problem-solving, and continuously <br />
          improving my development Skills
        </p>

        <div className="about_buttons">
          <div className="download_btn">
            <p>
              <svg
                class="fill-white w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              Download CV
            </p>
          </div>
          <div className="view_certificate_btn">
            <img src={eyeicon} alt=""  id="eye_icon" />
            <p> View Certificates</p>
          </div>
        </div>
        <div className="socialmedia_links">
          <div id="githubicon_container">
            
          </div>
          <img src={githubicon} alt="" />

          <img src={linkedinicon} alt="" />
          <img src={discordicon} alt="" />
          <img src={twittericon} alt="" />
        </div>
      </div>
    </>
  );
}
