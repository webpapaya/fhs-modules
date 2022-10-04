import { answerQuestion, askQuestion } from "./questions.js";

const question = askQuestion();
console.log(question);

const answer = answerQuestion(question, "a");
console.log(answer ? "correct" : "incorrect");
