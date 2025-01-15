import React from "react";
import { motion } from "framer-motion";

const TodoHeader = ({ count }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-6"
    >
      <h1 className="text-3xl font-bold text-gray-800">Todo List</h1>
      <h2 className="text-gray-600 mt-2 font-semibold text-xl">
        You have {count} {count === 1 ? "todo" : "todos"}
      </h2>
    </motion.div>
  );
};

export default TodoHeader;
