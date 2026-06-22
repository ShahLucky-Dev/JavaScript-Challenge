// let key = prompt("enter your name:-");
// let value = prompt("enter your surname:-");

// localStorage.setItem(key, value);
// console.log(
//   `${localStorage.getItem(key)} is name & ${localStorage.getItem(value)} is surname `,
// );

// if (key == "suresh") {
//   localStorage.clear();
// }

// let tasks = [];
// tasks.push("learn js");
// console.log(tasks);

// localStorage.setItem("tasks", tasks);

// let data = localStorage.getItem("tasks");
// console.log(data);

// localStorage.setItem("name", "lucky");
// localStorage.setItem("city", "surat");

// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("city"));

// localStorage.removeItem("city");
// console.log(localStorage.getItem("city"));

// let tasks = ["HTML", "CSS", "JS"];
// localStorage.setItem("tasks", JSON.stringify(tasks));
// console.log(localStorage.getItem("tasks"));

// let data = localStorage.getItem("tasks");
// console.log(data);

// let arr = JSON.parse(data);

// console.log(arr);

let user = {
  name: "lucky",
  age: 19,
};

localStorage.setItem("user", JSON.stringify(user));

console.log(localStorage.getItem("user"));

let data = localStorage.getItem("user");

let obj = JSON.parse(data);
console.log(obj);
console.log(obj.name);
console.log(obj.age);
