import React from "react";
import { Footer, SocialMedia } from "./styles";
import { Link } from "react-router-dom";
const FooterComponent = () => {
  return (
    <Footer>
      <ul>
        <li>
          <Link to="/terms">Terms and Conditions</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/contactUs">Contact Us</Link>
        </li>
      </ul>
      <SocialMedia>
        <p> Follow Us</p>
        <img src="./facebook.svg" alt="facebook"></img>
        <img src="./twitter.svg" alt="twitter"></img>
      </SocialMedia>
    </Footer>
  );
};

export default FooterComponent;
