const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

// Helper function to handle fetch responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "API request failed");
  }
  return response.json();
};

export const getTodos = () =>
  fetch(`${BASE_URL}/todos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleResponse);

export const createTodo = (text) =>
  fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  }).then(handleResponse);

export const updateTodo = (id, completed) =>
  fetch(`${BASE_URL}/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  }).then(handleResponse);

export const deleteTodo = (id) =>
  fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleResponse);
