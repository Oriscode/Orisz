// Netlify Identity Initialization
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/dashboard/"; // Redirect after login
      });
    }
  });
}

// Login Form Submission
document.getElementById("login-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Netlify Identity Login
  netlifyIdentity
    .login(email, password)
    .then((user) => {
      alert("Login successful!");
      window.location.href = "/"; // Redirect to homepage
    })
    .catch((err) => {
      alert("Login failed. Please check your email and password.");
      console.error(err);
    });
});

// Sign-Up Form Submission
document.getElementById("signup-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Netlify Identity Sign-Up
  netlifyIdentity
    .signup(email, password, { name })
    .then((user) => {
      alert("Sign-up successful! Please check your email to confirm.");
      window.location.href = "/"; // Redirect to homepage
    })
    .catch((err) => {
      alert("Sign-up failed. Please try again.");
      console.error(err);
    });
});

// Form Validation for Login
document.getElementById("login-form")?.addEventListener("submit", (e) => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    e.preventDefault();
    alert("Please fill in all fields.");
  }
});

// Form Validation for Sign-Up
document.getElementById("signup-form")?.addEventListener("submit", (e) => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    e.preventDefault();
    alert("Please fill in all fields.");
  } else if (password.length < 6) {
    e.preventDefault();
    alert("Password must be at least 6 characters long.");
  }
});