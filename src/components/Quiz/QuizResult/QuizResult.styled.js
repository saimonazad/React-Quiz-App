import Styled from "styled-components";
//import shared
import Button from "../../../shared/button";

//icons
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { Medal } from "@styled-icons/entypo/Medal";

//styled components
const Wrapper = Styled.div`
  text-align: center;
  
  .title {
    color: #0062FF;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 7.2px;
    margin: 0;
    display: inline-block;
    vertical-align: middle;
  }
  .score {
    color: #60D91A;
    font-size: 80px;
    font-family: "Montserrat", sans-serif;
    margin: 10px 0;
  }
  .score__greet{
    color: #000;
    font-size: 32px;
    font-family: "OpenSans", sans-serif;
    font-weight: 700;
    margin: 10px 0;
  }
  .score__details {
    color: #000;
    font-size: 18px;
    font-family: "OpenSans", sans-serif;
  }
  .score__share {
    color: #728391;
    font-size: 18px;
    font-family: "OpenSans", sans-serif;
    margin: 23px 0 0;
  }
  .workshop__info {
    color: #000;
    font-size: 18px;
    font-family: "OpenSans", sans-serif;
    font-weight: 700;
    line-height: 25px;
    margin: 44px 0 22px;
  }
`;

const ReviewBtn = Styled(Button)`
  box-shadow: 0px 10px 20px #0062FF4D;
  padding: 20px 80px;
  margin-top: 10px;
`;

const Workshop = Styled.div`
  box-shadow: 0px 5px 10px #01368619;
  border-radius: 10px;
  display: inline-block;
  
  p {
    text-align: left;
    color: #000;
    margin: 10px 15px 20px 15px;
    font-family: "OpenSans", sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    }
`;

const FacebookIcon = Styled(Facebook)`
  margin: 0 20px;
`;
const LinkedinIcon = Styled(LinkedinSquare)`
  
`;
const MedalIcon = Styled(Medal)`
    color: #0062FF;
    margin-right: 8px;
`;

export { Wrapper, ReviewBtn, Workshop, FacebookIcon, LinkedinIcon, MedalIcon };
