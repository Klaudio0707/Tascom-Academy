import styles from "./styles.module.css"


  
  export default function Form() {
 
    return (
      <form  className={styles.form_Container}>
        <input className={styles.input_Title} type="text" placeholder="Título" />
        <input className={styles.input_Description} type="text" placeholder="Descrição" />
        <button  className={styles.btn_adicionar} type="submit">Adicionar</button>
      </form>
    );
  }