import React from 'react';
import Project from '../../components/Project';
import './style.css';

function Portfolio() {
  const projects = [
    {
      title: 'TapMap',
      description:
        'TapMap is an interactive application for exploring and discovering local breweries. It allows users to find breweries based on location, providing details and directions.',
      imageUrl: '/tapmap.png',
      projectUrl: 'https://daleray1231.github.io/TapMap/',
      repoUrl: 'https://github.com/cjenschke/TapMap',
    },
    {
      title: 'Nibble Network',
      description:
        'Nibble Network is designed to help users organize and save their favorite recipes. The application provides a user-friendly interface for registration, login, and recipe management.',
      imageUrl: '/nibblenetwork.png',
      projectUrl:
        'https://sheltered-escarpment-88259-4cabc8282347.herokuapp.com',
      repoUrl: 'https://github.com/cjenschke/Nibble-Network',
    },
    {
      title: 'Note Taker',
      description: 'Simple note taker for daily tasks.',
      imageUrl: '/notetaker.png',
      projectUrl: 'https://morning-sands-26761-fdd1c7542253.herokuapp.coml',
      repoUrl: 'https://github.com/cjenschke/Note-Taker',
    },
    {
      title: 'Weather Dashboard',
      description:
        'The Weather App is a web application that allows users to search for the current weather and a 5-day forecast for a specific city. It also provides functionality to display a list of recently searched cities.',
      imageUrl: '/weatherdashboard.png',
      projectUrl: 'https://cjenschke.github.io/Weather-Dashboard/',
      repoUrl: 'https://github.com/cjenschke/Weather-Dashboard',
    },
    {
      title: 'Password Generator',
      description:
        'Super simple password gernerator that creates a password between 8 and 128 characters. User chooses to use at least one of the following to generate a password.',
      imageUrl: '/passwordgenerator.png',
      projectUrl: 'https://cjenschke.github.io/Module-3-Challenge/',
      repoUrl: 'https://github.com/cjenschke/Module-3-Challenge',
    },
    {
      title: 'Code Quiz',
      description: 'Multiple choice code quiz to test your coding knowledge.',
      imageUrl: '/codequiz.png',
      projectUrl: 'https://cjenschke.github.io/Code-Quiz/',
      repoUrl: 'https://github.com/cjenschke/Code-Quiz',
    },
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
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
