import { useEffect, useState } from "react";

import { BsEnvelope, BsTelephoneForward } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function showMessage() {
    const regExp =
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/gi;
    if (regExp.test(email) && message.length) {
      setError(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setEmail("");
        setMessage("");
      }, 2500);
    } else {
      setSuccess(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
    }
  }

  useEffect(() => {
    setError(false);
    setSuccess(false);
  }, []);

  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="contact--header--image"></div>
        <div className="contact--form--info">
          <div className="contact--form--container">
            <h3>Send Us a Message</h3>
            <div className="contact--form">
              <div className="contact--form--email">
                <span>
                  <BsEnvelope />
                </span>
                <input
                  value={email}
                  type="email"
                  placeholder="Your email..."
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="contact--form--textarea">
                <textarea
                  value={message}
                  placeholder="How can we help you?"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button className="contact--form--submit" onClick={showMessage}>
                Submit
              </button>
            </div>
          </div>
          <div className="contact--info">
            <div className="contact--info--location">
              <div>
                <SlLocationPin />
              </div>
              <div>
                <p>Address</p>
                <p>
                  Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018
                  US
                </p>
              </div>
            </div>
            <div className="contact--info--phone">
              <div>
                <BsTelephoneForward />
              </div>
              <div>
                <p>let's Talk</p>
                <p>+1 800 1236879</p>
              </div>
            </div>
            <div className="contact--info--contact">
              <div>
                <BsEnvelope />
              </div>
              <div>
                <p>Sales Support</p>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <span className="contact--error" aria-expanded={error}>
          Make sure you've entered your email address and message
        </span>
        <span className="contact--success" aria-expanded={success}>
          You message was successfully sent!
        </span>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
