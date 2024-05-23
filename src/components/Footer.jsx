import React from "react";
import email from "../assets/Email.png";
import link from "../assets/link.png";
import git from "../assets/git.png";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginTop: "20%",
      }}
    >
      <div style={{ margin: "10px 10px 10px 10px" }}>
        <img
          src={email}
          alt=""
          style={{ height: "25px", marginRight: "5px" }}
        />
        <a href="mailto:vinayak.m.honnatti@gmail.com">
          vinayak.m.honnatti@gmail.com
        </a>
      </div>
      <>|</>
      <div style={{ margin: "10px 10px 10px 10px" }}>
        <img src={git} alt="" style={{ height: "35px" }} />
        <a href="https://github.com/vinayak-git-hub">
          https://github.com/vinayak-git-hub
        </a>
      </div>
      <>|</>
      <div style={{ margin: "10px 10px 10px 10px" }}>
        <img src={link} alt="" style={{ height: "25px", marginRight: "5px" }} />
        <a href="https://linkedin.com/in/vinayak5">linkedin.com/in/vinayak5</a>
      </div>
    </div>
  );
};

export default Footer;
