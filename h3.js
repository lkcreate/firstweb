
document.addEventListener("DOMContentLoaded", function () {
    // Search Functionality
    document.querySelector("nav ul li button").addEventListener("click", function () {
        let query = document.querySelector("nav ul li input").value.toLowerCase();
        let sections = document.querySelectorAll("section");
        let found = false;

        sections.forEach(section => {
            if (section.textContent.toLowerCase().includes(query)) {
                section.scrollIntoView({ behavior: "smooth" });
                section.style.backgroundColor = "#ffffcc"; // Highlight found section
                setTimeout(() => section.style.backgroundColor = "white", 2000);
                found = true;
            }
        });

        if (!found) {
            alert("No matching content found.");
        }
    });

    // Smooth Scroll for Navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Login Form Validation
    document.querySelector("form").addEventListener("submit", function (e) {
        let email = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (!email.includes("@") || email.length < 5) {
            alert("Please enter a valid email address.");
            e.preventDefault();
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            e.preventDefault();
        }
    });
});
