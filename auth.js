const authForm = document.querySelector("form");

if (authForm) {
  authForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = authForm.querySelector("input[type='email']");
    const passwordInput = authForm.querySelector("input[type='password']");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let role = "brand";
    if (window.location.pathname.includes("creator")) {
      role = "creator";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters and include a letter, a number, and a symbol."
      );
      passwordInput.focus();
      return;
    }

    localStorage.setItem("authEmail", email);
    localStorage.setItem("userRole", role);
    localStorage.setItem("isLoggedIn", "true");

    alert(`Logged in successfully as ${role}`);
    window.location.href = "index.html";
  });
}
