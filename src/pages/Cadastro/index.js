import React, { useState } from 'react';
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Cadastro.module.css";
import { Link } from 'react-router-dom';

function Cadastro() {
    const [formData, setFormData] = useState({
        Nome: '',
        sobrenome: '',
        nomeDeUsuario: '',
        email: '',
        senha: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Enviar para o backend IMPLEMENTAR*********************
        console.log(formData);
    };

    return (
        <>
            <Header />
            <Banner imagem="mk" />
            <Container>
                <h2 className={styles.title}>Cadastrar</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Nome</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder="Digite seu nome"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Sobrenome</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="sobrenome"
                            value={formData.sobrenome}
                            onChange={handleChange}
                            placeholder="Digite seu sobrenome"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Nome de usuário</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="nomeDeUsuario"
                            value={formData.nomeDeUsuario}
                            onChange={handleChange}
                            placeholder="Digite seu nome de usuário"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>E-mail</label>
                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Digite seu e-mail"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Senha</label>
                        <input
                            className={styles.input}
                            type="password"
                            name="senha"
                            value={formData.senha}
                            onChange={handleChange}
                            placeholder="Digite sua senha"
                            required
                        />
                    </div>
                    <button className={styles.button} type="submit">Cadastrar</button>
                </form>
                <div className={styles.footerLinks}>
                    <p>Já tem uma conta? <Link to="/login">Faça seu login</Link></p>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Cadastro;
