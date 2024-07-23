// JavaScript function to dynamically update the current year
document.addEventListener("DOMContentLoaded", function() {
  var currentYearElement = document.getElementById("current-year");
  var currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;
});
