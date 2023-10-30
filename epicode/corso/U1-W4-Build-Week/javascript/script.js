const indexPage = document.getElementById("index-page");
const testPage = document.getElementById("test-page");
const resultsPage = document.getElementById("results-page");
const feedbackPage = document.getElementById("feedback-page");
const timerContainer = document.getElementById("timer-container");
const countdown = document.getElementById("timer");

// ! ---------- Index 🏠

const proceed = document.getElementById("proceed");
proceed.addEventListener("click", goToTestPage);

function goToTestPage() {
  indexPage.classList.toggle("hide");
  testPage.classList.toggle("hide");
  test();
}

const checkbox = document.getElementById("agreement");
checkbox.addEventListener("change", enableProceedButton);

function enableProceedButton() {
  proceed.disabled = !this.checked;
}

// ! ---------- TEST ✅

function test() {
  // ! ---------- Results Page 💯

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
    correctScore.innerText = correctAnswersPercentage().toFixed(1) + "%";
    const wrongScore = document.getElementById("wrongScore");
    wrongScore.innerText = wrongAnswersPercentage().toFixed(1) + "%";

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

    let passedOrFailed = correctAnswersPercentage() >= 60 ? passed : failed;
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

    const resultsRateUs = document.getElementById("results-rate-us");
    resultsRateUs.addEventListener("click", goToFeedbackPage);

    function goToFeedbackPage() {
      resultsPage.classList.toggle("hide");
      feedbackPage.classList.toggle("hide");
    }
  };

  // Questions

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
    interval = setInterval(updateTimer, 1000);
    const timerContainer = document.querySelector(".timer-container");
    const donut1 = document.querySelector("#donut-1");
    timerContainer.removeChild(donut1);
    timerContainer.appendChild(donut1);

    const h3 = document.querySelector("#question-box h3");
    const answers = document.getElementById("answer-box");

    function emphasizeLastNWords(question, n) {
      const words = question.split(" ");
      const totalWords = words.length;
      const lastN = Math.round(totalWords / 2);
      let firstEmphasized = false;

      for (let i = totalWords - lastN; i < totalWords; i++) {
        if (!firstEmphasized) {
          words[i] = `<br /><b>${words[i]}`;
          firstEmphasized = true;
        } else {
          words[i] = `<b>${words[i]}`;
        }
      }

      const emphasizedQuestion = words.join(" ");
      return emphasizedQuestion;
    }

    h3.innerHTML = emphasizeLastNWords(questions[currentQuestion].question);

    answers.innerHTML = "";
    const question = questions[currentQuestion];
    const totalAnswers = question.incorrect_answers.concat(
      question.correct_answer
    );

    for (let i = totalAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [totalAnswers[i], totalAnswers[j]] = [totalAnswers[j], totalAnswers[i]];
    }

    for (let i = 0; i < totalAnswers.length; i++) {
      const answersDiv = document.createElement("p");
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
      questionCounter.innerHTML = `<h5>QUESTION &nbsp;${
        currentQuestion + 1
      } <span>/ ${questions.length}</span></h5>`;
    }

    const answerButton = document.querySelectorAll("input");

    answerButton.forEach((element) => {
      element.addEventListener("click", () => {
        const label = document.querySelector(`label[for="${element.id}"]`);
        givenAnswers.push(label.textContent);
        nextQuestion();
      });
    });

    // Timer ⌚

    function updateTimer() {
      if (timer <= 0) {
        timer = 15;
        clearInterval(interval);
        givenAnswers.push("overtime");
        countdown.innerHTML = `<p>SECONDS</p> <div id="time-left">${timer}</div> <p>REMAINING</p>`;
        nextQuestion();
      } else {
        countdown.innerHTML = `<p>SECONDS</p> <div id="time-left">${timer}</div> <p>REMAINING</p>`;
      }

      timer--;
    }
  }

  loadQuestions();
  countdown.innerHTML = `<p>SECONDS</p> <div id="time-left">${timer}</div> <p>REMAINING</p>`;

  // Next Question ❔

  function nextQuestion() {
    clearInterval(interval);
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      timer = 15;
      clearInterval(interval);
      countdown.innerHTML = `<p>SECONDS</p> <div id="time-left">${timer}</div> <p>REMAINING</p>`;

      loadQuestions();
      getScore();
    } else {
      getScore();

      document.getElementById("answer-box").remove();
      document.getElementById("question-box").remove();
      document.getElementById("next-question").remove();
      testPage.classList.toggle("hide");
      resultsPage.classList.toggle("hide");

      console.log("totalQuestions:", totalQuestions);
      console.log("correctAnswers:", correctAnswers);
      console.log("incorrectAnswers:", incorrectAnswers);

      loadDonutWheel();
    }
  }
}

// ! ---------- Feedback Page ⭐

const stars = document.querySelectorAll(".rating-stars img");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

const backToIndex = document.getElementById("back-to-index");
backToIndex.addEventListener("click", goToIndexPage);

function goToIndexPage() {
  feedbackPage.classList.toggle("hide");
  indexPage.classList.toggle("hide");
}
