import styles from "./Footer.module.css"
import {FaFacebook,FaInstagram,FaLinkedin,FaTwitter} from 'react-icons/fa'

function Footer () {
    return (
    <footer className= {styles.footer} >
        
        <div className={styles.sociais}>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaTwitter /></a>
        </div>    
        <>
        <h5>PlayTrade &copy; Desenvolvido por GRUPO 22 PI</h5>
        
        </>
    </footer>
    );
    
    }
    
    
    
    export default Footer;