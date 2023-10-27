const button = document.querySelector("#button");

// This happens when the page renders, not when the button is clicked
button.addEventListener("click", alert("This should happen when the button is clicked"));