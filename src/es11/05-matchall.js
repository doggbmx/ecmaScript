const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Kiwi, and more Banana";

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}
