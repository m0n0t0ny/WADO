const timeElement = document.getElementById("time");

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const time = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  timeElement.innerText = time;
}

updateTime();
setInterval(updateTime, 1000);
