import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importando Link do react-router-dom

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.sociais}>
                <Link to="#"><FaFacebook /></Link>
                <Link to="#"><FaInstagram /></Link>
                <Link to="#"><FaLinkedin /></Link>
                <Link to="#"><FaTwitter /></Link>
            </div>
            <h5>PlayTrade &copy; Desenvolvido por GRUPO 22 PI</h5>
        </footer>
    );
}

export default Footer;
