import React, { useState } from 'react';
import styles from './Login.module.css'; // Importar os estilos específicos
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <>
            <Header />
            <Banner imagem="mk" />
            <Container>
                <div className={styles.loginContainer}>
                    <h2 className={styles.loginTitle}>Login</h2>
                    <p>Digite seus dados de acesso abaixo</p>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>E-mail</label>
                            <input
                                type="email"
                                id="email"
                                className={styles.input}
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="password" className={styles.label}>Senha</label>
                            <input
                                type="password"
                                id="password"
                                className={styles.input}
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.button}>Acessar</button>
                        <div className={styles.extraOptions}>
                            <Link to="/recuperaSenha" className={styles.forgotPassword}>Esqueci minha senha</Link>
                            <span className={styles.register}>Ainda não tem uma conta? <Link to="/cadastro" className={styles.registerLink}>Cadastre-se</Link></span>
                        </div>
                    </form>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default Login;
