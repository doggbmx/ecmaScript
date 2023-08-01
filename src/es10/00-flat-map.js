// nos devuelve una matriz de cualquier submatriz
const array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
// aca lo aplanamos
console.log(array.flat(3));

// flatMap
const array2 = [1, 2, 3, 4, 5, 6];
// aplica una transformacion y encima aplana el resultado
console.log(array2.flatMap((value) => [value, value * 2]));
