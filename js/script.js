

var bodyclass = document.getElementsByClassName("body");

var checkboxtoggle = document.getElementById("checkbox");

function togglenightmode(){
    if (checkboxtoggle.checked === false){
        bodyclass.setAttribute("class", "body");
        console.log("Nightmode is OPEN");   
    } else 
    if (checkboxtoggle.checked === true){
        bodyclass.setAttribute("class", "body-nm");
        console.log("Nightmode is CLOSED");   
    }
}

// EVENTLISTENERS SECTION

