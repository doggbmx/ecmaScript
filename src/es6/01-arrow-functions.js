function sqare(num) {
  // AFECTADO POR EL HOISTING
  return num * num;
}

const sqare = (num) => {
  // NO AFECTADO POR EL HOISTING
  return num * num;
};

// Si solo hay un return, se puede omitir las llaves y el return
const sqare = (num) => num * num; // NO AFECTADO POR EL HOISTING
