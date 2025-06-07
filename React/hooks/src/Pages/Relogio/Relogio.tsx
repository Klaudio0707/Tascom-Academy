import React, { use, useEffect, useState } from 'react'
import styles from "./styles.module.css"



const Relogio = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
      console.log("Hora e data Atualizada em", {count} )
      
    }, 1000);
    return() => clearInterval(intervalo)
  
  
  },[]);


    return (
    <div className={styles.hora}>{hora}</div>
  )
}

export default Relogio