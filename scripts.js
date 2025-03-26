// Mobile menu toggle for navbar
document.querySelector(".navbar").addEventListener("click", function () {
    this.classList.toggle("active");
});

// Simple form validation
document.querySelector("#contactForm").addEventListener("submit", function(event) {
    const name = document.querySelector("input[type='text']").value;
    if (!name) {
        alert("Please enter your name.");
        event.preventDefault();
    }
});
