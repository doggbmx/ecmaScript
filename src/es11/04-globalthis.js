// que es el global this? es una forma de acceder al objeto global
// en el navegador es window, en node es global, en webworkers es self
// console.log(window); // tira un error porque no existe window en node
console.log(globalThis); // segun el caso es window, global o self
