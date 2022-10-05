import { delay } from "./delay.js";

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

export async function getQuestions() {
  await delay();
  return questions;
}
