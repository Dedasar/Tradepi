import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';

function RecuperaSenha() {
    return (
        <>
            <Header />
            <Banner imagem="mk" />
            <Container>
            <div>
                <h2>Recuperar Senha</h2>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <button type="submit">Enviar</button>
                </form>
                <p>
                    <Link to="/Login">Login</Link>
                </p>
            </div>
            </Container >
            <Footer />
        </>
    );
}

export default RecuperaSenha;
