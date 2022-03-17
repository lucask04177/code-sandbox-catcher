window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar-top');

    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.navbar-bottom').style.bottom = "0px";
    } else {
        document.querySelector('.navbar-bottom').style.bottom = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

let modal = document.getElementById("myModal");
let btn = document.querySelector('.navbar-top-button');
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "flex";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}        