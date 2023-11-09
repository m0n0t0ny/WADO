const html = document.documentElement;
const toggleDarkButton = document.getElementById("toggle-theme");

function setDarkTheme(isDark) {
  if (isDark) {
    localStorage.setItem("dark", "true");
  } else {
    localStorage.removeItem("dark");
  }
}

function loadThemeStyle() {
  const themeInStorage = localStorage.getItem("dark");
  const isDark = themeInStorage === "true";

  if (isDark) {
    html.classList.add("dark");
    toggleDarkButton.classList.add("bright");
  } else {
    html.classList.remove("dark");
    toggleDarkButton.classList.remove("bright");
  }
}

toggleDarkButton.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");
  setDarkTheme(isDark);
  loadThemeStyle();
});

window.addEventListener("DOMContentLoaded", () => {
  loadThemeStyle();
});
