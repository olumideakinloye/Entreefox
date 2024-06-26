eye = document.getElementById("eye");
eye2 = document.getElementById("eye2");
password = document.getElementById("password");
password2 = document.getElementById("password2");

eye.addEventListener("click", () => {
  var padlock = document.getElementById("padlock");
  if (password.type == "password") {
    password.type = "text";
    eye.src = "3917126.png";
    padlock.src = "open-padlock.png";
  } else if (password.type != "password") {
    password.type = "password";
    eye.src = "eye.png";
    padlock.src = "padlock.png";
  }
});
eye2.addEventListener("click", () => {
  padlock2 = document.getElementById("padlock2");
  if (password2.type == "password") {
    password2.type = "text";
    eye2.src = "3917126.png";
    padlock2.src = "open-padlock.png";
  } else if (password2.type != "password") {
    password2.type = "password";
    eye2.src = "eye.png";
    padlock2.src = "padlock.png";
  }
});

function validated() {
  var inputName = document.getElementById("inputName");
  var name = document.getElementById("name");

  if (inputName.value.length <= 4) {
    name.style.border = "2px solid red";
    inputName.placeholder = "Name must be over 4 leters";
    inputName.classList.toggle("placeholder-red");
    return false;
  } else {
    name.style.border = "1px solid black";
  }

  var email = document.getElementById("email");
  var emailBox = document.getElementById("emailBox");

  if (email.value.length <= 10) {
    emailBox.style.border = "2px solid red";
    email.placeholder = "Must be over 10 characters";
    email.classList.toggle("placeholder-red");
    return false;
  } else {
    emailBox.style.border = "1px solid black";
  }

  var passwordBox = document.getElementById("passwordBox");

  if (password.value.length <= 4) {
    passwordBox.style.border = "2px solid red";
    password.placeholder = "Must be over 4 characters";
    password.classList.toggle("placeholder-red");
    return false;
  } else {
    passwordBox.style.border = "1px solid black";
  }

  var passwordBox2 = document.getElementById("passwordBox2");

  if (password2.value.length <= 4) {
    passwordBox2.style.border = "2px solid red";
    password2.placeholder = "Must be the same as password";
    password2.classList.toggle("placeholder-red");
    return false;
  } else if (password.value == password2.value) {
    return true;
  } else {
    return false;
  }
}
