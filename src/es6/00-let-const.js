var lastName = "Coso"; // declara y asignar
lastName = "Fulanito"; //  reasignar
console.log(lastName);

let fruit = "apple"; // declara y asignar
fruit = "banana"; //  reasignar
console.log(fruit);

const animal = "dog"; // declara y asignar
// esto no se puede
// animal = "cat"; //  reasignar
console.log(animal);

const fruits = () => {
  if (true) {
    var fruit1 = "apple"; // function scope
    let fruit2 = "banana"; // block scope
    const fruit3 = "kiwi"; // block scope
  }
  console.log(fruit1);
  console.log(fruit2); // ESTO FALLARA
  console.log(fruit3); // ESTE TAMBIEN
};

fruits();
