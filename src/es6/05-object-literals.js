// enchanced object literals

function newUser(user, age, country, uId) {
  // ASI SE HACIA ANTES
  // return {
  //     user: user,
  //     age: age,
  //     country: country
  // }
  // ASI SE HACE AHORA
  return {
    user,
    age,
    country,
    id: uId,
  };
}

console.log(newUser("Manu", 28, "PY", 1));
