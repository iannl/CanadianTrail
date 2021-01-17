var score = 0

function reload(id, reset) {
var myImageElement = document.getElementById(id);
var image = myImageElement.src
myImageElement.src = image

setInterval(function() {
    myImageElement.src = image
}, reset);
}

function shoot(animal) {
    score+=100
    document.getElementById("score").innerHTML=score
    alert("You shot the " + animal + ". Your score is " + score + ".")
}