const quizData = [
  {
    question: "Why would you get this pop up?",
    questionType: "image",
    answers: [
      "chris-liverani-rD2dc_2S3i0-unsplash.png",
      "imagesQuiz.png",
      "oriento-0dg-EfHgA8Q-unsplash.png",
    ],
    correct: 0,
    questionId: "110",
  },
  {
    question:
      "This is the default selection setting on the toolbar. With this you can make a selection of any rectangular size and shape.",
    questionType: "text",
    answers: [
      "Rectangular marquee tool",
      "Elliptical marquee tool",
      "Single row",
    ],
    correct: 1,
    questionId: "120",
  },
  {
    question:
      "The toolbox is located on the left side of the interface and houses manytools that a revisible and hidden.",
    questionType: "text",
    answers: ["True", "False"],
    correct: 0,
    questionId: "130",
  },
  {
    question:
      "The name of the points that are made with the pen tool when it is makinga path.",
    questionType: "text",
    answers: ["anchorpoints", "markers", "spotters", "clusters"],
    correct: 0,
    questionId: "20",
  },
  {
    question:
      "The name of the points that are made with the pen tool when it is makinga path.",
    questionType: "text",
    answers: ["anchorpoints", "markers", "spotters", "clusters"],
    correct: 0,
    questionId: "15",
  },
  {
    question:
      "The name of the points that are made with the pen tool when it is makinga path.",
    questionType: "text",
    answers: ["anchorpoints", "markers", "spotters", "clusters"],
    correct: 0,
    questionId: "18",
  },
];

export default quizData.sort(() => 0.5 - Math.random());
