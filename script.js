var questions = [
  {
    title: "HTML stands for",
    choices: ["HighText Machine Language", "HyperText and links Markup Language", "HyperText Markup Language", "None of these"],
    answer: "HyperText Markup Language"
  },
  {
    title: "Which of the following CSS selectors are used to specify a group of elements?",
    choices: ["tag", "id", "class", "all of above"],
    answer: "class"
  },
  {
    title: "Javascript is an _______ language?",
    choices: ["object-oriented", "object-based", "procedural", "none of above"],
    answer: "object-oriented"
  },
  {
    title: "Which of the following keywords is used to define a variable in Javascript?",
    choices: ["var", "let", "Both A and B", "None of above"],
    answer: "Both A and B"
  }
]
var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionArr = document.querySelector("#questionArr");
var container = document.querySelector("#container");


var secondLeft = 15;
var holdInterval = 0;
var ulCreate = document.createElement("ul");


timer.addEventListener("click", function(){
  if (holdInterval === 0) {
    holdInterval = setInterval(function(){
      secondLeft--;
      currentTime.textContent = "Time: " + secondLeft;

      if (secondLeft <= 0) {
        clearInterval(holdInterval);
        allDone();
        currentTime.textContent = "time's up";
      }
    }, 1000);
  }
  render(questionIndex);
}
);

function render(questionIndex){
  questionArr.innerHTML = "";
  ulCreate.innerHTML = "";
  for (var i = 0; i < questions.length; i++ ) {
    var userQuestion = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    questionArr.textContent = userQuestion;
  }

  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionArr.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", (compare));
  }
  )
}

function compare(event) {
  var element = event.target;

  if (element.maches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    
    if (element.textContent == question[questionIndex].answer){
      score++;
      createDiv.textContent = "You are right, the answer is: " + questions[questionIndex].answer;
    } else {
      createDiv.textContent = "Wrong!, the answer is: " + questions[questionIndex].answer;
    }
  }
  questionIndex++;
  
  if (questionIndex >= question.length){
    allDone();
    createDiv.textContent = "End of quiz! " + "you got " + score + "/" + questions.length + " Correct"; 
  } else {
    render(questionIndex);
  }
  questionDiv.appendChild(createDiv);
}

