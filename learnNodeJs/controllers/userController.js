const allUsers = (req, res) => {
  res.send("show all users here");
};

const userProfile = (req, res) => {
  res.send("show user Profile info");
};
const userCreate = (req, res) => {
  res.send("user creation will go here..");
};
module.exports = { allUsers, userProfile, userCreate };
