```
git clone https://github.com/webpapaya/fhs-modules.git
cd fhs-modules
git checkout -b calculator
npm ci
npm start
# go to localhost:8080
```

```js
const calculator1 = calculator()
calculator1(1)  // 1
calculator1(10) // 11
calculator1(-1) // 10
```

```
git checkout master
git remote remove origin
git remote add origin git@gitlab.mediacube.at:fhs34784/ws-2022-frontend-development-ii.git
git push origin master
git checkout calculator
git commit -m "added calculator"
git checkout master
git checkout -b quiz
```

```js
const question1 = askQuestion()
answerQuestion(question1, "a")

const question2 = askQuestion()
answerQuestion(question2, "b")

const question3 = askQuestion()
answerQuestion(question3, "c")
```
