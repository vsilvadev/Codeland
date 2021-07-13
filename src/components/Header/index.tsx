import styles from"./styles.module.scss";
import dark from "../../assets/dark.png"
import light from "../../assets/light.png"
import { useTheme } from "../../hooks/useTheme";
import { useSearch } from "../../hooks/useSearch";

export function Header() {
    const {theme, toggleTheme} = useTheme();
    const {input, onChangeInput} = useSearch();

    console.log("Valor do input", input);

    return(
        <div id={styles.container} className={theme ==="light" ? styles.light : styles.dark}>
            <header>
                <div className={styles.topHeader}>
                    <h1>Codeland</h1>
                    <div className={styles.rightSide}>
                        <h1>Blog</h1>

                        <button 
                            type="button" 
                            id="switch" 
                            onClick={toggleTheme}
                        > 
                            {theme==="light" ? <img src={light} alt="Light Theme Logo" className={styles.headerImg}/> : <img src={dark} alt="Dark Theme Logo" className={styles.headerImg}/> }
                        </button>
                    </div>
                </div>  
                <input type="text" placeholder="Pesquisar publicação" className={styles.input} onChange={(event) => onChangeInput(event.target.value)} />
            </header>
        </div>
    );
}
