import fetch from "node-fetch";
// antes se tenia que poner async y encapsularlo en una funcion
// ahora te chupa todo un huevo y le mandas asiete nomas feroz pija
const response = await fetch("https://api.escuelajs.co/api/v1/products");
const data = await response.json();

export { data };
