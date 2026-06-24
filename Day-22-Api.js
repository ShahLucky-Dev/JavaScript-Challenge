// const url = "https://pokeapi.co/api/v2/pokemon";
// let ans = document.querySelector(".text");
// let btn = document.getElementById("btn");

// const getdata = async () => {
//   console.log("getting data");
//   let response = await fetch(url);
//   console.log(response);

//   let pokemon = await response.json();
//   ans.innerText = pokemon.results[0].name;
// };

// btn.addEventListener("click", getdata);

let list = document.getElementById("list");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())

  .then((data) => {
    data.forEach((user) => {
      let li = document.createElement("li");
      li.innerText = user.name;
      list.appendChild(li);
    });
  });
