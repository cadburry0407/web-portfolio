import { useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import '../styles/projects.scss';
import { ProjectsData } from '../data/data';

const Projects = () => {
  const [projects] = useState(ProjectsData);

  return (
    <div className="container" id="projects">
      <div className="projects">
        <motion.h1
          className="heading-h1 heading-main"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, type: 'tween' }}
        >
          PROJECTS
        </motion.h1>

        <div className="cards-projects">
          {/* <div className="cards-projects-item"></div> */}
          {projects.map((project) => {
            return (
              <motion.div
                className="cards-projects-item"
                key={uuidv4()}
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, type: 'tween' }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="img-item"
                />

                <div className="cards-projects-item-details">
                  <h5>{project.name}</h5>
                  <p>{project.description}</p>
                  {project.credits ? (
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={project?.credits?.figmaLink}
                      className="credits"
                    >
                      Design Credits: {project?.credits?.figmaAt}
                    </a>
                  ) : (
                    ''
                  )}
                  <div className="tech">
                    {project?.technologies?.map((tech) => {
                      return <p key={uuidv4()}>{tech}</p>;
                    })}
                  </div>
                  <div className="project-btn">
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={project?.links[0]?.link}
                      className="btn-reverse"
                    >
                      {project?.links[0]?.name}
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={project?.links[1]?.link}
                      className="btn"
                    >
                      {project?.links[1]?.name}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
