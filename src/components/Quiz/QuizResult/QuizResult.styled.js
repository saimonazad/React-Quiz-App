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
    color: ${(props) => props.theme.colors.BlueRibbon};
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 7.2px;
    margin: 0;
    display: inline-block;
    vertical-align: middle;
  }
  .score {
    color: ${(props) => props.theme.colors.Lime};
    font-size: 80px;
    font-family: "Montserrat", sans-serif;
    margin: 10px 0;
  }
  .score__greet{
    color: ${(props) => props.theme.colors.Black};
    font-size: 32px;
    font-family: "OpenSans", sans-serif;
    font-weight: 700;
    margin: 10px 0;
  }
  .score__details {
    color: ${(props) => props.theme.colors.Black};
    font-size: 18px;
    font-family: "OpenSans", sans-serif;
  }
  .score__share {
    color: ${(props) => props.theme.colors.SlateGray};
    font-size: 18px;
    font-family: "OpenSans", sans-serif;
    margin: 23px 0 0;
  }
  .workshop__info {
    color: ${(props) => props.theme.colors.Black};
    font-size: 18px;
    font-family: "OpenSans", sans-serif;
    font-weight: 700;
    line-height: 25px;
    margin: 44px 0 22px;
  }
`;

const ReviewBtn = Styled(Button)`
  background: ${(props) => props.theme.colors.BlueRibbon};
  box-shadow: 0px 10px 20px ${(props) => props.theme.colors.LightBlueRibbon};
  padding: 20px 80px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.White};
`;

const Workshop = Styled.div`
  box-shadow: 0px 5px 10px #01368619;
  border-radius: 10px;
  display: inline-block;
  
  p {
    text-align: left;
    color: ${(props) => props.theme.colors.Black};
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
    color: ${(props) => props.theme.colors.BlueRibbon};
    margin-right: 8px;
`;

export { Wrapper, ReviewBtn, Workshop, FacebookIcon, LinkedinIcon, MedalIcon };
