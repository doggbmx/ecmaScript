// arrays destructuring

let fruits = ["banana", "apple", "orange"];
let [a, b] = fruits;
console.log(a, b);

// objects destructuring
let user = {
  username: "doggbmx",
  age: 29,
};

let { username, age } = user;
console.log(username, age);

// spread operator
let person = { name: "Manu", age: 28 };
let country = "PY";
let completePerson = { ...person, country };
console.log(completePerson);

// rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3);

// PLAYGROUND BY PLATZI
export function solution(
  json1 = {
    name: "Mr. Michi",
    food: "Pescado",
  },
  json2 = {
    age: 12,
    color: "Blanco",
  }
) {
  // Tu código aquí 👈
  return { ...json1, ...json2 };
}
