const anotherFunction = () => {
  // algo que va a pasar, capaz nunca se cumple
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey!");
    } else {
      reject("Ups!");
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
