import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header () {
return (
<header className= {styles.header} >
    <nav>
    <a href="#">Jogos</a>
    <a href="#">Consoles</a>
    </nav>
    <nav>
    <Link to="/"><img src="/images/logo2.png"></img></Link>    
    <Link to="/pesquisa">Pesquisar</Link>
    <Link to="/login">Login</Link>
    </nav>

</header>

);

}



export default Header;