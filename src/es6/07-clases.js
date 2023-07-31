// declaración de una clase
class User {}

// creamos la instancia de la clase
// const newUser = new User();

class user {
  // metodos
  saludo() {
    return "Hola";
  }
}

const manu = new user();
console.log(manu.saludo());
const developer = new user();
console.log(developer.saludo());

// constructor
class user {
  // constructor
  constructor() {
    console.log("nuevo usuario");
  }

  saludo() {
    console.log("Hello");
  }
}

const manu2 = new user();
manu2.saludo();

// this
class user {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `Hola`;
  }
  saludo() {
    return `${this.speak()}, soy ${this.name}`;
  }
}

const manu3 = new user("Manu");
console.log(manu3.saludo());

// setters & getters

class user {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //metodos
  speak() {
    return `Hola`;
  }
  saludo() {
    return `${this.speak()}, soy ${this.name}`;
  }

  // getters
  get uAge() {
    return this.age;
  }
  // setters
  set uAge(age) {
    this.age = age;
  }
}

const manu4 = new user("Manu", 29);
console.log(manu4.saludo());
console.log(manu4.uAge);
manu4.uAge = 30;
console.log(manu4.uAge);
