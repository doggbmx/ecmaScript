const button = document.getElementById("button");
button.addEventListener("click", async () => {
  const module = await import("./module.js");
  console.log(module);
  module.hello();
});
