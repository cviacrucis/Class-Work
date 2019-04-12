//purple
function changePurple() {
    document.getElementById('Purple').style.backgroundColor = "purple";
}


window.setTimeout(function () {
    document.getElementById('text').style.color = "yellow";
}, 10000);

// timer 2 seconds
var color = ["red", "blue", "yellow", "orange", "green"]

window.setInterval(function(){
    function randomColor(){
        return Math.floor(Math.random()*color.length)
    }
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = color[randomColor()];
}, 2000);


