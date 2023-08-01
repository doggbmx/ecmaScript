const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 2000)
      : reject(new Error("Test Error"));
  });
};

const anotherFunction = async () => {
  const hello = await fnAsync();
  console.log(hello);
  console.log("asd");
};

console.log("Before");
anotherFunction();
console.log("After");
