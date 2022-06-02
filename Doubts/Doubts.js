// Window Navigator
// EXAMPLE 1 ||
let language = window.navigator.language;
document.getElementById("demo").innerHTML =
    "Browser language : " + language;


// EXAMPLE 2 ||
let language2 = navigator.language;
document.getElementById("demo2").innerHTML =
    "Browser language : " + language2;


// HTML canvas drawImage() Method
// EXAMPLE 1 ||
window.onload = function () {
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext("2d");
    var img = document.getElementById('scream');
    ctx.drawImage(img, 10, 10);
}


// HTML Audio / Video DOM canplay event
// EXAMPLE 1 ||
var vid = document.getElementById('myVideo');
vid.oncanplay = function () {
    alert("Can start playing video");
}


// HTMLCanvasElement.toDataURL()
// EXAMPLE 1 ||
var canvas = document.getElementById('canvas1');
var dataURL = canvas.toDataURL();
document.getElementById('canvas1Ex').innerHTML = dataURL;


// HTML canvas globalAlpha Property
// EXAMPLE 1 ||
var x = document.getElementById('canvas2');
var xtx = x.getContext('2d');
xtx.fillStyle = "red";
xtx.fillRect(20, 20, 75, 50);

// Turn transparency on
xtx.globalAlpha = 0.2;
xtx.fillStyle = "blue";
xtx.fillRect(50, 50, 75, 50);
xtx.fillStyle = "green";
xtx.fillRect(80, 80, 75, 50);