import React from "react";

const QuizResult = (props) => {
  return (
    <div>
      {props.correctAnswers}/{props.totalQuestions}
    </div>
  );
};

export default QuizResult;
