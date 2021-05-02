import React from "react";

//styled component
import { Wrapper, FacebookIcon, LinkedinIcon } from "./QuizThumbnail.styled";

import ProgressBar from "../../../shared/progressBar";

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
              <FacebookIcon size="30" title="facebook icon" />
              <LinkedinIcon size="38" title="linkedin icon" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default QuizThumbnail;
