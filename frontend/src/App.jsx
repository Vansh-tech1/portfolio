import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./components/about/about";
import Landing from "./components/landing/landing";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/technicalskills/Skills";
// import Education from "./components/EducationPage/educationListing";
import Contact from "./components/contactus/contact";
import EducationCollection from "./components/EducationPage/educationCollection";
import Eduinfo from "./components/edupage/eduinfo";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <EducationCollection />
      <Contact />
      <Eduinfo />
    </>
  );
}

export default App;
