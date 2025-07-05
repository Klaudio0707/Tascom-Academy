import React from "react";
import styles from "./styles.module.css"

interface SquareProps {
  value: string | null; 
  onSquareClick: () => void; 
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>

  );
};

export default Square;
