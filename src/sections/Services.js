import { motion } from 'framer-motion';

import Svg from '../components/Svg';

import '../styles/services.scss';

const Services = () => {
  return (
    <>
      <motion.div className="container" id="services">
        <div className="services">
          <motion.h1
            className="heading-h1 heading-main"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            WHAT I DO
          </motion.h1>
          <div className="cards">
            <motion.div
              className="card-item"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, type: 'tween' }}
            >
              <Svg spriteName="icon-laptop_chromebook" className="svgs" />
              <h3 className="heading-h3">Front-End Web Development</h3>
              <p>
                Convert Web Design mockups from Figma or similar software into
                interative and working Web Application. Fetch API's and display
                it into UI.
              </p>
            </motion.div>
            <motion.div
              className="card-item"
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.5, type: 'tween' }}
            >
              <Svg spriteName="icon-cog" className="svgs" />
              <h3 className="heading-h3">Back-End Web Development</h3>
              <p>
                Create Back-End APIs endpoints, Middlewares, Routes and Schema
                Models for NOSQL database using, NodeJS, ExpressJS and MongoDB.
                Authenticate user using JSON Web Token (JWT)
              </p>
            </motion.div>
            <motion.div
              className="card-item"
              initial={{ y: 90, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3, duration: 0.5, type: 'tween' }}
            >
              <Svg spriteName="icon-web" className="svgs" />
              <h3 className="heading-h3">Responsive Web Design</h3>
              <p>
                Ensure Website is responsive in different screen size accross
                different devices
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
