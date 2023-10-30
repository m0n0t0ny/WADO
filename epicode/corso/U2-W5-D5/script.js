// header color shifter

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const getStarted = document.querySelector("#get-started");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 364) {
      header.classList.add("white-bg");
      getStarted.classList.add("green-bg");
    } else {
      header.classList.remove("white-bg");
      getStarted.classList.remove("green-bg");
    }
  });
});

// svg Ms opacity toggler

const allM = document.querySelectorAll("svg > g > g > g");

function toggleM() {
  allM.forEach((M) => {
    const randomTime = Math.round(Math.random() * 10000);
    setTimeout(function () {
      const toggleOpacity = Math.round(Math.random());
      M.style.opacity = toggleOpacity;
    }, randomTime);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  toggleM();

  setInterval(toggleM, 10000);
});
