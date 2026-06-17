// object
/*let mobile = {
  brand: "samsung",
  price: 20000,
  color: "black",
};

console.log(mobile.brand);
console.log(mobile.price);
console.log((mobile.color = "blue"));
console.log((mobile.ram = "8gb"));

console.log(mobile); */

/*let student = {
  name: "lucky",
  age: 19,
  city: "surat",
};

console.log(student.name);
student.age = 20;
student.cource = "BCA";

console.log(student);*/

let students = [
  {
    name: "lucky",
    age: 19,
  },
  {
    name: "ratan",
    age: 19,
  },
  {
    name: "shivlal",
    age: 20,
  },
];

let map = students.map((item) => {
  return item.name;
});

let filter = students.filter((item) => {
  return item.age >= 19;
});
