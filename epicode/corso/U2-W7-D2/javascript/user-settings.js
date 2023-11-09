const setStatus = document.getElementById("status");
const savedStatus = localStorage.getItem("savedStatus");

window.addEventListener("DOMContentLoaded", () => {
  if (savedStatus) {
    setStatus.value = savedStatus;
  }
});

setStatus.addEventListener("change", function () {
  const status = setStatus.value;

  localStorage.setItem("savedStatus", status);
});
