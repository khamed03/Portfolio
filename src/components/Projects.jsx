import React from "react";

const Projects = () => (
  <section id="projects">
  <div className="section-card">
  <h2>Projects</h2>
  <ul>
    <li>
      <strong>HealthTrack – Medical Records App</strong><br />
      A full-stack system for managing patients, appointments, and records with separate roles for doctors and secretaries. Built using React, Node.js, Express, and SQL.  
      <br />
      🔗 <a href="https://github.com/khamed03/HealthTrack-Client" target="_blank">Frontend</a> | <a href="https://github.com/khamed03/HealthTrack-Server" target="_blank">Backend</a>
    </li>
    <li>
      <strong>Cancer Strike (Unity Game)</strong><br />
      A 3D tower defense game about stopping cancer causes and letting protectors through. Includes scoring, health system, animations, and level transitions.
    </li>
    <li>
      <strong>This Portfolio</strong><br />
      Built from scratch using React and deployed on GitHub Pages. Clean, simple, and shows off my work in a straightforward way.
    </li>
  </ul>
  </div>
</section>

);

export default Projects;
