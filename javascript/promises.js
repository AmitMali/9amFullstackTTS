// function getUsers() {
//   let users = [];
//   //   users = [
//   //     { username: "john", email: "john@test.com" },
//   //     { username: "jane", email: "jane@test.com" },
//   //   ];
//   setTimeout(() => {
//     users = [
//       { username: "john", email: "john@test.com" },
//       { username: "jane", email: "jane@test.com" },
//     ];
//   }, 189);

//   return users;
// }

// function findUser(username) {
//   const users = getUsers();
//   console.log(users);
//   const user = users.find((user) => user.username === username);
//   return user;
// }

// console.log(findUser("john"));

const myPromise = new Promise((resolve, reject) => {
  if (10 % 2 == 0) {
    resolve();
  } else {
    reject();
  }
});

myPromise
  .then(() => {
    console.log("its even number");
  })
  .catch(() => {
    console.log("its not even number");
  });

const getUsers = new Promise((resolve, reject) => {
  try {
    let users = [];
    setTimeout(() => {
      users = [
        { username: "john", email: "john@test.com" },
        { username: "jane", email: "jane@test.com" },
      ];
      resolve(users);
    }, 2000);
  } catch (e) {
    reject("not able to load users");
  }
});

getUsers
  .then((res) => {
    const user = res.find((user) => user.username === "john");
    return user;
  })
  .catch((err) => console.log(err));
