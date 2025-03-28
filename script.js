function showLogin() // Show to the user the log-in form when they press the avatar icon
{
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closeLogin() // Close the login pop-up
{
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
