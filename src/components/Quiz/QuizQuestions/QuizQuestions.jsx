import React, { useState } from "react";
import Styled from "styled-components";
import Button from "../../../shared/button";
import quizData from "../../../data/questions";
import { ArrowRightAlt } from "@styled-icons/material-sharp/ArrowRightAlt";
import QuizResult from "../QuizResult/QuizResult";

//styled components
const Wrapper = Styled.div`
flex: 1 1 100%;
`;

const Question = Styled.div`
    p {
        color: #60D91A;
        font-family: "Montserrat", sans-serif;
        font-size: 18px;
        span {
            color: #728391;
        }
    }
    h1 {
        color: #000;
        font-family: "OpenSans", sans-serif;
        font-size: 24px;
        line-height: 30px;
    }
`;
const Options = Styled.div`
    color:#000;
    font-family: "OpenSans", sans-serif;
    padding: 30px 0;
`;
const Option = Styled(Button)`
    color:#000000;
    text-align: left;
    font-family: "OpenSans", sans-serif;
    background-color: #EEEFF2;
    font-size: 18px;
    padding: 20px 25px;
    margin-bottom: 10px;
    font-weight: 600;

    ${(props) =>
      props.isActive &&
      `background-color: #60D91A;
      color: #FFF
      `}
`;
const OptionImage = Styled.div`
    

    ${(props) =>
      props.isActive &&
      `background-color: #60D91A;
      color: #FFF
      `}
`;
const ImageAnswers = Styled.img.attrs((props) => ({ src: props.img }))`
    width: 150;
    height: 150;
`;
const SubmitBtn = Styled(Button)`
    color:#FFF;
    background-color: #0062FF;
    font-size: 14px;
    padding: 25px 0;
    letter-spacing: 0.3rem;
`;
const NextBtn = Styled(Button)`
    color:#0062FF;
    font-size: 14px;
    padding: 25px 0;
    letter-spacing: 0.3rem;
`;
const ArrowRight = Styled(ArrowRightAlt)`
    padding-right: 6px;
`;


const QuizQuestions = () => {
  const [quizNo, setQuizNo] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [selectedAns, setselectedAns] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const checkAnswer = () => {
    if (selectedAns == quizData[quizNo].correct) {
      setCorrectAns(correctAns + 1);
    }
    selectedAns != null ? setIsSubmitted(true) : setIsSubmitted(false);
    if (quizNo == quizData.length - 1) {
      setQuizNo(quizNo + 1);
    }
  };
  return (
    <Wrapper>
      {quizNo < quizData.length ? (
        <>
          <Question>
            <p>
              Question {quizNo + 1} <span>/{quizData.length}</span>
            </p>
            <h1>{quizData[quizNo].question}</h1>
          </Question>
          <Options>
            {quizData[quizNo].questionType == "text" ? (
              quizData[quizNo].answers.map((item, index) => (
                <Option
                  isActive={selectedAns == index}
                  block
                  onClick={(e) => setselectedAns(e.target.value)}
                  value={index}
                >
                  {item}
                </Option>
              ))
            ) : (
              <OptionImage>
                <ImageAnswers img="../../../assets/img/quiz-questions/chris-liverani-rD2dc_2S3i0-unsplash.png"></ImageAnswers>
              </OptionImage>
            )}
          </Options>
          <SubmitBtn block onClick={() => checkAnswer()}>
            SUBMIT
          </SubmitBtn>
          {isSubmitted && quizNo < quizData.length - 1 && (
            <NextBtn
              block
              onClick={() => {
                setQuizNo(quizNo + 1);
                setIsSubmitted(false);
                setselectedAns(null);
              }}
            >
              NEXT
              <ArrowRight size="30" title="next button" />
            </NextBtn>
          )}
        </>
      ) : (
        <QuizResult
          correctAnswers={correctAns}
          totalQuestions={quizData.length}
        />
      )}
    </Wrapper>
  );
};

export default QuizQuestions;
