import { Link } from "react-router";
import { useSession, signIn, signOut } from 'next-auth/react'
import styles from "./styles.module.css"


const Header = () => {
  return (
    
    <header className={styles.header}>
        <h2>My<span>Contacts</span></h2>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <Link ref='/'>
                        <h1 className={styles.logo}>
                            <span className={styles.efect}>
                                Tarefas
                            </span>
                            <span>
                                +
                            </span>
                        </h1>
                    </Link>
                    {session?.user && (
                        <Link ref='/dashboard' className={styles.painel}>
                            Meu Painel
                        </Link>
                    )}
                </nav>
                {status === "loading" ? (
                    <></>
                ) : session ? (
                    <button className={styles.loginButton} onClick={async () => {
                        await signOut({ redirect: false });
                        window.location.reload();
                    }}>
                        Olá {session?.user?.name}
                    </button>
                ) : (
                    <button className={styles.loginButton} onClick={() => signIn("google")}>
                        Acessar
                    </button>
                )}
            </section>
        </header>
  )
}

export default Header