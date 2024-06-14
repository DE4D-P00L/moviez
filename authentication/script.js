const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
// const endpoint = "http://localhost:5000";
const endpoint = "https://moviez-backend.onrender.com";

signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

const loginSpan = document.getElementById("loginSpan");
const signupSpan = document.getElementById("signupSpan");

const login = async () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  if (username == "" || password === "")
    return alert("Please enter valid values");
  loginSpan.innerHTML = `<div class="lds-dual-ring"></div>`;

  const res = await fetch(endpoint + "/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  if (data.error) {
    loginSpan.innerHTML = "Login";
    return alert(data.error);
  }
  localStorage.setItem("user", JSON.stringify(data));
  loginSpan.innerHTML = "Login";
  window.location.href = "../index.html";
};

const signup = async () => {
  const username = document.getElementById("sUsername").value.trim();
  const password = document.getElementById("sPassword").value.trim();
  const confirmPassword = document
    .getElementById("sConfirmPassword")
    .value.trim();

  if (username === "" || password === "" || confirmPassword === "")
    return alert("Please enter valid values");

  signupSpan.innerHTML = `<div class="lds-dual-ring"></div>`;
  if (password !== confirmPassword) return alert("Passwords do not match");

  const res = await fetch(endpoint + "/api/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();
  console.log(data);
  if (data.error) {
    signupSpan.innerHTML = "Signup";
    return alert(data.error);
  }
  localStorage.setItem("user", JSON.stringify(data));
  signupSpan.innerHTML = "Signup";
  window.location.href = "../index.html";
};

const logoutButton = document.querySelector("#logoutButton");

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "./index.html";
});
