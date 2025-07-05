import  {  useEffect, useState } from 'react'
import styles from "./styles.module.css"



const Relogio = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
      
      
    }, 1000);
    return() => clearInterval(intervalo)
  
  
  },[]);


    return (
    <div className={styles.hora}>{hora}</div>
  )
}

export default Relogio