var button = document.querySelectorAll(".button");

// var simon = [];

// var compChoice = [];

var start = document.querySelectorAll(".start");

start.addEventListener("click", function(){
    var compChoice = compChoice();
    var activeFlash = activeFlash();
    var removeFlash = removeFlash();
}

function compChoice(){
    var colors = ["#green", "#red", "#blue", "#yellow"];
    var rdm = Math.floor(Math.random() * colors.length);
    var rColor = colors[rdm];

}

function activeFlash (){
    rColor.classList.add("active")
}

window.setTimeout(function (){
function removeFlash (){
    rColor.classList.remove("active")
}
}, 2000)

// button and attach event listener
button.forEach(function(val){
    val.addEventListener("click", compChoice );

    
//     }

// create divs with colors

//add start button - click to start game 

//game begins when computer flashes pattern

//user responds by clicking correct color if not then lose game

//if correct then computer adds to pattern

//if incorrect 
//game ends















