import React from "react";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm"
    >
      <div className="flex items-center space-x-3">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={(checked) => onToggle(todo._id, checked)}
          className="h-5 w-5"
        />
        <span
          className={`text-lg transition-all ${
            todo.completed ? "line-through text-gray-400" : "text-gray-700"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo._id)}
        className="text-red-500 hover:text-red-700 hover:bg-red-50"
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </motion.div>
  );
};

export default TodoItem;
