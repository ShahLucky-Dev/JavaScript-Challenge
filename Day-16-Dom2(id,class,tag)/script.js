// let boxes = document.getElementsByClassName("box");
// boxes[1].style.backgroundColor = "black";
// boxes[1].style.color = "white";

// let box4 = document.getElementById("box4");
// box4.style.color = "purple";

document.getElementsByTagName("span").backgroundColor = "yellow";

// document.querySelector(".box").style.backgroundColor = "aqua"; // for single element or first .box class element

//for all or multiple element selector

document.querySelectorAll(".box").forEach((e) => {
  e.style.backgroundColor = "aqua";
});

// let head = document.getElementById("head");
// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   head.style.backgroundColor = "red";
// });

// let btn = document.getElementById("btn"); // counter
// let head = document.getElementById("head");

// let count = 0;

// btn.addEventListener("click", () => {
//   count++;
//   head.innerText = count;
// });

let head = document.getElementById("head");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

let count = 0;

plus.addEventListener("click", () => {
  count++;
  head.innerText = count;
});

minus.addEventListener("click", () => {
  count--;
  head.innerText = count;
});
