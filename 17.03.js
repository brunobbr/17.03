var btnSignIn = document.querySelector("#signin");
var btnSigUp = document.querySelector("#signup");
var body = document.querySelector("body");


btnSignIn.addEventListener("click",function() {
  body.className = "sign-in-js";
});

btnSigUp.addEventListener("click",function() {
  body.className = "sign-up-js";
})