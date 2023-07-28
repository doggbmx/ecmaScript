function newUser(name, age, country) {
  var name = name || "default";
  var age = age || 0;
  var country = country || "default";
  console.log(name, age, country);
}

newUser();
newUser("Manu", 23, "PY");

// ES6
function newAdmin(name = "default", age = 0, country = "PY") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("Manu", 23, "PY");
