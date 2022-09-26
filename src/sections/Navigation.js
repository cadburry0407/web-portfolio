import { useState } from 'react';
import { Link } from 'react-scroll';

import { motion } from 'framer-motion';

import '../styles/navigation.scss';

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <motion.nav
        className="nav_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="nav">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="main" offset={-100} className="logo-link">
              <h1>
                {'<'} Emman <span>Dev</span> /{'>'}
              </h1>
            </Link>
          </motion.div>
          <motion.ul
            className="nav_links"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <li>
              <Link to="services" offset={-100}>
                Services
              </Link>
            </li>
            <li>
              <Link to="skills" offset={-100}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </motion.ul>

          <motion.button
            className={
              isActive
                ? 'nav__btn-toggle-menu activated'
                : 'nav__btn-toggle-menu '
            }
            id="menu-toggle-icon"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={handleToggle}
          >
            <i className="ri-menu-3-line open-menu-icon"></i>
            <i className="ri-close-line close-menu-icon"></i>
          </motion.button>

          <div className={isActive ? 'menu activated' : 'menu'} id="menu">
            <ul className="menu__list">
              <li className="menu__list-item">
                <Link to="services" offset={-100} onClick={handleToggle}>
                  Services
                </Link>
              </li>
              <li className="menu__list-item">
                <Link to="skills" onClick={handleToggle}>
                  Skills
                </Link>
              </li>
              <li className="menu__list-item">
                <Link to="projects" onClick={handleToggle}>
                  Projects
                </Link>
              </li>

              <li className="menu__list-item">
                <Link to="contact" onClick={handleToggle}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
