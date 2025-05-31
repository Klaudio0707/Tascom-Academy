import React from "react";
import Styles from  "../Button/styles.module.css";


interface Props{
    children: React.ReactNode;
}

export default function Button({children}: Props){
  return <button className={Styles.button}>{children}</button>
 
  
}
