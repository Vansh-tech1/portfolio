import React from "react";

import "./education.css";

export default function Education({ educationData }) {
  return (
    <div className="edu_container">
      <div className="edu_heading">
        <h1>EDUCATION</h1>
      </div>

      {educationData.map((data, index) => {
        return (
          <div className="edu_list">
            <div className="edu_detail">
              <p className="edu_degree">{data.degree}</p>
              <div className="edu_institute_container">
                <div className="location_bg">
                  <img src={data.locationIcon} alt="" />
                </div>
                <p className="edu_institute">{data.institute}</p>
              </div>
            </div>

            <div className="edu_date">
              <img
                src={data.calenderIcon}
                alt="Calendar Icon"
                className="calender_icon"
              />
              <p className="edu_year"> {data.year}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
