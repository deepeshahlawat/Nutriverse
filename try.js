let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-100px"; // Adjust based on navbar height
    } else {
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});

