window.addEventListener("DOMContentLoaded", function () {
  updateUpTime();
});

function updateUpTime() {
  const upTime = document.getElementById("upTime");
  let storedTime = sessionStorage.getItem("counter");

  if (storedTime) {
    storedTime = parseInt(storedTime, 10);
  } else {
    storedTime = 0;
  }

  setInterval(() => {
    storedTime++;
    upTime.innerText = `🕔 ${storedTime}s`;
    sessionStorage.setItem("counter", storedTime);
  }, 1000);
}
