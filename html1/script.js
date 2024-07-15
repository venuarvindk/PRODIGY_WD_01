document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    function changeNavbarColor() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");

        if (sections[index].id === "home") {
            navbar.className = "home-active";
        } else if (sections[index].id === "about") {
            navbar.className = "about-active";
        } else if (sections[index].id === "services") {
            navbar.className = "services-active";
        } else if (sections[index].id === "contact") {
            navbar.className = "contact-active";
        }
    }

    window.addEventListener("scroll", changeNavbarColor);
    changeNavbarColor(); // Initial check
});
