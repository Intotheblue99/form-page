
let pwdError = document.querySelector("error-message");

function checkPasswords() {
    let password = document.getElementById("pwd").value;
    let confirmPassword = document.getElementById("confirm-pwd").value;

    if (password != confirmPassword) {
        document.getElementById("confirm-pwd").style.border = "4px solid red";
    } else {
        document.getElementById("confirm-pwd").style.border = "1px solid black"
    }
};

