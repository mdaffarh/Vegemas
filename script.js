// Responsive Nav
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Form to Sheet

const scriptURL = "https://script.google.com/macros/s/AKfycbxQQ4psgr8CUaOcykazg1TH5NBI9e5-qdIaxhbnCu6_ezPSoAwcMow-68BYS19WDqiX5g/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Remove Loading
      document.getElementById("btn-loading").style.display = "none";
      // Reset Form
      form.reset();
      // Add Alert
      document.getElementById("my-alert").style.display = "flex";
      // Add Send
      document.getElementById("btn-send").style.display = "block";
    })
    .catch((error) => console.error("Error!", error.message));
});

// Function

function btnLoading() {
  // Add Loading
  document.getElementById("btn-loading").style.display = "block";
  // Remove Send
  document.getElementById("btn-send").style.display = "none";
}

function btnClose() {
  // Remove Alert
  document.getElementById("my-alert").style.display = "none";
}
