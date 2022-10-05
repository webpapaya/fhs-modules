import { getQuestions } from "./questions.js";

let questions = undefined;

async function executeQuiz() {
  questions = await getQuestions();
  console.log(questions);
  const askedQuestion = askQuestion();
  const answer = await answerQuestion(askedQuestion, "a");
  console.log(answer ? "correct" : "incorrect");
}

export function askQuestion() {
  const randomNumber = Math.floor(Math.random() * questions.length);
  const clonedQuestion = { ...questions[randomNumber] };
  delete clonedQuestion.correctAnswer;
  return clonedQuestion;
}

export async function answerQuestion(question, answer) {
  const matchigQuestionIndex = questions.findIndex(
    (staticQuestions) => staticQuestions.question === question.question
  );

  const correctAnswer = questions[matchigQuestionIndex].correctAnswer;

  if (answer === correctAnswer) return true;
  else return false;
}

executeQuiz();
