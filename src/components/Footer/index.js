import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importando Link do react-router-dom

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.sociais}>
                <Link className={styles.link} to="#"><FaFacebook /></Link>
                <Link className={styles.link} to="#"><FaInstagram /></Link>
                <Link className={styles.link} to="#"><FaLinkedin /></Link>
                <Link className={styles.link} to="#"><FaTwitter /></Link>
            </div>
            <h5>PlayTrade &copy; Desenvolvido por GRUPO 22 PI</h5>
        </footer>
    );
}

export default Footer;
