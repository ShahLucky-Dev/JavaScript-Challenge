// let orderfood = new Promise((resolve, reject) => {
//   resolve("burger ready..");
// });

// orderfood.then((order) => {
//   console.log(order);
// });

// let sum = new Promise((resolve, reject) => {
//   resolve(50);
// });

// sum
//   .then((add) => {
//     return add + 50;
//   })
//   .then((ans) => {
//     console.log(ans);
//   });

// let user = new Promise((resolve, reject) => {
//   resolve("lucky");
// });

// user.then((val) => {
//   console.log("user login");
//   console.log("welcome" + val);
// });

// let game = new Promise((resolve, reject) => {
//   resolve("Free Fire");
// });

// game.then((load) => {
//   console.log("game loded");
//   console.log("playing " + load);
// });

// let exam = new Promise((resolve, reject) => {
//   reject("student fail");
// });

// exam.catch((result) => {
//   console.log(result);
// });

let marks = new Promise((resolve, reject) => {
  resolve(80);
});

marks
  .then((score) => {
    return score + 20;
  })

  .then((ans) => {
    console.log(ans);
    return ans + 50;
  })

  .then((res) => {
    console.log(res);
  });
