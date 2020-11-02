// DOM ELEMENTEN SECTION
var button = document.querySelector("#button");
var mangatitles = document.querySelector(".button");
// FUNCTIES SECTION
function togglenightmode() {
    document.body.classList.toggle('body-nm')
}

// EVENTLISTENERS SECTION
button.addEventListener('click', togglenightmode);