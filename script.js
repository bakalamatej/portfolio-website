window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 50) {  
        header.classList.add("scrolled-header");
    } else { 
        header.classList.remove("scrolled-header");
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
