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