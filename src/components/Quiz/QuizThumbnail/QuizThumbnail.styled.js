import Styled from "styled-components";

//import quiz thumbnail
import QuizImg from "../../../assets/img/quiz-thumbnails/adobe-photoshop-2020-latest-version-free-download-for-windows-10.png";

//icons
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Facebook } from "@styled-icons/entypo-social/Facebook";

//styled components
const Wrapper = Styled.div`
    flex: 1 1 100%;
    margin-right: 50px;
    position: relative;

    .container {
      background:linear-gradient(180deg,rgba(0,0,0,.4),rgba(0,0,0,.5)),url(${QuizImg}) 50%/cover no-repeat;
      border-radius: 10px;
      padding-top: 3.75rem;
      height: 750px;
    }

    .quiz__info--wrapper {
      padding: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      color: white;

    }
    .quiz__info--top {
      p {
        color: #000;
        background-color: #fff;
        border-radius: 20px;
        display: inline-block;
        padding: 7px 18px;
        box-shadow: 0px 10px 20px #60D91A4D;
        font-size: 14px;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        margin: 0 0 30px;
      }
      h1 {
        font-size: 32px;
        line-height: 40px;
        margin: 0 0 30px;
      }
      desc {
        font-size: 18px;
        line-height: 24px;
      }
    }

    .quiz__info--bottom {
      display: flex;
      justify-content: space-between;
    }
    .quiz__info--bottom--text {
      h3 {
        font-size: 14px;
        line-height: 24px;
        margin: 0 0 10px;
      }
      h4 {
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        margin: 0;
      }
    }
    .quiz__info--bottom--icon{
      align-self: flex-end;
    }
`;

const FacebookIcon = Styled(Facebook)`
  margin: 0 20px;
`;
const LinkedinIcon = Styled(LinkedinSquare)`
  
`;

export { Wrapper, FacebookIcon, LinkedinIcon };
