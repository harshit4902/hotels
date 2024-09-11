const express = require("express");
const db = require("./db");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to my hotel, how can I help you");
});

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes')
app.use('/menu', menuRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
