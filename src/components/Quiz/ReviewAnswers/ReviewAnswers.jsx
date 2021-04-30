import React, { useState } from "react";

import {
  Wrapper,
  Question,
  OptionWrapper,
  Option,
  OptionImage,
  ImageAnswers,
  ImageContainer,
} from "../QuizQuestions/QuizQuestions.styled";

import quizData from "../../../data/questions";

const ReviewAnswers = ({ result }) => {

  return (
    <>
      {quizData.map((quiz, index) => (
        <>
          <Question>
            <p>
              Question {index + 1} <span>/{quizData.length}</span>
            </p>
            <h1>{quiz.question}</h1>
            {console.log(result[quiz.questionId])}
          </Question>
          <OptionWrapper>
            {quiz.questionType == "text" ? (
              quiz.answers.map((item, index) => (
                <Option
                  block
                  correct={quiz.correct === index}
                  response={result[quiz.questionId] == index}
                >
                  {item}
                </Option>
              ))
            ) : (
              <OptionImage>
                {quiz.answers.map((img, index) => (
                  <ImageContainer
                    correct={quiz.correct === index}
                    response={result[quiz.questionId] == index}
                  >
                    <ImageAnswers
                      src={process.env.PUBLIC_URL + `/quiz-data/img/${img}`}
                      correct={quiz.correct === index}
                      response={result[quiz.questionId] == index}
                    ></ImageAnswers>
                  </ImageContainer>
                ))}
              </OptionImage>
            )}
          </OptionWrapper>
        </>
      ))}
    </>
  );
};

export default ReviewAnswers;
