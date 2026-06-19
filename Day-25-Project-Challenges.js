// // let head = document.getElementById("head");
// let inp = document.getElementById("inp");
// let btn = document.getElementById("btn");
// let list = document.getElementById("list");

// // btn.addEventListener("click", () => {
// //   head.innerText = inp.value;
// // });

// btn.addEventListener("click", () => {
//   if (inp.value === "") {
//     alert("enter text");
//     return; //Bas bhai, function yahin khatam. Aage ka code mat chalao.
//   }
//   let li = document.createElement("li");
//   let done = document.createElement("button");
//   let dlt = document.createElement("button");
//   done.innerText = "Done";
//   dlt.innerText = "Delete";
//   li.innerText = inp.value;
//   list.appendChild(li);
//   li.appendChild(done);
//   li.appendChild(dlt);
//   done.addEventListener("click", () => {
//     if (li.style.textDecoration === "line-through") {
//       li.style.textDecoration = "none";
//     } else {
//       li.style.textDecoration = "line-through";
//     }
//   });
//   dlt.addEventListener("click", () => {
//     li.remove();
//   });
//   inp.value = "";
// });

let btn = document.querySelector("#btn");
let list = document.getElementById("list");

btn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText = "Lucky";
  list.appendChild(li);
});
