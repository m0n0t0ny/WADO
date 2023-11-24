const navigationBar = document.getElementById("navigation-bar");
const backBtn = document.getElementById("back-btn");
const homeBtn = document.getElementById("home-btn");
const optionsBtn = document.getElementById("options-btn");
const homePage = document.getElementById("home");
const browserPage = document.getElementById("browser");
const chromeBrowser = document.getElementById("chrome-browser");
const topUp5 = document.getElementById("top-up-1");
const topUp10 = document.getElementById("top-up-2");
const topUp15 = document.getElementById("top-up-3");
const topUp25 = document.getElementById("top-up-4");
const topUp50 = document.getElementById("top-up-5");
const contactsPage = document.getElementById("contacts");
const contactsBtn = document.getElementById("contacts-btn");
const favouriteContact1 = document.getElementById("favourite-contact-1");
const favouriteContact2 = document.getElementById("favourite-contact-2");
const favouriteContact3 = document.getElementById("favourite-contact-3");
const callPage = document.getElementById("call");

function dNone() {
  homePage.classList.add("d-none");
  browserPage.classList.add("d-none");
  contactsPage.classList.add("d-none");
  callPage.classList.add("d-none");
}

backBtn.addEventListener("click", function () {
  dNone();
  homePage.classList.remove("d-none");
});
homeBtn.addEventListener("click", function () {
  dNone();
  homePage.classList.remove("d-none");
});
optionsBtn.addEventListener("click", function () {
  dNone();
  homePage.classList.remove("d-none");
});

// * ---------- chrome ----------

chromeBrowser.addEventListener("click", function () {
  dNone();
  updateCredit();
  browserPage.classList.remove("d-none");
});

topUp5.addEventListener("click", function () {
  addcredit(5);
});
topUp10.addEventListener("click", function () {
  addcredit(10);
});
topUp15.addEventListener("click", function () {
  addcredit(15);
});
topUp25.addEventListener("click", function () {
  addcredit(25);
});
topUp50.addEventListener("click", function () {
  addcredit(50);
});

// * ---------- contacts ----------

contactsBtn.addEventListener("click", function () {
  dNone();
  contactsPage.classList.remove("d-none");
});

favouriteContact1.addEventListener("click", function () {
  call("Stefano Miceli");

  startCall();

  dNone();
  callPage.classList.remove("d-none");
});
favouriteContact2.addEventListener("click", function () {
  dNone();
  browserPage.classList.remove("d-none");
});
favouriteContact3.addEventListener("click", function () {
  call("Dario Del Giudice");

  startCall();

  dNone();
  callPage.classList.remove("d-none");
});

// * ---------- call ----------

const endCallBtn = document.getElementById("end-call-btn");
endCallBtn.addEventListener("click", function () {
  endCall();

  dNone();
  contactsPage.classList.remove("d-none");
});
