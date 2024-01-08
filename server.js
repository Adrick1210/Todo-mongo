// DEPENDENCIES
require("dotenv").config();
require("./config/db.js");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const { PORT = 3030 } = process.env;
const Todo = require("./models/todos.js");
const seedData = require("./models/seed.js");

// APP OBJECT
const app = express();

// MIDDLE WARE
app.use(morgan("dev"));
app.use(methodOverride("method-override"));
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static("public"));

// ROUTES

// Test
app.get("/", (req, res) => {
  res.send("Hello Todo");
});

// Seed
app.get("/seed", async (req, res) => {
  try {
    await Todo.deleteMany({});
    const todos = await Todo.create(seedData);
    res.json(todos);
  } catch (error) {
    console.log(error.message);
    res.send("Theres a issue with the seeds");
  }
});

// Index
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.render("index.ejs", { todos });
  } catch (error) {
    console.log("-----", error.message, "-----");
    res.status(400).send("error, read logs for error details");
  }
});

// New

// Create

// Edit

// Update

// Destroy

// Show
app.get("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const todos = await Todo.findById(id);
    res.render("show.ejs", { todos, id });
  } catch (error) {
    console.log("-----", error.message, "-----");
    res.status(400).send("error, read logs for error details");
  }
});

// LISTENER
app.listen(PORT, () => console.log(`Time to organize Port ${PORT}`));
