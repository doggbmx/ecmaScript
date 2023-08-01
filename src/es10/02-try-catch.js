try {
  // code ..
} catch (error) {
  console.log(error);
}

try {
  anotherFunction();
  // SIEMPRE DEBEMOS ESPECIFICAR EL ERROR, DEBEMOS AGARRARLO, CUIDADO CON ESTE METODO
} catch {
  console.log("esto es un error");
}
