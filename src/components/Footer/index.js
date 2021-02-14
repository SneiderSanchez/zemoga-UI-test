import React from "react";

import { Footer, SocialMedia } from "./styles";

const FooterComponent = () => {
  return (
    <Footer>
      <ul>
        <li>
          <a href="/terms">Terms and Conditions</a>
        </li>
        <li>
          <a href="/pricacy">Privacy Policy</a>
        </li>
        <li>
          <a href="/contactUs">Contact Us</a>
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
