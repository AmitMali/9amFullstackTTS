/*
install nodejs
create project folder
cd into that forder in command line /terminal
run command 'npm i express'
run command 'npm i nodemon'
configure  'package.json'
add 
"scripts": {
    "server": "nodemon app.js"
  }

  where app.js is name of file 

  write code to create express server 
  in terminal write cmd 'npm run server'
*/

const express = require("express");
const app = express();
const port = 3100;

// const cors = require("cors");
// app.use(cors());
// app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get("/", (req, res) => {
  // console.log(req);
  res.send("Server is working");
});
// app.post("/", (req, res) => {
//   console.log(req);
//   res.json({
//     message: "Success",
//     data: req.body,
//   });
// });
app.get("/users", (req, res) => {
  res.send("users route");
});

app.listen(port, () => {
  console.log(`localhost started at http://localhost:${port}`);
});
