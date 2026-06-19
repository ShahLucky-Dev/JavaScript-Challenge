// let btn = document.querySelector("#btn");
// let head = document.querySelector("#head");

// btn.addEventListener("click", () => {
//   head.classList.toggle("dark");
// });

// let btn = document.querySelector("#btn");
// let list = document.querySelectorAll("li");

// btn.addEventListener("click", () => {
//   list.style.color = "red";
// });

let btn = document.querySelector("#btn");
let head = document.querySelector("#head");

btn.addEventListener("click", (e) => {
  e.target.innerText = "Clicked";
  head.innerText = "Lucky";
});
