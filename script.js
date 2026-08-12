
    document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".pretty-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // stop page reload

            alert("🎉 🥰Your adoption application has been submitted! We will contact you soon.");

            form.reset(); // optional: clear form
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("submit-btn");

    btn.addEventListener("click", function (event) {
        event.preventDefault(); // stops form from reloading page
        alert("Form submitted successfully!");
    });
});

