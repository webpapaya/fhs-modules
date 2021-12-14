const questions = [
    { 
        question: "test",
        correctAnswer: "a",
        a: 1,
        b: 2,
        c: 3
    }
]


const askQuestion1 = () => {
    const question = questions[0]
    const questionToAsk = {
        question: question.question,
        a: question.a,
        b: question.b,
        c: question.c
    }
    return questionToAsk
}

const askQuestion2 = () => {
    const { correctAnswer, ...questionToAsk } = questions[0]
    return questionToAsk
}
