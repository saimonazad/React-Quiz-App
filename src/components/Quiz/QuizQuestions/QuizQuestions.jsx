import React, { useState } from "react";

import quizData from "../../../data/questions";
import QuizResult from "../QuizResult/QuizResult";

import {
  Wrapper,
  Question,
  OptionWrapper,
  Option,
  OptionImage,
  ImageAnswers,
  SubmitBtn,
  NextBtn,
  ArrowRight,
} from "./QuizQuestions.styled";

const QuizQuestions = () => {
  const [quizNo, setQuizNo] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [selectedAns, setSelectedAns] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responses, setResponses] = useState({});

  const checkAnswer = () => {
    if (selectedAns != null) {
      if (selectedAns == quizData[quizNo].correct) {
        setCorrectAns(correctAns + 1);
      }
      setIsSubmitted(true);
      setResponses({
        ...responses,
         [quizData[quizNo].questionId]: selectedAns ,
      });
    }
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
            {quizData[quizNo].questionImage && (
              <img
              className="question__Image"
                src={
                  process.env.PUBLIC_URL +
                  `/quiz-data/img/${quizData[quizNo].questionImage}`
                }
              />
            )}
          </Question>
          <OptionWrapper>
            {quizData[quizNo].questionType == "text" ? (
              quizData[quizNo].answers.map((item, index) => (
                <Option
                  isActive={selectedAns === index}
                  block
                  onClick={() => setSelectedAns(index)}
                >
                  {item}
                </Option>
              ))
            ) : (
              <OptionImage>
                {quizData[quizNo].answers.map((img, index) => (
                  <ImageAnswers
                    isActive={selectedAns === index}
                    onClick={(e) => setSelectedAns(index)}
                    src={process.env.PUBLIC_URL + `/quiz-data/img/${img}`}
                  ></ImageAnswers>
                ))}
              </OptionImage>
            )}
          </OptionWrapper>
          <SubmitBtn block onClick={() => checkAnswer()}>
            SUBMIT
          </SubmitBtn>
          {isSubmitted && quizNo < quizData.length - 1 && (
            <NextBtn
              block
              onClick={() => {
                setQuizNo(quizNo + 1);
                setIsSubmitted(false);
                setSelectedAns(null);
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
          result={responses}
        />
      )}
    </Wrapper>
  );
};

export default QuizQuestions;
