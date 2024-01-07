import React from 'react';
import './style.css';
function Project({ title, description, imageUrl, projectUrl, repoUrl }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />

      <p>{description}</p>
      <div>
        <a
          className="project-link"
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
      </div>
      <div>
        <a
          className="project-link"
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
