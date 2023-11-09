const usernameInput = document.getElementById("username");
const saveButton = document.getElementById("save");
const clearButton = document.getElementById("clear");

const savedUsername = localStorage.getItem("savedUsername");
const greetUsername = document.getElementById("greetUsername");

window.addEventListener("DOMContentLoaded", () => {
  if (savedUsername) {
    usernameInput.value = savedUsername;
    greetUsername.textContent = savedUsername;
  }
});

saveButton.addEventListener("click", function () {
  e.preventDefault();

  const username = usernameInput.value;

  localStorage.setItem("savedUsername", username);

  greetUsername.textContent = username;

  toastSaved();
});

clearButton.addEventListener("click", function () {
  localStorage.removeItem("savedUsername");

  usernameInput.value = "";
  greetUsername.textContent = "user";

  toastDeleted();
});

function toastSaved() {
  const toastSaved = document.getElementById("toast-saved");
  toastSaved.className = "show";
  setTimeout(function () {
    toastSaved.className = toastSaved.className.replace("show", "");
  }, 3000);
}

function toastDeleted() {
  const toastDeleted = document.getElementById("toast-deleted");
  toastDeleted.className = "show";
  setTimeout(function () {
    toastDeleted.className = toastDeleted.className.replace("show", "");
  }, 3000);
}
