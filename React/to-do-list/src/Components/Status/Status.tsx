import styles from "./styles.module.css"

const Status= () => {
return(
    <div className={styles.container}>
            <section className={styles.container_TaskCriadas}>
                        <h3 className={styles.titulo_Criadas}>Tasks Criadas</h3>
                        <p className={styles.contador_Criadas}>1</p>
            </section>
            <section className={styles.container_TaskConcluidas}>
                    <h3 className={styles.titulo_Concluidas}>Task Concluídas</h3>
                    <p className={styles.contador_Concluidas}>1</p>
            </section>
        
    </div>
)



}

export default Status;