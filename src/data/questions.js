const quizData = [
  {
    question: "Why would you get this pop up?",
    answers: ["The layer you are trying to work on is locked", "Doesn't matter just close it and try again", "Because photoshop is broken"],
    correct: 0,
    questionId: "099099",
  },
  {
    question: "This is the default selection setting on the toolbar. With this you can make a selection of any rectangular size and shape.",
    answers: ["Rectangular marquee tool", "Elliptical marquee tool", "Single row"],
    correct: 1,
    questionId: "093909",
  },
  {
    question: "The toolbox is located on the left side of the interface and houses manytools that a revisible and hidden.",
    answers: ["True", "False"],
    correct: 0,
    questionId: "009039",
  },
  {
    question: "The name of the points that are made with the pen tool when it is makinga path.",
    answers: ["anchorpoints", "markers", "spotters", "clusters"],
    correct: 0,
    questionId: "090089",
  },
];

export default quizData.sort(() => 0.5 - Math.random());
