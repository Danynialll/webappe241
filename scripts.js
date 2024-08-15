var modal = document.getElementById("modal");
var overlay = document.getElementById("overlay");
var openButton = document.getElementById("button");
var closeButton = document.getElementById("closeButton");

openButton.onclick = function() {
    modal.style.display = "block";
    overlay.style.display = "block";
}

closeButton.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

overlay.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
}