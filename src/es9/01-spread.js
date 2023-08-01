const user = {
  username: "doggbmx",
  age: 29,
  country: "PY",
};

const { username, ...values } = user;
console.log(username, values);
