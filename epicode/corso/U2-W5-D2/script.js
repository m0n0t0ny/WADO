const scrollTop = document.querySelector(".fa-caret-square-up");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 20) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
