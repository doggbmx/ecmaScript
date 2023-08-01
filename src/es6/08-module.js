// cambiamos el package.json para que pueda ejecutar modulos
// es necesario poner la extension del archivo a importar
import hello from "./module.js";

hello(); // Hello!

// playground de platzi
// exerciese.js
// import { getData } from "./api.js";
// export function solution() {
//   return getData().then((list) => list);
// }
// api.js
// export function getData() {
//     return new Promise((resolve) => {
//         resolve([{
//             movie: 'El despertar de los michis',
//             year: 2021,
//             protagonista: 'Mr. Michi'
//         },{
//             movie: 'El despertar de los michis 2',
//             year: 2022,
//             protagonista: 'Mr. Michi'
//         }]);
//     }, 1000);
// }
