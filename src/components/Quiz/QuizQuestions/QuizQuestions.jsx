import React, { useState } from "react";
import Styled from "styled-components";
import Button from "../../../shared/button";
import quizData from "../../../data/questions";
import { ArrowRightAlt } from "@styled-icons/material-sharp/ArrowRightAlt";

const ArrowRight = Styled(ArrowRightAlt)`
    padding-right: 6px;
  
    
`;
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

    ${(props) => {
      if (props.active) {
        return `
          background-color: #60D91A;
          color: #FFF;
        `;
      }
    }}
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

const QuizQuestions = () => {
  const [number, setNumber] = useState(0);
  return (
    <Wrapper>
      {quizData[0] && (
        <>
          <Question>
            <p>
              Question {number + 1} <span>/{quizData.length}</span>
            </p>
            <h1>{quizData[0].question}</h1>
          </Question>
          <Options>
            {quizData[0].answers.map((item) => (
              <Option block>{item}</Option>
            ))}
          </Options>
          <SubmitBtn block>SUBMIT</SubmitBtn>
          <NextBtn block>
            NEXT
            <ArrowRight size="30" title="next button" />
          </NextBtn>
        </>
      )}
    </Wrapper>
  );
};

export default QuizQuestions;
