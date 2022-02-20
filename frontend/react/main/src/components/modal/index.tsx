import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import BackDrop from "../backDrop";

const dropIn: Variants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 500,
      damping: 100,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

interface Props {
  handleClose: () => void;
  text: string;
  modalOpen?: boolean;
}

const ModalComponent: FC<Props> = ({ handleClose, text }) => {
  return (
    <BackDrop onClick={handleClose}>
      <motion.div
        drag
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </BackDrop>
  );
};

export default ModalComponent;
