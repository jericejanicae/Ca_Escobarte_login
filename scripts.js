document.getElementById("asterisk-u").style.display = "none";
document.getElementById("asterisk-p").style.display = "none";

function loginValidate () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ((username=="") && (password=="")) {
        document.getElementById("alert").innerHTML = "Please enter your username and password";
        document.getElementById("asterisk-u").style.display = "inline";
        document.getElementById("asterisk-p").style.display = "inline";
        alert("Login error.");
    } else if ((username=="") && (password!="")) {
        document.getElementById("alert").innerHTML = "Please enter your username.";
        document.getElementById("asterisk-u").style.display = "inline";
        document.getElementById("asterisk-p").style.display = "none";
        alert("Login error.");
    } else if ((username!="") && (password=="")) {
        document.getElementById("alert").innerHTML = "Please enter your password";
        document.getElementById("asterisk-u").style.display = "none";
        document.getElementById("asterisk-p").style.display = "inline";
        alert("Login error.");
    } else {
        document.getElementById("alert").innerHTML = "Successfully logged in!";
        document.getElementById("asterisk-u").style.display = "none";
        document.getElementById("asterisk-p").style.display = "none";
    }
}

function showPass() {
    var passVisible = document.getElementById("password");
    if (passVisible.type === "password") {
        passVisible.type = "text";
    } else {
        passVisible.type = "password";
    }
  }