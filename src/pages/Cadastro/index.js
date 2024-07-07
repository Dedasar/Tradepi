import React, { useState } from 'react';
import Banner from "../../components/Banner";
import Container from "../../components/Container"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Cadastro.module.css";


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

    // ALTERAÇÕES campos do formulário IMPLEMENTAR********************************
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Envio do formulário IMPLEMENTAR***********************
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
                <h2>Cadastre-se preenchendo os dados abaixo</h2>
                    <form className={styles.Cadastro} onSubmit={handleSubmit}>
                        <label className={styles.Cadastro}>
                            Nome:
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label className={styles.Cadastro}>
                            Rua:
                            <input className={styles.Cadastro}
                                type="text"
                                name="rua"
                                value={formData.rua}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label className={styles.Cadastro}>
                            Número:
                            <input className={styles.Cadastro}
                                type="text"
                                name="numero"
                                value={formData.numero}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label className={styles.Cadastro}>
                            Bairro:
                            <input className={styles.Cadastro}
                                type="text"
                                name="bairro"
                                value={formData.bairro}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label className={styles.Cadastro}>
                            Cidade:
                            <input className={styles.Cadastro}
                                type="text"
                                name="cidade"
                                value={formData.cidade}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label className={styles.Cadastro}> 
                            Estado:
                            <select className={styles.Cadastro}
                                name="estado"
                                value={formData.estado}
                                onChange={handleChange}
                                required
                            >
                                <option className={styles.Cadastro} value="">Selecione o Estado</option>
                                {estadosBrasileiros.map((estado, index) => (
                                    <option key={index} value={estado.sigla}>{estado.sigla}</option>
                                ))}
                            </select>
                        </label>
                        <br />
                        <label className={styles.Cadastro}>
                            CEP:
                            <input className={styles.Cadastro}
                                type="text"
                                name="cep"
                                value={formData.cep}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label className={styles.Cadastro}>
                            E-mail:
                            <input className={styles.Cadastro}
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label className={styles.Cadastro}>
                            Senha:
                            <input className={styles.Cadastro}
                                type="password"
                                name="senha"
                                value={formData.senha}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <button className={styles.Cadastro} type="submit">Salvar</button>
                        <button className={styles.Cadastro} type="button">Cancelar</button>
                    </form>
                
            </Container>
            <Footer />
        </>
    );
}

export default Cadastro;
