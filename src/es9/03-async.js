async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const ohter = anotherGenerator();
ohter.next().then(({ value, done }) => console.log({ value, done }));
ohter.next().then(({ value, done }) => console.log({ value, done }));
ohter.next().then(({ value, done }) => console.log({ value, done }));
console.log("Fin");

async function arraysOfNames(array) {
  for await (let value of array) {
    console.log(value);
  }
}

const names = arraysOfNames(["Oscar", "Yesica", "Camila"]);
console.log("after");
