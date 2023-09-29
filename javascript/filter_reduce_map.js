const users = [
  { username: "john", email: "john@test.com" },
  { username: "jane", email: "jane@test.com" },
  { username: "rahul", email: "rahul@test.com" },
  { username: "rahul", email: "rahul2@test.com" },
  { username: "rahul", email: "rahul3@test.com" },
  { username: "rahul", email: "rahul5@test.com" },
  { username: "pawan", email: "pawan@test.com" },
  { username: "amit", email: "amit@test.com" },
];

const person = {
  age: 35,
  married: true,
  languages: ["php,python,javascript"],
  address: {
    city: "nashik",
    state: "Maharastra",
    zip: 422009,
  },
  name: "amit mali",
};

// console.log(person.name);
// console.log(person.address.city);
// console.log(person["name"]);

function findbyname(name) {
  if (name == "rahul") {
    return true;
  } else {
    return false;
  }
}

// console.log(findbyname("rahul"));
const rahuls = users.filter((user) => user.username == "rahul");
const usersInCaps = users.map((user) => user.username.toUpperCase());
console.log(users);
console.log(usersInCaps);
