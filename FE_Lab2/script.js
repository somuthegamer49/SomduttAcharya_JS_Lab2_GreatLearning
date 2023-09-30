function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

let quo = [
  new Question(
    "SQL is a type of?",
    [
      "Backend Programming",
      "Frontend Programming",
      "Database Query",
      "Data Structures",
    ],
    "Database Query"
  ),
  new Question(
    "JavaScript is used in?",
    [
      "Scripting for Frontend",
      "Developing Backend",
      "Styling pages",
      "Writing HTML",
    ],
    "Scripting for Frontend"
  ),
  new Question(
    "Which language is associated with Backend Development?",
    ["Java", "JavaScript", "CSS", "HTML"],
    "Java"
  ),
  new Question(
    "What is time complexity of Binary Search?",
    ["O(n)", "O(logn)", "O(n^2)", "O(sqrt(n))"],
    "O(logn)"
  ),
  new Question(
    "Which of these is used for styling in web development?",
    ["HTML", "JavaScript", "Java", "CSS"],
    "CSS"
  ),
];

// selecting selectors

let question = document.getElementById("question");
let progress = document.getElementById("progress");
let score=0;
let compl = true
function display(i) {
  progress.innerText = "Page " + (i+1) + " of " + quo.length;
  if (i > quo.length - 1) {
    if(compl){
      over();
    }
  } else {
    question.innerText = quo[i].text;
    for (let j = 0; j < quo[i].choices.length; j++) {
      let button = document.getElementById("btn" + j);
      button.innerText = quo[i].choices[j];
    }
    quiz(i)
  }
}
function quiz(i) {
  for(let j=0; j< quo[i].choices.length; j++){
  let button = document.getElementById("btn"+j)
  button.addEventListener("click",(e)=>{
    e.preventDefault()
    if(check(e.target.innerText,i)){
      ++score
      display(++i)
    }
    else {
      display(++i)
    }
  })
}
}
function check(value,i){
    if(value===quo[i].answer){
        return true
    }
    else{
        return false
    }
}
function over() {
  compl = false
  question.innerText = "You Scored " + (((score) / quo.length) * 100) + "%";
  document.querySelector(".buttons").style.display = "none";
  progress.style.display = "none";
}
display(0)


