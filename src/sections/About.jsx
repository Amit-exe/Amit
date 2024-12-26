import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="profile-image">
            {/* Replace with your profile image */}
            <img src="/profile-placeholder.png" alt="Profile" />
          </div>
          <div className="about-text">
            <p>
              Hi, I'm <strong>Amit Kushwaha</strong>, a passionate Software
              Developer with experience in Flutter, MERN stack, and Python. I
              thrive on solving complex problems and building intuitive,
              user-friendly applications.
            </p>
            <p>
              Currently, I'm exploring advanced technologies, honing my skills,
              and working on projects like this portfolio. My goal is to
              contribute to impactful software solutions.
            </p>
            <a href="/resume.pdf" download className="btn">
              Download Resume
            </a>
          </div>
        </div>
        <div className="skills">
          <h3>Technical Skills</h3>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Flutter</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
