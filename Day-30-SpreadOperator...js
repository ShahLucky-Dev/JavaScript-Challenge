// let arr1 = ["a", " b"]; // array
// let arr2 = ["c", "d"];

// let result = [...arr1, ...arr2];

// console.log(result);

let user = {
  name: "lucky",
  age: 19,
};

let newuser = {
  ...user,
  city: "surat",
};

console.log(newuser);
