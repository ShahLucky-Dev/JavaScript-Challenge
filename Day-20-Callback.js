function food() {
  console.log("pizza ready");
}

function kitchen(callback) {
  console.log("cooking");

  callback();
  console.log("served");
}

kitchen(food);
