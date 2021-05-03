import React, { useState } from "react";
//import component
import ReviewAnswers from "../ReviewAnswers/ReviewAnswers";
//import assets
import workshopImg from "../../../assets/img/workshop/User-Experience-(UX)-Design.png";
//import util function
import percentage from "../../../utils/percentageCalc";

import {
  Wrapper,
  ReviewBtn,
  Workshop,
  FacebookIcon,
  LinkedinIcon,
  MedalIcon,
} from "./QuizResult.styled";

const QuizResult = ({ correctAnswers, totalQuestions, result }) => {
  const [reviewPage, setreviewPage] = useState(false);
  return (
    <>
      {reviewPage === false ? (
        <Wrapper>
          <MedalIcon size="22" title="medal icon" />
          <h1 className="title">SCORE</h1>
          <h2 className="score">
            {percentage(correctAnswers, totalQuestions)}%
          </h2>
          <p class="score__greet">Congratulations</p>
          <p className="score__details">
            You got {correctAnswers} out of {totalQuestions} Questions
          </p>
          <ReviewBtn
            onClick={() => setreviewPage(true)}
          >
            Review
          </ReviewBtn>
          <p className="score__share">
            Share score
            <FacebookIcon size="30" title="facebook icon" />
            <LinkedinIcon size="35" title="linkedin icon" />
          </p>
          <p className="workshop__info">
            You can attend this workshop
            <br /> to improve your skill
          </p>
          <Workshop>
            <img src={`${workshopImg}`} alt="workshop thumbnail" />
            <p>
              User Experience (UX) Design:
              <br /> From Ideation to Validation
            </p>
          </Workshop>
        </Wrapper>
      ) : (
        <ReviewAnswers result={result} />
      )}
    </>
  );
};

export default QuizResult;
