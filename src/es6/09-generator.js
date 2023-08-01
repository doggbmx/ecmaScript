// como sabemos que es un generator? porque tiene un asterisco
// la sintaxis es la misma que una funcion
function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["manu", "david", "oscar", "ana", "ulises"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
