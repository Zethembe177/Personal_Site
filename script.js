document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual submission

    // Get input values
    const firstName = form.querySelector('input[type="text"]:nth-of-type(1)').value.trim();
    const lastName = form.querySelector('input[type="text"]:nth-of-type(2)').value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Clear previous messages
    clearErrors();

    let valid = true;

    // Basic field checks
    if (firstName === "") {
      showError("First Name is required", form.querySelector('input[type="text"]:nth-of-type(1)'));
      valid = false;
    }

    if (lastName === "") {
      showError("Last Name is required", form.querySelector('input[type="text"]:nth-of-type(2)'));
      valid = false;
    }

    if (email === "") {
      showError("Email is required", document.getElementById("email"));
      valid = false;
    } else if (!validateEmail(email)) {
      showError("Please enter a valid email address", document.getElementById("email"));
      valid = false;
    }

    if (message === "") {
      showError("Message cannot be empty", document.getElementById("message"));
      valid = false;
    }

    if (valid) {
      alert("✅ Thank you for your feedback!");
      form.reset();
    }
  });

  function validateEmail(email) {
    // Simple email pattern check
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function showError(message, element) {
    const error = document.createElement("div");
    error.className = "error-message";
    error.style.color = "red";
    error.style.fontSize = "14px";
    error.style.marginTop = "4px";
    error.textContent = message;
    element.parentNode.appendChild(error);
  }

  function clearErrors() {
    const errors = document.querySelectorAll(".error-message");
    errors.forEach((error) => error.remove());
  }
});
