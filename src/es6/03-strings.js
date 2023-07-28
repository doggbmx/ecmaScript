// TEMPLATE LITERALS
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world; // OLDSCHOOL
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`; // NEW
console.log(epicPhrase2);

// MULTI LINE
let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n" +
  "Otra frase epica que necesitamos.";
// NEW
let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica
`;
console.log(lorem);
console.log(lorem2);
