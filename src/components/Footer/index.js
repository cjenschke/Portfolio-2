import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer>
      <p>© 2024 Cimarron Jenschke</p>
      <div className="social-media-links">
        <a
          href="https://github.com/cjenschke"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>{' '}
        <a
          href="https://www.linkedin.com/in/cimarron-jenschke-a59ab5290/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCoHLeKWqEnCRMY3WFYsAUGQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.instagram.com/justanotherlandcruiser/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
