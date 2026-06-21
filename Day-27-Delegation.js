let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let inp = document.querySelector("#inp");

btn.addEventListener("click", () => {
  let li = document.createElement("li");
  let dlt = document.createElement("button");
  let done = document.createElement("button");
  done.innerText = "Done";
  dlt.innerText = "Delete";
  list.appendChild(li);

  li.innerText = inp.value;
  li.appendChild(done);
  li.appendChild(dlt);
  inp.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.innerText === "Delete") {
    e.target.parentElement.remove();
  } else if (e.target.innerText === "Done") {
    e.target.parentElement.style.textDecoration = "line-through";
  }
});
