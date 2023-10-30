const svg = document.getElementById("donut-2");
const circleSegment = svg.querySelector(".donut-segment-2");

let totalAnswers = 20;
let correctAnswers = 13;
let wrongAnswers = totalAnswers - correctAnswers;

const correctAnswersPercentage = () => {
  return (correctAnswers / totalAnswers) * 100;
};
const wrongAnswersPercentage = () => {
  return (wrongAnswers / totalAnswers) * 100;
};

const correctScore = document.getElementById("correctScore");
correctScore.innerText = correctAnswersPercentage().toFixed(2) + "%";
const wrongScore = document.getElementById("wrongScore");
wrongScore.innerText = wrongAnswersPercentage().toFixed(2) + "%";

const answeredRight = document.getElementById("answered-right");
answeredRight.innerText = `${correctAnswers}/${totalAnswers} questions`;
const answeredWrong = document.getElementById("answered-wrong");
answeredWrong.innerText = `${wrongAnswers}/${totalAnswers}  questions`;

const feedback = document.getElementById("feedback");

const passed = `<h5 id="final-evaluation" class="t-align-cen">Congratulations!
<span class="cyan block">You passed the exam.</span></h5><p id="valutation" class="t-align-cen">We'll send you the certificate in few minutes.<br />Check your
email (including promotions/spam folder)</p>`;
const failed = `<h5 id="final-evaluation" class="t-align-cen">Unfortunately
<span class="magenta block">you didn't pass the exam.</span></h5><p id="valutation" class="t-align-cen">While you didn't pass this time this is an opportunity to identify areas where you can improve.</p>`;

const valutation = document.getElementById("valutation");

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
