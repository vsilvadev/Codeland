import { useState } from "react";
import styles from"./styles.module.scss";
import dark from "../../assets/dark.png"
import light from "../../assets/light.png"

export function Header() {
    const [darkTheme, setTheme] = useState(true);

    function handleSetTheme() {
        if (darkTheme) {
            setTheme(false);
        } else {
            setTheme(true);
        }
    }

    return(
        <div className={styles.container}>
            <header>
                <div className={styles.topHeader}>
                    <h1>Codeland</h1>
                    <div className={styles.rightSide}>
                        <h1>Blog</h1>

                        <button 
                            type="button" 
                            id="switch" 
                            onClick={handleSetTheme}
                        > 
                            {darkTheme ? <img src={dark} alt="Dark Theme Logo" className={styles.headerImg}/> : <img src={light} alt="Light Theme Logo" className={styles.headerImg}/> }
                        </button>
                    </div>
                </div>  
                <input type="text" placeholder="Pesquisar publicação" className={styles.input} />
            </header>
        </div>
    );
}
