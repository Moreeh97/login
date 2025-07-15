function showSignUp() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signUpForm").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("signUpForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

function handleSignUp(event) {
  event.preventDefault();
  const username = document.getElementById("signUpUsername").value;
  const password = document.getElementById("signUpPassword").value;

  // حفظ بيانات المستخدم في localStorage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Account created successfully!");
  showLogin(); // الرجوع لصفحة تسجيل الدخول
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (username === storedUser && password === storedPass) {
    alert("Login successful!");
    // هنا يمكنك توجيه المستخدم إلى صفحة أخرى مثلاً:
    // window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
}
