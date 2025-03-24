window.addEventListener("scroll", function() {
    var navMenu = document.querySelector(".nav-menu");
	var hamb = document.querySelector(".hamburger");
    if (window.scrollY > 50) {
        navMenu.classList.add("nav-menu-scrolled");
		hamb.classList.add("hamburger-scrolled");
    } else {
        navMenu.classList.remove("nav-menu-scrolled");
		hamb.classList.remove("hamburger-scrolled");
    }
});

window.addEventListener("scroll", function () {
    let button = document.getElementById("back-to-top");
    if (window.scrollY > 200) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
});

document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

function toggleMenu() {
    var nav = document.querySelector(".nav-menu");
    nav.classList.toggle("show");
}

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", function () {
        var nav = document.querySelector(".nav-menu");
        nav.classList.remove("show");
    });
});
