import React, { useState } from 'react';
import styles from './Login.module.css';
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
                <main className={styles.loginForm}>
                    <div className={styles.container}>
                        <form className={styles.formWrapper} onSubmit={handleSubmit}>
                            <h1 className={styles.title}>Login</h1>
                            <p className={styles.subtitle}>Digite seus dados de acesso abaixo</p>

                            <label htmlFor="email" className={styles.label}>E-mail</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.input}
                                placeholder="Digite seu e-mail"
                                aria-label="Digite seu e-mail"
                                required
                            />

                            <label htmlFor="password" className={styles.label}>Senha</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.input}
                                placeholder="Digite sua senha"
                                aria-label="Digite sua senha"
                                required
                            />

                            <Link to="/recuperaSenha" className={styles.forgotPassword}>Esqueci minha senha</Link>

                            <div className={styles.buttonWrapper}>
                                <button type="submit" className={styles.submitButton}>Acessar</button>

                            </div>

                            <div className={styles.signupWrapper}>
                                <p className={styles.signupText}>Ainda não tem uma conta?</p>
                                <Link to="/Cadastro" className={styles.signupLink}>Cadastre-se</Link>
                            </div>
                        </form>
                    </div>
                </main>
            </Container>
            <Footer />
        </>
    );
};

export default Login;
