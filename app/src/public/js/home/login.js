const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.value,
  };

  console.log(req, JSON.stringify(req));

  fetch("/login", {
      headers: {
          "Content-type":"applcation/json"
      }
    body: JSON.stringify(req),
  });
}
