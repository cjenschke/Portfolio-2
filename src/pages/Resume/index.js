import React from 'react';
import './style.css';

function Resume() {
  return (
    <div className="resume">
      <h2>My Resume</h2>

      <section className="education">
        <h3>Education</h3>
        <h4>Dripping Spring High School 1990-95</h4>
        <h4>Austin Community College 1995-98</h4>
        <h4>Southwest Texas State University 1998-2000</h4>
        <h4>University of Texas Full Stack Developer Bootcamp 2023-24</h4>
      </section>

      <section className="experience">
        <h3>Work Experience</h3>
        <h4>Direct Events - The Backyard/Austin Music Hall/La Zona Rosa</h4>
        <p>- Director of Operations</p>
        <h4>Clever Name Management</h4>
        <p>- Owner</p>
        <h4>Greg Henry & Associates * Partner</h4>
        <p>- Bar Director</p>
        <h4>
          Shipping, Hardware & Logistics Director * Best Ring POS * 2014 -
          Present
        </h4>
        <p>- Shipping and Logistics Director</p>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <p>
          As a budding Full-Stack Web Developer, I am enthusiastically applying
          my foundational skills in front-end and back-end technologies to forge
          a new career path in the tech industry. Although new to the realm of
          software development, I bring a rich tapestry of experiences and
          competencies from my previous roles. My background in leading teams
          has equipped me with strong communication and collaboration skills,
          critical for navigating the complexities of development projects. This
          experience in team dynamics is proving invaluable as I delve into
          coding with languages like JavaScript and frameworks such as React and
          Node.js. My enthusiasm for continuous learning, combined with my
          hands-on expertise as a hobbyist welder and mechanic, fuels my
          innovative approach to problem-solving in development. These practical
          skills not only aid in understanding the intricacies of logical
          thinking but also underscore my commitment to mastering the art of web
          development, ensuring a swift and effective transition into my new
          career.
        </p>
      </section>

      <section className="certifications">
        <h3>Certifications</h3>
        <h4>University of Texas Full Stack Web Developer</h4>
        <h4>TABC Certification</h4>
        <h4>Texas Food Handler Certification</h4>
        <h4>Fork Lift Certification</h4>
      </section>

      <a
        href="/CimarronJenschkeResume.pdf"
        download
        className="resume-download"
      >
        Download Cimarron Jenschke's Detailed Resume
      </a>
    </div>
  );
}

export default Resume;
