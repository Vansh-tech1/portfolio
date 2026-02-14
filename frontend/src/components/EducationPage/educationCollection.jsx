import React from "react";
import Education from "./educationListing";
import locationIcon from "../../assets/locationicon.svg";
import calenderIcon from "../../assets/calendericon.svg";

export default function educationContainer() {
  const educationData = [
    {
      degree: "Bachelor of Computer Application (CGPA)",
      institute: "Sanatan Dharma College, Ambala Cantt",
      year: "2023 - 2026",
      locationIcon: locationIcon,
      calenderIcon: calenderIcon,
    },
    {
      degree: "Senior Secondary Education (67%)",
      institute: "MPM Public School, Ismailabad(KKR)",
      year: "2022-2023",
      locationIcon: locationIcon,
      calenderIcon: calenderIcon,
    },
    {
      degree: "Secondary Education (84%)",
      institute: "MPM Public School, Ismailabad(KKR)",
      year: "2020-2021",
      locationIcon: locationIcon,
      calenderIcon: calenderIcon,
    },
  ];
  return (
    <div className="education-container">
      <Education educationData={educationData} />
    </div>
  );
}
