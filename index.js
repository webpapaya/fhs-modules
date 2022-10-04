const question = {
    question: "Whatever",
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    correctAnswer: 'a'
}

function askQuestion() {
    const copy = { ...question }
    delete copy.correctAnswer
    return {
        question: question.question,
        a: question.a,
        b: question.b,
        c: question.c,
        d: question.d,
    }
}

function listAllQuestions() {
    return question
}

console.log(askQuestion())
console.log(listAllQuestions())
