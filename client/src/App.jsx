// src/App.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import EmptyState from "./components/EmptyState";
import {
  fetchTodos,
  addTodo,
  toggleTodo,
  removeTodo,
} from "./services/todoService";
import { useToast } from "./hooks/use-toast";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load todos. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (text) => {
    try {
      const newTodo = await addTodo(text);
      setTodos([newTodo, ...todos]);
      toast({
        title: "Success",
        description: "Todo added successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add todo. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleToggleTodo = async (id, completed) => {
    try {
      const updatedTodo = await toggleTodo(id, completed);
      setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update todo. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await removeTodo(id);
      setTodos(todos.filter((todo) => todo._id !== id));
      toast({
        title: "Success",
        description: "Todo deleted successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete todo. Please try again.",
        variant: "destructive",
      });
    }
  };

  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card>
            <CardHeader>
              <TodoHeader count={remainingTodos} />
            </CardHeader>
            <CardContent>
              <TodoForm onSubmit={handleAddTodo} />
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-center py-12"
                  >
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
                  </motion.div>
                ) : todos.length > 0 ? (
                  <TodoList
                    key="list"
                    todos={todos}
                    onToggle={handleToggleTodo}
                    onDelete={handleDeleteTodo}
                  />
                ) : (
                  <EmptyState key="empty" />
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
