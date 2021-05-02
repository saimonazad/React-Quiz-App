import React, { useState } from "react";

//data import
import QuizResult from "../QuizResult/QuizResult";

//styled components import
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

//react toastify for toast notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizQuestions = ({ quizNo, setQuizNo, quizLength, quizData }) => {
  const [correctAns, setCorrectAns] = useState(0);
  const [selectedAns, setSelectedAns] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responses, setResponses] = useState({});

  /*
    react toastify function to invoke toast
  */
  const notify = () =>
    toast.error("Please select an option to move to the next question !!!", {
      position: toast.POSITION.TOP_RIGHT,
    });

  /*
    onClick Submit btn function
    check correct answer and submit
  */
  const checkAnswer = () => {
    if (selectedAns !== null) {
      if (selectedAns === quizData[quizNo].correct) {
        setCorrectAns(correctAns + 1);
      }
      setIsSubmitted(true);
      setResponses({
        ...responses,
        [quizData[quizNo].questionId]: selectedAns,
      });
    } else {
      notify();
    }
    if (quizNo === quizLength - 1) {
      setQuizNo(quizNo + 1);
    }
  };

  return (
    <Wrapper>
      <ToastContainer />
      {quizNo < quizLength ? (
        <>
          <Question>
            <p>
              Question {quizNo + 1} <span>/{quizLength}</span>
            </p>
            <h1>{quizData[quizNo].question}</h1>
            {quizData[quizNo].questionImage && (
              <img
                className="question__Image"
                src={
                  process.env.PUBLIC_URL +
                  `/quiz-data/img/${quizData[quizNo].questionImage}`
                }
                alt="question pic"
              />
            )}
          </Question>
          <OptionWrapper>
            {quizData[quizNo].questionType === "text" ? (
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
          {isSubmitted && quizNo < quizLength - 1 && (
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
          totalQuestions={quizLength}
          result={responses}
        />
      )}
    </Wrapper>
  );
};

export default QuizQuestions;
