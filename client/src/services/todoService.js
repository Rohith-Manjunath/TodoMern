import * as api from "./api";

export const fetchTodos = async () => {
  try {
    const data = await api.getTodos();
    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export const addTodo = async (text) => {
  try {
    const data = await api.createTodo(text);
    return data;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

export const toggleTodo = async (id, completed) => {
  try {
    const data = await api.updateTodo(id, completed);
    return data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

export const removeTodo = async (id) => {
  try {
    await api.deleteTodo(id);
    return id;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
