import React from 'react';
import './style.css';
function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <p>My professional skills include:</p>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        {/* Add more skills */}
      </ul>
      <a href="link-to-your-resume.pdf" download>
        Download My Resume
      </a>
    </div>
  );
}

export default Resume;
