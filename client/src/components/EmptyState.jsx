import React from "react";
import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";

const EmptyState = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-12"
    >
      <ClipboardList className="h-16 w-16 mx-auto text-gray-400 mb-4" />
      <h3 className="text-xl font-medium text-gray-700 mb-2">No todos yet</h3>
      <p className="text-gray-500">Add your first todo to get started!</p>
    </motion.div>
  );
};

export default EmptyState;
