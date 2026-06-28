// let items = ["panipuri", "aloopuri", "kachodi", "samosa"];

// console.log(items.join(" , "));

// console.log(items.unshift("ganne ka juice")); // add to first

// console.log(items.shift()); // delete first element

// let  price = [10,20,15,10];

// console.log(items.concat(price));

// items.pop();  // delete from last

// items.push("vadapav"); // add to last

// console.log(items.toString()); // convert array into string

//date: 17/6/26 practice

// let friends = ["ratan", "shivlal", "lucky"]; //map
// let mrmap = friends.map((item) => {
//   return "mr" + item;
// });

let nums = [10, 20, 30, 40]; // map use hota hai data changing ke liye

let mapnums = nums.map((item) => {
  return item * 3;
});

let names = ["ratan", "shivlal", "lucky"];
let ji = names.map((item) => {
  return item + " ji";
});

let ages = [12, 18, 25, 15, 30]; // filter data me se kuch select karne ke liye
let adult = ages.filter((item) => {
  return item >= 18;
});

let fname = ["ratan", "shivlal", "lucky"];
let fil = fname.filter((item) => {
  return item === "lucky";
});

let num = [5, 10, 15, 20, 25]; // foreach har ek item pe kaam karna
num.forEach((item) => {
  console.log(item);
});

// find karta hai
let findi = num.find((item) => {
  return item > 12;
});

let friends = ["ratan", "shivlal", "lucky"]; // array me value hai ya nahi (true|false)

let tf = friends.includes("ratan");

console.log(tf);

arr.slice(1, 4); //slice example

arr.splice(start, deleteCount, newValue); // splice example

//branch practice
