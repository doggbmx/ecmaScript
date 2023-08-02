const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

// actualizar vscode para q funcione
// devueve la primera promesa que se resuelva
Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);
