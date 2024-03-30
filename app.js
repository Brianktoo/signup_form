function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorMessage = document.getElementById("error-message");
  
    // Check if any field is empty
    if (!username || !email || !password || !confirmPassword) {
      errorMessage.innerText = "All fields are required";
      return false;
    }
  
    // Check if password matches confirmPassword
    if (password !== confirmPassword) {
      errorMessage.innerText = "Passwords do not match";
      return false;
    }
  
    // Check if password length is at least 6 characters
    if (password.length < 6) {
      errorMessage.innerText = "Password must be at least 6 characters long";
      return false;
    }
  
    // If all validations pass, clear error message
    errorMessage.innerText = "";
    return true;
  }