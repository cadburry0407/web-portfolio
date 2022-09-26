import { useState } from 'react';
import { motion } from 'framer-motion';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import Svg from '../components/Svg';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/contact.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const contactSubmit = async (e) => {
    e.preventDefault();

    if (validator.isEmpty(name) || validator.isEmpty(message))
      return toast.error('please fill up required field', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    if (!validator.isEmail(email))
      return toast.error('invalid email address', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    setIsLoading(true);

    await fetch(
      `https://formsubmit.co/ajax/${process.env.REACT_APP_NOT_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: validator.escape(name),
          email: validator.escape(email),
          message: validator.escape(message),
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuccess(true);
        setIsLoading(false);
      })
      .catch((error) =>
        toast.error('Something went wrong, please try again', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  };

  return (
    <div className="container" id="contact">
      <div className="contact">
        <motion.h1
          className="heading-h1"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, type: 'tween' }}
        >
          Hire Me / Get In Touch
        </motion.h1>

        <motion.div
          className="form-container"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, type: 'tween' }}
        >
          <div className="contact-links">
            <a
              href="https://github.com/cadburry0407"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Svg spriteName="icon-github" className="svgs" />
              cadburry0407
            </a>
            <a
              href="mailto:emmanuel.engreso@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Svg spriteName="icon-email" className="svgs" />
              emmanuel.engreso@gmail.com
            </a>
            <a
              href="tel:+639152468649"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Svg spriteName="icon-stay_current_portrait" className="svgs" />
              +63 915 246 8649
            </a>
            <a
              href="https://www.facebook.com/emmanuel.engreso/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Svg spriteName="icon-facebook" className="svgs" />
              Emmanuel Engreso
            </a>
          </div>
          <div className="seperator">
            <span>OR</span>
          </div>

          {isLoading ? (
            <div className="loader"></div>
          ) : success ? (
            <div className="success">
              <h1>Thank you for your interest. I will be in touch soon</h1>
            </div>
          ) : (
            <form className="form">
              <ToastContainer className="toastTest" />
              <div className="form-input-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-input-group">
                <label htmlFor="email">Your Email Address*</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-input-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  type="textarea"
                  name="message"
                  rows="8"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="form-input-group">
                <button className="btn" onClick={contactSubmit}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
