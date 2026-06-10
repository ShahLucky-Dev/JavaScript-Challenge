let key = prompt("enter your name:-");
let value = prompt("enter your surname:-");

localStorage.setItem(key, value);
console.log(
  `${localStorage.getItem(key)} is name & ${localStorage.getItem(value)} is surname `,
);

if (key == "suresh") {
  localStorage.clear();
}
