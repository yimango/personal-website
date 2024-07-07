import React from "react";
import TypeAnimation from "./Components/TypeAnimation.jsx";
import styles from "./Introduction.module.css"; // Import your CSS file for styling (create this file if it doesn't exist)

const Introduction = () => {
  return (
    <section className={[styles.section, styles.intro]}>
      <div className={styles.container}>
        <div className={styles["intro-pane"]}>
          <h1>Hi! I'm Justin!</h1>
          <TypeAnimation message={"I am a problem solver"} />
        </div>
        <br></br>
        <div className={styles["intro-pane"]}>
          <p>
            Hello! <br></br> I'm Justin and I am a software engineer. I am passionate about using math and software to solve interesting problems and working on cutting-edge projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
