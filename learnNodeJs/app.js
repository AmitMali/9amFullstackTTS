const express = require("express");
const app = express();
const port = 3100;
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
// middlewares
app.use(cors());
app.use(bodyParser.json());
// routes
app.use("/users", userRoutes);
//server listning to port
app.listen(port, () => {
  console.log(`localhost started at http://localhost:${port}`);
});
