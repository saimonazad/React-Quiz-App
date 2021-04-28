import React from "react";
import Styled from "styled-components";

//import quiz thumbnail
import QuizImg from "../../../assets/img/quiz-thumbnails/adobe-photoshop-2020-latest-version-free-download-for-windows-10.png";

const Wrapper = Styled.div`
    flex: 1 1 100%;
    margin-right: 50px;
    img {
        width: 100%;
        height: 100%;
    }
`;

const QuizThumbnail = () => {
  return (
    <Wrapper>
      <img src={`${QuizImg}`} alt="Quiz Thumbnail" />
    </Wrapper>
  );
};

export default QuizThumbnail;
