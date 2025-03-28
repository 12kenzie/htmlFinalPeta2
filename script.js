function showLogin() // Show to the user the log-in form when they press the avatar icon
{
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";

    // Set the form for login
    document.getElementById("popup-heading").innerText = "Login";
    document.getElementById("popup-form").innerHTML = `
        <input type="text" placeholder="Username" required>
        <input type="password" placeholder="Password" required>
        <button type="submit">Login</button>
    `;
    document.getElementById("toggle-form-text").innerHTML = `
        Don't have an account? <span onclick="showSignUp()" style="color: blue; cursor: pointer;">Sign Up</span>
    `;
}

function showSignUp() 
{ 
    // Change the form to sign-up
    document.getElementById("popup-heading").innerText = "Sign Up";
    document.getElementById("popup-form").innerHTML = `
        <input type="text" placeholder="Username" required>
        <input type="email" placeholder="Email" required>
        <input type="password" placeholder="Password" required>
        <button type="submit">Sign Up</button>
    `;
    document.getElementById("toggle-form-text").innerHTML = `
        Already have an account? <span onclick="showLogin()" style="color: blue; cursor: pointer;">Login</span>
    `;
}

function closeLogin() // Close the login pop-up
{
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
function closeLogin() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
