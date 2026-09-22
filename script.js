const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    message.textContent = "Thank you! Your enquiry has been received.";
    form.reset();
});