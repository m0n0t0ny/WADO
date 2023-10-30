const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"]
  }
];

const testHtml = document.getElementById("test-html");
const resultsHtml = document.getElementById("results-html");

let currentQuestion = 0;
let givenAnswers = [];

let timer = 15;
let interval = null;

let correctAnswers = [];
let incorrectAnswers = [];
let totalQuestions = questions.length;

function getScore() {
  correctAnswers = [];
  incorrectAnswers = [];
  for (let i = 0; i < totalQuestions; i++) {
    if (givenAnswers[i] === questions[i].correct_answer) {
      correctAnswers.push(givenAnswers[i]);
    } else {
      incorrectAnswers.push(givenAnswers[i]);
    }
  }
}

function loadQuestions() {
  const h2 = document.querySelector("#question-box h2");
  const answers = document.getElementById("answer-box");

  h2.innerHTML = questions[currentQuestion].question;
  answers.innerHTML = "";
  const question = questions[currentQuestion];
  const totalAnswers = question.incorrect_answers.concat(
    question.correct_answer
  );

  for (let i = 0; i < totalAnswers.length; i++) {
    const answersDiv = document.createElement("div");
    const answer = document.createElement("input");
    const answerLabel = document.createElement("label");

    answer.type = "radio";
    answer.name = "answer";
    answer.value = i;

    answer.id = totalAnswers[i];
    answerLabel.htmlFor = totalAnswers[i];

    answerLabel.innerText = totalAnswers[i];

    answersDiv.appendChild(answer);
    answersDiv.appendChild(answerLabel);
    answers.appendChild(answersDiv);

    const questionCounter = document.getElementById("question-counter");
    questionCounter.innerHTML = `<p>QUESTION &nbsp;${
      currentQuestion + 1
    } <span>/ ${questions.length}</span></p>`;
  }

  const answerButton = document.querySelectorAll("input");

  answerButton.forEach((element) => {
    element.addEventListener("click", () => {
      const label = document.querySelector(`label[for="${element.id}"]`);
      givenAnswers.push(label.textContent);
      nextQuestion();
    });
  });

  // TIMER ⌚
  function updateTimer() {
    const countdown = document.getElementById("timer");
    countdown.innerHTML = `<p>SECONDS <div id="time-left">${timer}</div> REMAINING</p>`;
    if (timer <= 0) {
      clearInterval(interval);
      givenAnswers.push("overtime");
      nextQuestion();
    }
    timer--;
  }
  interval = setInterval(updateTimer, 1000);
}

loadQuestions();

// NEXT QUESTION ❓

function nextQuestion() {
  clearInterval(interval);
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    timer = 15;
    loadQuestions();

    getScore();

    // console.log("Correct Answers:", correctAnswers);
  } else {
    getScore();

    document.getElementById("answer-box").remove();
    document.getElementById("question-box").remove();
    document.getElementById("next-question").remove();
    testHtml.classList.add("displayNone");
    resultsHtml.classList.add("display");

    console.log("totalQuestions:", totalQuestions);
    console.log("correctAnswers:", correctAnswers);
    console.log("incorrectAnswers:", incorrectAnswers);

    loadDonutWheel();
  }
}

const loadDonutWheel = () => {
  const svg = document.getElementById("donut-2");
  const circleSegment = svg.querySelector(".donut-segment-2");

  let correctAnswerslength = correctAnswers.length;
  let wrongAnswers = totalQuestions - correctAnswerslength;

  const correctAnswersPercentage = () => {
    return (correctAnswerslength / totalQuestions) * 100;
  };
  const wrongAnswersPercentage = () => {
    return (wrongAnswers / totalQuestions) * 100;
  };

  const correctScore = document.getElementById("correctScore");
  correctScore.innerText = correctAnswersPercentage().toFixed(2) + "%";
  const wrongScore = document.getElementById("wrongScore");
  wrongScore.innerText = wrongAnswersPercentage().toFixed(2) + "%";

  const answeredRight = document.getElementById("answered-right");
  answeredRight.innerText = `${correctAnswerslength}/${totalQuestions} questions`;
  const answeredWrong = document.getElementById("answered-wrong");
  answeredWrong.innerText = `${wrongAnswers}/${totalQuestions}  questions`;

  const feedback = document.getElementById("feedback");

  const passed = `<h5 id="final-evaluation" class="t-align-cen">Congratulations!
  <span class="cyan block">You passed the exam.</span></h5><p id="valutation" class="t-align-cen">We'll send you the certificate in few minutes.<br />Check your
  email (including promotions/spam folder)</p>`;
  const failed = `<h5 id="final-evaluation" class="t-align-cen">Unfortunately
  <span class="magenta block">you didn't pass the exam.</span></h5><p id="valutation" class="t-align-cen">While you didn't pass this time this is an opportunity to identify areas where you can improve.</p>`;

  let passedOrFailed = correctAnswersPercentage() > 60 ? passed : failed;
  feedback.innerHTML = passedOrFailed;

  const donutChartValues = {
    dasharrayStart: 0,
    dasharrayEnd: correctAnswersPercentage(),
    complementValue: wrongAnswersPercentage(),
    strokeDasharray: `${wrongAnswersPercentage()} ${correctAnswersPercentage()}`
  };

  circleSegment.style.setProperty(
    "--dasharrayStart",
    donutChartValues.dasharrayStart
  );

  circleSegment.style.setProperty(
    "--dasharrayEnd",
    donutChartValues.dasharrayEnd
  );

  circleSegment.style.setProperty(
    "--complementValue",
    donutChartValues.complementValue
  );

  circleSegment.setAttribute(
    "stroke-dasharray",
    donutChartValues.strokeDasharray
  );

  function leaveAFeedback() {
    window.location.href = "feedback.html";
  }

  const resultsRateUs = document.getElementById("results-rate-us");
  resultsRateUs.addEventListener("click", leaveAFeedback);
};
