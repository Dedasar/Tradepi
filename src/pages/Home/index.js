import React from "react";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css"; // Importando o CSS específico

function Home() {
    return (
        <>
            <Header />
            <Banner imagem="mk" />
            <Container>
                <div className={styles.intro}>
                    <p className={styles.introText}>Bem-vindo ao PlayTrade!</p>
                    <p className={styles.introText}>Aqui, você pode iniciar o processo de troca de jogos de forma simples e segura. Conecte-se com outros jogadores e descubra uma nova maneira de trocar seus jogos físicos e consoles.</p>
                    <p className={styles.introText}>Siga os passos abaixo para começar e aproveite a nossa plataforma para uma troca segura e eficiente.</p>
                </div>

                <div className={styles.steps}>
                    <h2>1. Cadastre-se</h2>
                    <p>Crie uma conta na nossa plataforma e complete o processo de verificação. Isso garante que você e os outros jogadores estejam devidamente verificados para realizar trocas seguras.</p>
                </div>

                <div className={styles.steps}>
                    <h2>2. Escolha seus jogos</h2>
                    <p>Explore as opções de jogos disponíveis para troca. Certifique-se de que as informações dos jogos estejam atualizadas e precisas para garantir uma troca justa.</p>
                </div>

                <div className={styles.steps}>
                    <h2>3. Marque um ponto de encontro</h2>
                    <p>Agende um local para encontrar o outro jogador e efetivar a troca. O PlayTrade facilita essa conexão, mas a troca em si é realizada pessoalmente.</p>
                </div>

                <div className={styles.steps}>
                    <h2>4. Inicie sua troca!</h2>
                    <p>Após agendar o encontro, é só comparecer no local e realizar a troca. Lembre-se de verificar todas as condições do jogo antes de finalizar a troca.</p>
                </div>

                <div className={styles.commentForm}>
                    <h2>Entre em Contato</h2>
                    <div className={styles.formGroup}>
                        <input type="text" placeholder="Seu Nome" />
                    </div>
                    <div className={styles.formGroup}>
                        <input type="email" placeholder="Seu E-mail" />
                    </div>
                    <div className={styles.formGroup}>
                        <textarea placeholder="Sua Mensagem..."></textarea>
                    </div>
                    <button className={styles.button}>Enviar</button>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Home;
