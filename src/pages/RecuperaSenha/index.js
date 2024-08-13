import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import { useState } from 'react';

function RecuperaSenha() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //IMPLEMENTAÇÃO DA VALIDAÇÃO DE EMAIL//
        if (email) {
            console.log('Email enviado:', email);
        } else {
            console.log('Por favor, insira um email válido.');
        }
    };

    return (
        <>
            <Header />
            <Banner imagem="mk" />
            <Container>
                <section>
                    <h2>Recuperar Senha</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Insira o email de cadastro"
                            aria-label="Email para recuperação de senha"
                            required
                        />

                        <button type="submit">Enviar</button>
                    </form>
                    <p>
                        <Link to="/login">Login</Link>
                    </p>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default RecuperaSenha;
