// Responsive Nav
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Form to Sheet

const scriptURL = "https://script.google.com/macros/s/AKfycbxQQ4psgr8CUaOcykazg1TH5NBI9e5-qdIaxhbnCu6_ezPSoAwcMow-68BYS19WDqiX5g/exec";
const form = document.forms["contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const btnClose = document.querySelector(".btn-close");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Reset Form
      form.reset();
      alert("Your message has been sent!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
