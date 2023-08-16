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


var btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", function () {
    window.location.href = "screens/login/login.html";
});