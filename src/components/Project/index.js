import React from 'react';
import './style.css';
function Project({ title, imageUrl, projectUrl, repoUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        View Repository
      </a>
    </div>
  );
}

export default Project;
