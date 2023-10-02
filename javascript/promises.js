function getUsers() {
  let users = [];
  //   users = [
  //     { username: "john", email: "john@test.com" },
  //     { username: "jane", email: "jane@test.com" },
  //   ];
  setTimeout(() => {
    users = [
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ];
  }, 189);

  return users;
}

function findUser(username) {
  const users = getUsers();
  console.log(users);
  const user = users.find((user) => user.username === username);
  return user;
}

console.log(findUser("john"));
