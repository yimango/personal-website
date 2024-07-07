import React from "react";
import TypeAnimation from "./Components/TypeAnimation.jsx";
import "./Introduction.css"; // Import your CSS file for styling (create this file if it doesn't exist)

const Introduction = () => {
  return (
    <section className="section intro">
      <div className="container">
        <div className="intro-pane">
          <h1>Hi! I'm Justin!</h1>
          <TypeAnimation message={"I am a problem solver"} />
        </div>
        <br></br>
        <div className="intro-pane">
          <p>
            Hello! <br></br> I'm Justin and I am a software engineer. I am passionate about using math and software to solve interesting problems and working on cutting-edge projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
