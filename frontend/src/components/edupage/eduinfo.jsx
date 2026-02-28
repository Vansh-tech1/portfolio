import "./eduinfo.css";
import nexticon from "../../assets/next.png";
function Eduinfo() {
  const Experience = [
    {
      Role: "Full Stack Web Developer Intern",
      Company: "Teqdeft",
      Time: "Jul 2025 - Aug 2025",
    },
  ];



  const Education = [
    {
      degree: "Bachelor of Computer Application",
      institute: "Sanatan Dharma College, Ambala Cantt",
      year: "2023 - 2026",
      info:"score: 8.5 CGPA (till 5th sem)"
    },

    {
      degree: "Senior Secondary Education ",
      institute: "MPM Public School, Ismailabad(KKR)",
      year: "2022-2023",
      info:"score: Non-Medical - 67%"
    },
    {
      degree: "Secondary Education",
      institute: "MPM Public School, Ismailabad(KKR)",
      year: "2020-2021",
      info:"score: 84%"
    },
  ];

  return (
    <>
      <div className="edu-container">
        <div className="left-section">
          
        </div>
        <div className="right-section">
          <div className="heading">
            <p>Vansh Saini</p>
            <p>Full Stack Developer</p>
          </div>
          <div className="main-container">
            <p>Experience</p>

            <div className="experience-info">
              {Experience.map((item, index) => {
                return (
                  <div className="experience-item" key={index}>
                    <div className="item-left">
                      <img src={nexticon} alt="" draggable={false} />
                    </div>
                    <div className="item-right">
                      <p>{item.Role}</p>
                      <p>{item.Company}</p>
                      <p>{item.Time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="main-container">
            <p>Education</p>
            <div className="edu-info">
              {Education.map((item, index) => {
                return (
                  <div className="edu-item" key={index}>
                    <div className="edu-item-left">
                      <img src={nexticon} alt="" draggable={false} />
                    </div>
                    <div className="edu-item-right">
                      <div className="edu-degree-info">
                        {" "}
                        <p id="degree-info">{item.degree}</p>
                        <p>{item.year}</p>
                      </div>
                      <div className="edu-institite-info">
                        <p id="degree-info">{item.institute}</p>
                        <p>{item.info}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eduinfo;
