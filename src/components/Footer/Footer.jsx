import React from "react";

//import styled components
import {
  Container,
  Wrapper,
  SubscribeBtn
} from "./Footer.styled";


const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <div className="about-us">
          <h1>ABOUT US</h1>
          <p>
            Upskill is a peer to peer skill sharing platform. It enables
            individuals and organizations to share skills and exchange technical
            knowledge to bridge the skills gap in Bangladesh.
          </p>
        </div>
        <div className="links">
          <h1>HELPFUL LINKS</h1>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Statement</a>
            </li>
            <li>
              <a href="#">About Upskill</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h1>CONTACT</h1>
          <p>
            Upskill Training Center Flat- 4B, House- 516/3, Lane- 10 Baridhara
            DOHS{" "}
          </p>
          <a href="tel:01727234132">01727 234132</a>
          <a href="mailto:sanan.upskill@gmail.com">sanan.upskill@gmail.com</a>
        </div>
        <div className="newsletter">
          <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
          <form>
            <input type="email" placeholder="Type your mail" />
            <SubscribeBtn type="submit">SUBSCRIBE</SubscribeBtn>
          </form>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Footer;
