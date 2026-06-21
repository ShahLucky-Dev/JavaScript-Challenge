let inp = document.getElementById("inp");
let head = document.getElementById("head");
let list = document.getElementById("list");
let form = document.getElementById("form");
let btn = document.getElementById("btn");

// inp.addEventListener("input", () => {
//   head.innerText = inp.value;
// });

// inp.addEventListener("change", () => {
//   head.innerText = inp.value;
// });

// inp.addEventListener("keyup", (e) => {
//   if (e.key === "Enter") {
//     head.innerText = "submitted";
//   }
// });

// let count = 0;
// inp.addEventListener("keydown", (e) => {
//   count++;
//   head.innerText = count;
// });

// inp.addEventListener("keyup", (e) => {
//   if (e.key === "Enter") {
//     let li = document.createElement("li");
//     list.appendChild(li);
//     li.innerText = inp.value;
//     inp.value = "";
//   }
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   head.innerText = inp.value;
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inp.value === "") {
    return;
  }
  let li = document.createElement("li");
  list.appendChild(li);

  li.innerText = inp.value;

  inp.value = "";
});
