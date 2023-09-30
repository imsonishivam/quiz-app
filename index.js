const question = document.querySelector(".question");
const optionA = document.querySelector("#option-a");
const optionB = document.querySelector("#option-b");
const optionC = document.querySelector("#option-c");
const optionD = document.querySelector("#option-d");
const optionInput = document.querySelectorAll(".all-options");
const wrapper = document.querySelector(".wrapper");
const button = document.getElementsByTagName("button");

const questions = [
  {
    que: "Which of the following is markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "Both a and b",
    d: "None of the above",
    correct: "c",
  },
  {
    que: "Javascript is an _______ language?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "None of the above",
    correct: "a",
  },
  {
    que: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What is the full form of IIT",
    a: "It Is Total",
    b: "It Is Tub",
    c: "Indian Instutite Technology",
    d: "none of them",
    correct: "c",
  },
];

let index = 0;
let total = questions.length,
  right = 0,
  wrong = 0;

const reset = () => {
  optionInput.forEach((e) => {
    if (e.checked) e.checked = false;
  });
};
const loadQuestion = () => {
  reset();
  question.textContent = `${index + 1}) ${questions[index].que}`;
  optionA.textContent = questions[index].a;
  optionB.textContent = questions[index].b;
  optionC.textContent = questions[index].c;
  optionD.textContent = questions[index].d;
};

const getAnswer = () => {
  let choose;
  optionInput.forEach((e) => {
    if (e.checked) {
      choose = e.value;
    }
  });
  return choose;
};

const showResult = () => {
  const h1 = document.createElement("h1");
  h1.textContent = `Your Result is ${right}/${total}`;
  wrapper.appendChild(h1);
  button[0].classList.add("disable");
  button[0].disabled = true;
};

const submitQuiz = () => {
  const ans = getAnswer();
  console.log(ans === questions[index].correct);
  if (ans === questions[index].correct) right += 1;
  else wrong += 1;
  index += 1;
  if (total > right + wrong) loadQuestion();
  else {
    showResult();
  }
};

loadQuestion();
