import React from "react";
import "./navbar.css";
// import { AuroraText } from "../ui/aurora-text";

import { SparklesText } from "../ui/sparkles-text";


export default function Navbar() {
  return (
    <div className="Navbar_Container">
      <div className="Navbar">
        <div className="Navbar_Logo">
          <p>Vansh Saini</p>
        </div>
        <div className="Navbar_Options">
          <p>About</p>
          <p>Skills</p>
          <p>Projects</p>
          <p>Experience</p>
          <p>Education</p>
          <p>Contact</p>
        </div>
        <div className="Navbar_Resume_Btn">
          <button className=" font-bold py-2 px-2 rounded inline-flex items-center rounded-full">
            <svg
              class="fill-white w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>

            <p>  <span>Resume</span></p>
          </button>
        </div>
      </div>
    </div>
  );
}
