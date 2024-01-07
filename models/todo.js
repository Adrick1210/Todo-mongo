// DEPENDENCIES
const mongoose = require("mongoose");

// MY TODO MODEL
const { Schema, model } = mongoose;

// SCHEMA
const todoSchema = new Schema ({
    title: String,
    description: String,
    isComplete: Boolean,
})

// MODEL
const Todo = model("Todo", todoSchema);

// EXPORT
module.exports = Todo;