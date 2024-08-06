import React, { useState } from 'react';
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Cadastro.module.css";
import { Link } from 'react-router-dom';

// EXEMPLO APENAS, DEVE SER MIGRADO PARA O BANCO DE DADOS******************************
const estadosBrasileiros = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' }
];

function Cadastro() {
    const [formData, setFormData] = useState({
        nome: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
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
                <main className={styles.registrationForm}>
                    <section className={styles.formContainer}>
                        <h1 className={styles.formTitle}>Cadastrar</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="nome" className={styles.label}>Nome</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                className={styles.input}
                                value={formData.nome}
                                onChange={handleChange}
                                placeholder="Digite seu nome"
                            />

                            <label htmlFor="rua" className={styles.label}>Rua</label>
                            <input
                                type="text"
                                id="rua"
                                name="rua"
                                className={styles.input}
                                value={formData.rua}
                                onChange={handleChange}
                                placeholder="Digite sua rua"
                            />

                            <label htmlFor="numero" className={styles.label}>Número</label>
                            <input
                                type="text"
                                id="numero"
                                name="numero"
                                className={styles.input}
                                value={formData.numero}
                                onChange={handleChange}
                                placeholder="Digite o número"
                            />

                            <label htmlFor="bairro" className={styles.label}>Bairro</label>
                            <input
                                type="text"
                                id="bairro"
                                name="bairro"
                                className={styles.input}
                                value={formData.bairro}
                                onChange={handleChange}
                                placeholder="Digite seu bairro"
                            />

                            <label htmlFor="cidade" className={styles.label}>Cidade</label>
                            <input
                                type="text"
                                id="cidade"
                                name="cidade"
                                className={styles.input}
                                value={formData.cidade}
                                onChange={handleChange}
                                placeholder="Digite sua cidade"
                            />

                            <label htmlFor="estado" className={styles.label}>Estado</label>
                            <select
                                id="estado"
                                name="estado"
                                className={styles.input}
                                value={formData.estado}
                                onChange={handleChange}
                            >
                                {estadosBrasileiros.map(estado => (
                                    <option key={estado.sigla} value={estado.sigla}>{estado.nome}</option>
                                ))}
                            </select>

                            <label htmlFor="cep" className={styles.label}>CEP</label>
                            <input
                                type="text"
                                id="cep"
                                name="cep"
                                className={styles.input}
                                value={formData.cep}
                                onChange={handleChange}
                                placeholder="Digite seu CEP"
                            />

                            <label htmlFor="email" className={styles.label}>E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Digite seu e-mail"
                            />

                            <label htmlFor="senha" className={styles.label}>Senha</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                className={styles.input}
                                value={formData.senha}
                                onChange={handleChange}
                                placeholder="Digite sua senha"
                            />

                            <button type="submit" className={styles.submitButton}>Cadastrar</button>
                        </form>
                        <div className={styles.loginPrompt}>
                            <p>Já tem uma conta? <Link to="/login">Faça seu login</Link></p>
                        </div>
                    </section>
                </main>
            </Container>
            <Footer />
        </>
    );
}

export default Cadastro;
