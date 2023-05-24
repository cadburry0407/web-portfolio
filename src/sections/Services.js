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
                            <Svg
                                spriteName="icon-laptop_chromebook"
                                className="svgs"
                            />
                            <h3 className="heading-h3">
                                Front-End Web Development
                            </h3>
                            <p>
                                Transform web design mockups from Figma or a
                                similar software into a functional and
                                interactive web application. Retrieve data from
                                APIs using the Fetch API and present it in the
                                user interface (UI)
                            </p>
                        </motion.div>
                        <motion.div
                            className="card-item"
                            initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                delay: 0.1,
                                duration: 0.5,
                                type: 'tween',
                            }}
                        >
                            <Svg spriteName="icon-cog" className="svgs" />
                            <h3 className="heading-h3">
                                Back-End Web Development
                            </h3>
                            <p>
                                Implement backend API endpoints, middlewares,
                                routes, and schema models for a NoSQL database
                                using Node.js, Express.js, and MongoDB.
                                Additionally, incorporate user authentication
                                using JSON Web Tokens (JWT).
                            </p>
                        </motion.div>
                        <motion.div
                            className="card-item"
                            initial={{ y: 90, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                                type: 'tween',
                            }}
                        >
                            <Svg spriteName="icon-web" className="svgs" />
                            <h3 className="heading-h3">
                                Responsive Web Design
                            </h3>
                            <p>
                                Ensure that the website is fully responsive and
                                adapts seamlessly to various screen sizes on
                                different devices.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Services;
