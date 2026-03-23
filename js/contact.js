
// console.clear() // to clean the console

// contact form validation...
const form = document.getElementById("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");


function validateForm() {
    // check that all fields are filled in is already done by the required attribute
    // The text area is however, not catered for...therefore,
    const message = document.getElementById("message");
    if (message.value.trim() === " ") {
        alert("Kindly type in your message to submit!");
        message.focus();
        return false;
    } else {
        window.location.href("../index.html")
    }
}

// adding a submit event-listener first for the form
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
})




