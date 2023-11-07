import React, { useState } from 'react';
import './App.css';
import './responsive-desktop.css';
import projects from './components/state';
import projImg from './images/ExpGy1.jpeg';
import dotShape from './images/Dot-shape.png';
import ProjectPopup from './components/projectPopup';

function App() {
  const [openProject, setOpenProject] = useState(null);

  const handleProjectClick = (project) => {
    setOpenProject(project);
  };

  const handleClosePopup = () => {
    setOpenProject(null);
  };

  return (
    <section id="work-section">
      <div className="container">
        {projects.map((project, index) => (
          <div className="projects" key={index}>
            <img src={projImg} alt="snapshot of project 1" className="snapshot" />

            <div className="snapshot-details">
              <div className="works-description">
                <div className="works-intro">
                  <h2 className="project-title gy">{project.name}</h2>
                  <div className="frame">
                    <span className="client">CANOPY</span>
                    <img src={dotShape} alt="" className="counter" />
                    <span className="role">{project.role}</span>
                    <img src={dotShape} alt="" className="counter" />
                    <span className="year">{project.year}</span>
                  </div>
                </div>
              </div>

              <p className="details">{project.details}</p>

              <ul className="tags">
                {project.tags.map((tag, tagIndex) => (
                  <li key={tagIndex}>{tag}</li>
                ))}
              </ul>

              <button
                className="action-button see-project"
                onClick={() => handleProjectClick(project)}
              >
                See Project
              </button>
            </div>
          </div>
        ))}

        {openProject && (
          <ProjectPopup project={openProject} onClose={handleClosePopup} />
        )}
      </div>
    </section>
  );
}

export default App;
