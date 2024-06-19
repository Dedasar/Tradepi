import styles from "./Header.module.css"

function Header () {
return (
<header className= {styles.header} >
    <nav>
    <a href="#">Jogos</a>
    <a href="#">Consoles</a>
    </nav>
    <img src="/images/logo2.png"></img> 
    <nav>
    <a href="#">Pesquisar</a>
    <a href="#">Login</a>
    </nav>

</header>

);

}



export default Header;