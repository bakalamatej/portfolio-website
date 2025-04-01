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

document.querySelectorAll(".nav-menu li").forEach(link => {
    link.addEventListener("click", function () {
        var nav = document.querySelector(".nav-menu");
        nav.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.3,
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
        themeToggle.textContent = "Switch to Light";
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")) {
            themeToggle.textContent = "Switch to Light";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.textContent = "Switch to Dark";
            localStorage.setItem("theme", "light");
        }
    });
});
