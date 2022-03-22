const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:4003"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CRUD with SQL server demo application." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 4003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});