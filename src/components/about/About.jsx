import React from "react";
import "./About.css";
import skills from "../../assets/skills.json";
import info from "../../assets/info.json";
import Current from "../../assets/currentComp.png";
import { Button, ProgressBar, Stack } from "react-bootstrap";
import { MdOutlineWork } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { TbToolsOff } from "react-icons/tb";
import { FaBookOpenReader } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";

const About = () => {
  return (
    <div className="about">
      <div className="info">
      <div>
        <p>Hi I'm <h3 className="me">VINAYAK HONNATTI.</h3> find below my professional information. If you find my work impressive 
          please write a feedback for me. Feel free to hit contact.
        </p>
      </div>
      <h4> <MdOutlineWork /> Works at: <img src={Current} alt="" style={{height:"30px", opacity:"50%", marginBottom:"15px"}}/></h4>
        <h4><FaComputer /> Current Role: {info.role}</h4>
        <h4><TbToolsOff /> Experience: {info.experience}Y</h4>
        <h4><FaBookOpenReader /> Education: {info.education}</h4>
        <div className="cert">
        <h5 className="cert-title"><GrCertificate /> Certifications</h5>
        {
          info.certifications.map((cert)=>
          <h4 key={cert} style={{display:"list-item", fontFamily:"monospace"}}> {cert.name}: {cert.issue}</h4>)
        }
        </div>
      </div>
      <div className="skill">
      <h5 className="cert-title">Skills</h5>
        {skills.map((skill) => (
          <>
            <ProgressBar
              now={skill.proficiency}
              style={{marginTop:"30px" ,opacity: "60%" }}
            >
              <ProgressBar
                label={skill.skill}
                striped
                variant="success"
                now={skill.proficiency / 3}
                key={1}
              />
              <ProgressBar
                variant="warning"
                now={skill.proficiency / 3}
                key={2}
              />
              <ProgressBar
                striped
                variant="danger"
                now={skill.proficiency / 3}
                key={3}
              />
            </ProgressBar>
          </>
        ))}
      </div>
    </div>
  );
};

export default About;
