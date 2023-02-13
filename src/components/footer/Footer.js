import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";

import paymentIcon1 from "../../images/icons/icon-pay-01.png";
import paymentIcon2 from "../../images/icons/icon-pay-02.png";
import paymentIcon3 from "../../images/icons/icon-pay-03.png";
import paymentIcon4 from "../../images/icons/icon-pay-04.png";
import paymentIcon5 from "../../images/icons/icon-pay-05.png";

const Footer = () => {
  return (
    <footer className="footer--container">
      <div className="footer--container--wrap">
        <div>
          <h3>categories</h3>
          <ul>
            <li>
              <a>Women</a>
            </li>
            <li>
              <a>Men</a>
            </li>
            <li>
              <a>Shoes</a>
            </li>
            <li>
              <a>Watches</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>help</h3>
          <ul>
            <li>
              <a>Track Order</a>
            </li>
            <li>
              <a>Returns</a>
            </li>
            <li>
              <a>Shipping</a>
            </li>
            <li>
              <a>FAQs</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>get in touch</h3>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879{" "}
          </p>
          <div className="footer--social--icons">
            <div>
              <FiFacebook />
            </div>
            <div>
              <FiInstagram />
            </div>
            <div>
              <FaPinterestP />
            </div>
          </div>
        </div>
      </div>
      <div className="footer--payment--icons">
        <img src={paymentIcon1} />
        <img src={paymentIcon2} />
        <img src={paymentIcon3} />
        <img src={paymentIcon4} />
        <img src={paymentIcon5} />
      </div>
    </footer>
  );
};

export default Footer;
