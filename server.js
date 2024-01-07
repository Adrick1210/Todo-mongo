// DEPENDENCIES
require("dotenv").config();
require("./config/db.js")
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const { PORT = 3030 } = process.env

// APP OBJECT
const app = express();

// MIDDLE WARE
app.use(morgan("dev"));
app.use(methodOverride("method-override"));
app.use(express.urlencoded({ extended: true}));
app.use("/public", express.static("public"));

// ROUTES
// Test
app.get("/", (req,res) => {
    res.send("Hello Todo");
})

// LISTENER
app.listen(PORT, () => console.log(`Time to organize Port ${PORT}`));
