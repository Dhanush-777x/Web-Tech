const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
let registered = false;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  confirm("Would you like to Login?");
  checkInput();
  
  if (registered) {
    setTimeout(() => {
      alert("Login Successful");
      var nickname = prompt("Enter Your Nickname: ");
      document.getElementById("nickname").innerHTML =
        "Hello " + nickname + " ,";
      document.getElementById("welcome-txt").innerHTML = "Welcome !";
    }, 100);
  }
});
function checkInput() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (usernameValue === "") {
    setError(username, "Username cannot be blank");
  } else {
    setSuccess(username);
  }
  if (emailValue === "") {
    setError(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setError(email, "Enter valid Email");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password cannot be blank");
  } else {
    setSuccess(password);
  }
  if (usernameValue !== "" && isEmail(emailValue) && passwordValue !== "") {
    registered = true;
  } else {
    registered = false;
  }
}
function setError(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("p");
  formGroup.className = "form-group error";
  small.innerText = message;
}
function setSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}
function isEmail(email) {
  return /^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$/.test(email);
}
