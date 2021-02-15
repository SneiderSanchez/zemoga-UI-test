import React from "react";
import { Footer, SocialMedia, FacebookIcon, TwitterIcon } from "./styles";
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
        <FacebookIcon />
        <TwitterIcon />
      </SocialMedia>
    </Footer>
  );
};

export default FooterComponent;
