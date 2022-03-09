import React, { FC } from "react";
import { motion } from "framer-motion";
import "./backdrop.styles.scss";

interface Props {
  children: any;
  onClick: () => void;
}
const BackDrop: FC<Props> = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default BackDrop;
