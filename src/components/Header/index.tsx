import styles from"./styles.module.scss";

export function Header() {
    return(
        <div className={styles.container}>
            <header>
                <div className={styles.topHeader}>
                    <h1>Codeland</h1>
                    <h1>Blog</h1>
                </div>  
                <input type="text" placeholder="Pesquisar publicação" className={styles.input} />
            </header>
        </div>
    );
}
