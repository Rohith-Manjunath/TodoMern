import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const TodoForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      await onSubmit(text.trim());
      setText("");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex space-x-2 mb-6"
      onSubmit={handleSubmit}
    >
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1"
      />
      <Button type="submit" disabled={!text.trim()}>
        <Plus className="h-5 w-5 mr-1" />
        Add
      </Button>
    </motion.form>
  );
};

export default TodoForm;
