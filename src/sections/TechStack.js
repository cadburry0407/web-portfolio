import { useState } from 'react';

import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import Svg from '../components/Svg';
import '../styles/techstack.scss';

import { Skills } from '../data/data';

const TechStack = () => {
  const [skills, setSkills] = useState(Skills);

  const categoryFilter = (category) => {
    const filterCategory = Skills.filter((skill) => {
      return skill.category === category;
    });

    setSkills(filterCategory);
  };

  return (
    <>
      <div className="container" id="skills">
        <div className="skills">
          <motion.h1
            className="heading-h1 heading-main"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            SKILLS AND TOOLS
          </motion.h1>

          <motion.div
            className="breadcrumbs"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <h6
              onClick={() => setSkills(Skills)}
              style={
                skills.length === 18 ? { color: '#ff7a18' } : { color: '#fff' }
              }
            >
              All
            </h6>
            <h6 onClick={() => categoryFilter('Front-End')}>Front-End</h6>
            <h6 onClick={() => categoryFilter('Back-End')}>Back-End</h6>
            <h6 onClick={() => categoryFilter('Tools')}>Tools</h6>
          </motion.div>

          <motion.div
            className="skills-icon"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            {skills.map((skill) => {
              return (
                <motion.div
                  key={uuidv4()}
                  className="icon"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5, type: 'tween' }}
                >
                  <Svg spriteName={skill.svg} className="svgs" />
                  <p>{skill.name}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
