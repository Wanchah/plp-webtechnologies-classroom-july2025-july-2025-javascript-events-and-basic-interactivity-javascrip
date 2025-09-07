// 🌗 Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ❓ FAQ Toggle
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ✅ Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Clear previous messages
  document.getElementById("formSuccess").textContent = "";
  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const passwordRegex = /^(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters and include a number.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Confirm password
  if (password !== confirmPassword) {
    document.getElementById("confirmError").textContent = "Passwords do not match.";
    valid = false;
  } else {
    document.getElementById("confirmError").textContent = "";
  }

  // Success message
  if (valid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully!";
    this.reset();
  }
});