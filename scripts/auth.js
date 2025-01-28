// Initialize Netlify Identity
if (typeof netlifyIdentity !== "undefined") {
  netlifyIdentity.init();
}

// Handle Sign-Up Form Submission
document.getElementById("signup-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    const user = await netlifyIdentity.signup(email, password);
    alert(`Sign-up successful! Welcome, ${user.user_metadata.full_name || "User"}`);
    window.location.href = "/dashboard.html";
  } catch (error) {
    console.error("Sign-up failed:", error);
    alert("Sign-up failed. Please try again.");
  }
});

// Handle Login Form Submission
document.getElementById("login-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const user = await netlifyIdentity.login(email, password);
    alert(`Welcome back, ${user.user_metadata.full_name || "User"}`);
    window.location.href = "/dashboard.html";
  } catch (error) {
    console.error("Login failed:", error);
    alert("Login failed. Please check your credentials and try again.");
  }
});