async function signupFormHandler(event) {
  event.preventDefault();

  //collect signup login information
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const name = document.querySelector("#name-signup").value.trim();

  const signUpParams = {
    username,
    email,
    password,
    name,
  };

  //note: These three fields (username, email, password) are required. The rest, are not.
  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify(signUpParams),
      headers: { "Content-Type": "application/json" },
    });

    // check the response status
    if (response.ok) {
      console.log("success");
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
