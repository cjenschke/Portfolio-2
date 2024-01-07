import React from 'react';
import Project from '../../components/Project';
import './style.css';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      imageUrl: 'url-to-image-1.jpg',
      projectUrl: 'link-to-live-project-1',
      repoUrl: 'link-to-github-repo-1',
    },
  ];

  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
