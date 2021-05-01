import React from "react";
import Styled from "styled-components";

//import quiz thumbnail
import QuizImg from "../../../assets/img/quiz-thumbnails/adobe-photoshop-2020-latest-version-free-download-for-windows-10.png";

//styled component
import ProgressBar from "../../../shared/progressBar";

//icons
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Facebook } from "@styled-icons/entypo-social/Facebook";

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

const Fa_icon = Styled(Facebook)`
  margin: 0 20px;
`;
const Li_icon = Styled(LinkedinSquare)`
  
`;

const QuizThumbnail = ({ quizNo, quizLength }) => {
  return (
    <Wrapper>
      <div className="container">
        <ProgressBar max="100" value={`${(quizNo / quizLength) * 100}`} />
        <div className="quiz__info--wrapper">
          <div className="quiz__info--top">
            <p>Graphic Design</p>
            <h1>
              Photoshop Quiz
              <br /> Questions And Answers
            </h1>
            <desc>
              A short quiz to test how well you know
              <br /> Adobe Photoshop
            </desc>
          </div>
          <div className="quiz__info--bottom">
            <div className="quiz__info--bottom--text">
              <h3>By Bappi Ashraf</h3>
              <h4>Oct 9th, 06:03:11 PM</h4>
            </div>
            <div className="quiz__info--bottom--icon">
              <Fa_icon size="30" title="facebook icon" />
              <Li_icon size="38" title="linkedin icon" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default QuizThumbnail;
