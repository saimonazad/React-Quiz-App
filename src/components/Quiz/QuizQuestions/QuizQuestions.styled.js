import Styled from "styled-components";
import Button from "../../../shared/button";
import { ArrowRightAlt } from "@styled-icons/material-sharp/ArrowRightAlt";

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
const OptionWrapper = Styled.div`
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
      color: #FFF;
      `}
      
      ${(props) =>
        props.correct &&
        `background-color: #60D91A;
         color: #FFF;
         &:after{
             content: "✓";
            float: right;
            color: #60D91A;
            border-radius: 50%;
            background-color: #FFF;
            padding: 0 5px;
         }
         `}

      ${(props) => {
        if (props.response && props.response != props.correct) {
          return `
                background-color: red;
                color: #FFF;

                &:after{
                    content: "✕";
                    float: right;
                    color: red;
                    border-radius: 50%;
                    background-color: #FFF;
                    padding: 0 5px;
         }
                `;
        }
      }}
`;
const OptionImage = Styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:2rem;

    
`;
const ImageAnswers = Styled.img`
    width: 100%;
    cursor: pointer;
    ${(props) =>
      props.isActive &&
      `border: 5px solid #60D91A;
      border-radius: 15px;
      `}
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
    transition:all 1s ease;
`;
const ArrowRight = Styled(ArrowRightAlt)`
    padding-right: 6px;
`;

export {
  Wrapper,
  Question,
  OptionWrapper,
  Option,
  OptionImage,
  ImageAnswers,
  SubmitBtn,
  NextBtn,
  ArrowRight,
};
