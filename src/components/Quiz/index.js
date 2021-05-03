import React, { useState } from "react";
import Styled from "styled-components";

import quizData from "../../data/questions";

// import components
import QuizQuestions from "./QuizQuestions/QuizQuestions";
import QuizThumbnail from "./QuizThumbnail/QuizThumbnail";

//device breakpoints
import device from "../../theme/device";

//styled components
const Wrapper = Styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.25rem 0;
    @media ${device.tablet} {
      flex-direction: row;
      max-width: 1300px;
      margin: 0 auto;
    }
`;

const quizLength = quizData.length;

const Quiz = () => {
  const [quizNo, setQuizNo] = useState(0);
  const props = { quizNo, setQuizNo, quizLength, quizData };

  return (
    <Wrapper>
      <QuizThumbnail {...props} />
      <QuizQuestions {...props} />
    </Wrapper>
  );
};

export default Quiz;
