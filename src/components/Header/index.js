import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header} >
            <nav>
                <Link className={styles.link} to="/jogos">Jogos</Link>
                <Link className={styles.link} to="/consoles">Consoles</Link>
                <Link className={styles.link} to="/pesquisa">Pesquisar</Link>
                <Link to="/"><img src="/images/logo2.png"></img></Link>
                <Link className={styles.link} to="/cadastro">Cadastro</Link>
                <Link className={styles.link} to="/login">Login</Link>
                <Link className={styles.link} to="/sobre">Sobre</Link>
            </nav>

        </header>
    );

}

export default Header;
