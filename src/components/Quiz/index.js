import React from "react";
import Styled from "styled-components";

// import components
import QuizQuestions from "./QuizQuestions/QuizQuestions";
import QuizThumbnail from "./QuizThumbnail/QuizThumbnail";

//styled components
const Wrapper = Styled.div`
    display: flex;
    max-width: 1300px;
    margin: 0 auto;
`;

const Quiz = () => {
  return (
    <Wrapper>
      <QuizThumbnail />
      <QuizQuestions />
    </Wrapper>
  );
};

export default Quiz;
