// Initialize the Netlify Identity Widget
if (typeof netlifyIdentity !== "undefined") {
  // Add event listeners
  netlifyIdentity.on("init", (user) => {
    console.log("Netlify Identity initialized:", user);
    if (user) {
      console.log("User is logged in:", user);
    } else {
      console.log("No user is logged in");
    }
  });

  netlifyIdentity.on("login", (user) => {
    console.log("User logged in:", user);
    alert(`Welcome, ${user.user_metadata.full_name}`);
    // Redirect user to a dashboard or another page
    window.location.href = "/dashboard.html";
  });

  netlifyIdentity.on("logout", () => {
    console.log("User logged out");
    alert("You have been logged out");
    // Redirect user to the home page
    window.location.href = "/";
  });

  netlifyIdentity.on("error", (err) => {
    console.error("Error with Netlify Identity:", err);
  });

  netlifyIdentity.on("open", () => {
    console.log("Widget opened");
  });

  netlifyIdentity.on("close", () => {
    console.log("Widget closed");
  });

  // Open the modal when the page loads
  netlifyIdentity.open();
}
