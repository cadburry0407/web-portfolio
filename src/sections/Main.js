import { useEffect, useState } from 'react';
import '../styles/main.scss';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const tagline = `Lets build things together.`;

const Main = () => {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTyped(tagline.slice(0, typed.length + 1));
    }, 75);

    return () => {
      clearTimeout(timeout);
    };
  }, [typed]);

  return (
    <>
      <div className="container" id="main">
        <section className="main">
          <motion.h5
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Hi, my name is
          </motion.h5>
          <motion.h1
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Emmanuel Engreso
          </motion.h1>
          <motion.h1
            className="tagline"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            {typed}
          </motion.h1>
          <motion.p
            className="about"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            Aspiring <span>Full Stack Developer</span> using Javascript
            Technologies such as ReactJS, NodeJS, ExpressJS and MongoDB (MERN).
            I am constantly learning about web development.
          </motion.p>

          <motion.div
            className="btn-main"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            <Link to="contact" className="btn">
              Hire Me
            </Link>
            <Link to="projects" className="btn-reverse">
              Projects
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Main;
