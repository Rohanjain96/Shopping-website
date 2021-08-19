const sidebars = document.getElementById("side-bars");
function hamburgermenu() {
    sidebars.style.left = '0';
}
function clshamburgermenu() {
    sidebars.style.left = '-250px';
}
let counter;
counter = localStorage.getItem("counter");
console.log("set counter");
if (counter == null) {
    counter = 0;
    localStorage.setItem('counter', counter);
    document.getElementsByClassName("counter")[0].textContent = counter;
}
else {
    document.getElementsByClassName("counter")[0].textContent = counter;
}