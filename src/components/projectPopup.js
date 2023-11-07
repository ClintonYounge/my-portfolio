import React from 'react';

function ProjectPopup({ project, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2 className="project-title gy">{project.name}</h2>
        <p className="details">{project.details}</p>
        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
}

export default ProjectPopup;
