import React from 'react'
import styles from "./styles.module.css"

const ButtonReset = () => {
  function handleReset(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
   event.preventDefault();
    alert("reiniciou");
    window.location.reload();
  }

  return (
    <div>
      <button className={styles.btn_Reset} onClick={handleReset}>Reset</button>
    </div>
  )
}

export default ButtonReset