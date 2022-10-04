const questions = [
  {
    question: "What is the best Series?",
    correctAnswer: "a",
    a: "Breaking Bad",
    b: "Stranger Things",
    c: "One Piece",
    d: "Fargo",
  },
  {
    question: "What is the best movie?",
    correctAnswer: "c",
    a: "The Lord of the Rings",
    b: "Spirited Away",
    c: "Princess Mononoke",
    d: "Daniel der Zauberer",
  },
  {
    question: "What is the best operating system",
    correctAnswer: "a",
    a: "TempleOS",
    b: "Windows",
    c: "LFS",
    d: "Mac OS",
  },
];

export function askQuestion() {
  const randomNumber = Math.floor(Math.random() * questions.length);
  const clonedQuestion = { ...questions[randomNumber] };
  delete clonedQuestion.correctAnswer;
  return clonedQuestion;
}

export function answerQuestion(question, answer) {
  const matchigQuestionIndex = questions.findIndex(
    (staticQuestions) => staticQuestions.question === question.question
  );

  const correctAnswer = questions[matchigQuestionIndex].correctAnswer;

  if (answer === correctAnswer) return true;
  else return false;
}

export async function getQuestions() {}
