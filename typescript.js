var button = document.getElementById("Button");
var formData = new FormData();
var resumeData = {};
button.addEventListener("click", function () {
    button.innerText = "Button clicked!";
});
formData.forEach(function (value, key) {
    resumeData[key] = value;
});
console.log('Resume Data:', resumeData);
alert("Resume generated!");
// Select the button and paragraph elements
var toggle = document.getElementById("toggle");
var toggleText = document.getElementById("toggleText");
// Add an event listener to handle the toggle action
toggle.addEventListener("click", function () {
    if (toggleText.style.display === "none") {
        toggleText.style.display = "block";
        toggle.innerText = "Hide Text"; // Change button text to "Hide Text"
    }
    else {
        toggleText.style.display = "none";
        toggle.innerText = "Show Text"; // Change button text to "Show Text"
    }
});
