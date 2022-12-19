const startButton = document.getElementById("start-btn")
const questionContainerElements = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)

function.startGame() {
  console.log("Started")
  startButton.classList.add("hide")
  shuffledQuestions = question.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElements.classList.remove("hide")
  setNextQuestion()
 }

 function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
 }

 function showQuestion(question){
  questionElement.innerText = question.question
  question.answer.forEach

 }

 function selectAnswer(){

 }
 
 const question = [
  {
    question:
  }
 ]