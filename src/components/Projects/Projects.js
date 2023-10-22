import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
    { id: 1, title: 'Smart Home Automation', description: 'This project was created by me as part of my engineering clinics during my second year, which helps users to be able to remotely control and monitor electronic devices using a web server. It minimizes excessive use of electrical energy.This is a group project.' },
    { id: 2, title: 'E- Boutique Store Management System', description: 'This is a software project developed during my Btech 2nd year, which deals with everyday orders and management of registered customers,new users,out of stock items,database,Items available and payment.This is a group project.' },
    { id: 3, title: 'An effective soil pollution monitoring system', description: 'This project was created by me as part of my engineering clinics during my third year, which helps farmers to monitor soil moisture, soil temperature, and soil nutrient content wirelessly on mobile or pc. This is a group project.'  }
  ];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    
    <div>
      <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      <p className='projects-p'>Here are some projects that I worked on</p>
      <div className="projects-box">
        <div className="projects-navbar">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-nav-item ${selectedProject === project ? 'active' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </div>
          ))}
        </div>
        <div className="project-info">
          {selectedProject && (
            <div className="project-card">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          )}
        </div>
      </div>
      </section>
    </div>
   
  );
  
};


export default Projects;




 