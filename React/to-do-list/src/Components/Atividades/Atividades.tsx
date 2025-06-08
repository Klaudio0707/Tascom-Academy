import styles from "./styles.module.css";


export default function Atividades() {
  return (
    <div className={styles.container}>
      <section className={styles.atividades_Container}>
        <h4 className={styles.titulo_Atividades}>Título</h4>
        <p className={styles.description}>descrição</p>
        <span className={styles.date}>20/05/2025 14:35</span>
      </section>
      <article className={styles.container_btn}>
        <button className={styles.btn_Editar}>Editar</button>
        <button className={styles.btn_Concluir}>Concluir</button>
      </article>
    </div>
  );
}
