import Styled from "styled-components";
import Button from "../../../shared/button";
import { ArrowRightAlt } from "@styled-icons/material-sharp/ArrowRightAlt";

//device breakpoints
import { device } from "../../../theme/device";
//styled components
const Wrapper = Styled.div`
  flex: 1 1 100%;
`;
const Question = Styled.div`
    p {
        color: #60D91A;
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        span {
            color: #728391;
        }
    }
    h1 {
        color: #000;
        font-size: 20px;
        line-height: 30px;
    }
    img {
      display:block;
      margin: 10px auto 0 auto;
      width: 85%;
    }

    @media ${device.tablet} {
        p {
          font-size: 18px;
      }
      h1 {
          font-size: 22px;
          line-height: 30px;
      }
      img {
        margin: 20px auto 0 auto;
        width: 85%;
      }
    }
    @media ${device.laptop} {
      p {
          font-size: 18px;
      }
      h1 {
          font-size: 24px;
          line-height: 30px;
      }
      img {
        margin: 30px auto 0 auto;
        width: 55%;
      }
      }
      
    
`;
const OptionWrapper = Styled.div`
    color:#000;
    padding: 20px 0;

    @media ${device.tablet} {
        padding: 20px 0;
      }
      @media ${device.laptop} {
        padding: 30px 0;
      }
`;
const Option = Styled(Button)`
    color:#000000;
    text-align: left;
    background-color: #EEEFF2;
    font-size: 15px;
    padding: 15px 15px;
    margin-bottom: 10px;
    font-weight: 600;

    @media ${device.tablet} {
      font-size: 17px;
    padding: 16px 20px;
      }
      @media ${device.laptop} {
        font-size: 18px;
    padding: 20px 25px;

      }


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
        if (props.response && props.response !== props.correct) {
          return `
                background-color: #D60000;
                color: #FFF;

                &:after{
                    content: "✕";
                    float: right;
                    color: #D60000;
                    border-radius: 50%;
                    background-color: #FFF;
                    padding: 0 5px;
         }
                `;
        }
      }}
`;
const OptionImage = Styled.div`
position:relative;
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

    ${(props) =>
      props.correct &&
      `border: 5px solid #60D91A;
      border-radius: 15px;
      `}

      ${(props) => {
        if (props.response && props.response !== props.correct) {
          return `
                border: 5px solid #D60000;
                border-radius: 15px;
                `;
        }
      }}
`;
const ImageContainer = Styled.div`
      position: relative;

      
    
    ${(props) =>
      props.correct &&
      `&:after{
        content: "✓";
        position: absolute;
        top: 40%;
        color: #60D91A;
        border-radius: 50%;
        background-color: #FFF;
        padding: 5px 10px;
        left: 40%;
        font-size: 25px;
      }
    `}

    ${(props) => {
      if (props.response && props.response !== props.correct) {
        return `
                &:after{
                    content: "✕";
                    position: absolute;
                    top: 40%;
                    border-radius: 50%;
                    background-color: #D60000;
                    color: #FFF;
                    padding: 5px 10px;
                    left: 40%;
                    font-size: 25px;
         }
                `;
      }
    }}
`;
const SubmitBtn = Styled(Button)`
    color:#FFF;
    background-color: #0062FF;
    font-size: 14px;
    padding: 18px 0;
    letter-spacing: 0.3rem;

    @media ${device.tablet} {
        padding: 25px 0;
      }
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
  ImageContainer,
  ImageAnswers,
  SubmitBtn,
  NextBtn,
  ArrowRight,
};
