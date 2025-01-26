if (typeof netlifyIdentity !== "undefined") {
    netlifyIdentity.init();
}

async function handleSignup(event) {
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
}

async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    try {
        const user = await netlifyIdentity.login(email, password);
        alert(`Welcome back, ${user.user_metadata.full_name || "User"}`);
        window.location.href = "/dashboard.html";
    } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please check your credentials.");
    }
}

document.getElementById("signup-form").addEventListener("submit", handleSignup);
document.getElementById("login-form").addEventListener("submit", handleLogin);
document.getElementById("google-signup-btn").addEventListener("click", () => {
    netlifyIdentity.open("signup");
});

function togglePassword(inputId) {
    const inputField = document.getElementById(inputId);
    inputField.type = inputField.type === "password" ? "text" : "password";
}