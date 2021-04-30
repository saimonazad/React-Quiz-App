import React from "react";
import Styled from "styled-components";

//import quiz thumbnail
import QuizImg from "../../../assets/img/quiz-thumbnails/adobe-photoshop-2020-latest-version-free-download-for-windows-10.png";

const Wrapper = Styled.div`
    flex: 1 1 100%;
    margin-right: 50px;
    position: relative;
    align-self: flex-start;
    img {
        width: 100%;
        height: 100%;
    }
    .progress__background {
      position: absolute;
      top: 8%;
      width: 100%;
      height: 10px;
      background-color: #728391;
      opacity: 0.8;
    }
    .progress__overlay {
      position: absolute;
      top: 8%;
      width: 20%;
      height: 10px;
      background-color: #60D91A;
    }
    .quiz__info {
      position: absolute;
      top: 15%;
    }
`;

const QuizThumbnail = () => {
  return (
    <Wrapper>
      <img src={`${QuizImg}`} alt="Quiz Thumbnail" />
      <div class="progress__background"></div>
      <div class="progress__overlay"></div>
      <div class="quiz__info">
        <p>Graphic Design</p>
        <h1>
          Photoshop Quiz
          <br /> Questions And Answers
        </h1>
        <p>A short quiz to test how well you know Adobe Photoshop</p>
      </div>
    </Wrapper>
  );
};

export default QuizThumbnail;
