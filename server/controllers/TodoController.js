const Todo = require("../models/TodoSchema");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos" });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { text } = req.body;
    const todo = await Todo.create({ text });
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ message: "Error creating todo" });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the route parameter
    const { completed } = req.body; // Get the `completed` field from the request body

    // Find the todo by its ID
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    // Update the `completed` field
    todo.completed = completed;

    // Save the updated todo
    const updatedTodo = await todo.save();

    // Respond with the updated todo
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: "Error updating todo" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting todo" });
  }
};
