var splash = document.getElementById("splash");
var main = document.getElementById("main");

function splashScreen() {
    splash.style.display = "none";
    main.style.display = "flex";
}
setTimeout(splashScreen, 1500);

var btn = document.getElementById("button-nav");

btn.addEventListener("click", function () {
    document.getElementById("nav").classList.toggle("active");
});