import React, { useState } from 'react';
import styles from './Login.module.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Banner from '../../components/Banner';

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
            <Container>
            <Banner imagem="mk"/>
                <div className={styles.loginForm}>
                    <h2>Insira seus dados para o Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default Login;
