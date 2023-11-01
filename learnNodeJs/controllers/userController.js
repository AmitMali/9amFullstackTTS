const allUsers = (req, res) => {
  res.send("show all users here");
};

const userProfile = (req, res) => {
  res.send("show user Profile info");
};
const userCreate = (req, res) => {
  console.log(req.body);
  res.send("req is recived");
};
const showUser = (req, res) => {
  console.log(req.params);
  id = req.params.id;
  res.json({
    id,
  });
};
module.exports = { allUsers, userProfile, userCreate, showUser };
