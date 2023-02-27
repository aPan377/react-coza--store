import { BsEnvelope, BsTelephoneForward } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Contact = () => {
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
                <input type="email" placeholder="Your email..." />
              </div>
              <div className="contact--form--textarea">
                <textarea placeholder="How can we help you?" />
              </div>
              <button className="contact--form--submit">Submit</button>
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
      </section>
      <Footer />
    </>
  );
};

export default Contact;
