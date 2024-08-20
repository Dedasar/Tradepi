import React from "react";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Sobre.module.css"; // Importando o CSS específico

function Sobre() {
    return (
        <>
            <Header />
            <Banner imagem="mk" />
            <Container>
                <div className={styles.intro}>
                    <p className={styles.introText}>Fala, Jogador! Tudo certo?</p>
                    <p className={styles.introText}>Já conhece o PlayTrade? Nossa plataforma facilita a troca de jogos de mídia física e consoles de maneira segura e prática, conectando jogadores de todas as regiões do Brasil.</p>
                    <p className={styles.introText}>Aqui, você pode marcar pontos de encontro para realizar suas trocas de forma presencial. Mas, antes disso, realizamos uma série de verificações de segurança, como a confirmação de e-mail, celular, RG, CPF, e endereço, para garantir que a troca seja segura para ambas as partes.</p>
                </div>

                <div className={styles.steps}>
                    <h2>1. Como Funciona?</h2>
                    <p>Para começar, cadastre-se na plataforma e realize a verificação dos seus dados pessoais. Após isso, você poderá navegar entre as opções de jogos disponíveis para troca e marcar um ponto de encontro com outro jogador.</p>
                    <p>O sistema da PlayTrade garantirá que todos os envolvidos na troca estejam devidamente verificados, criando um ambiente seguro para todos.</p>
                    <p className={styles.notice}>Lembre-se: Apenas jogadores que passaram pelo processo de verificação completo poderão marcar pontos de encontro e realizar trocas.</p>
                    <button className={styles.button}>Iniciar Troca!</button>
                </div>

                <div className={styles.steps}>
                    <h2>2. Qual é o cálculo sobre o valor da troca?</h2>
                    <p>Os valores dos jogos a serem trocados são definidos pelos próprios usuários, com base no valor de mercado atual. É importante que o valor informado esteja em conformidade com o preço praticado para garantir uma troca justa e equilibrada.</p>
                    <p>Além disso, consideramos fatores como a integridade do jogo (em caso de discos) ou a condição do console, para que ambas as partes possam estar satisfeitas com a negociação.</p>
                </div>

                <div className={styles.steps}>
                    <h2>3. Como é realizada a troca?</h2>
                    <p>Após a definição dos valores e o agendamento do ponto de encontro, você e o outro jogador se encontrarão para efetivar a troca. No entanto, lembre-se de que o PlayTrade não realiza transações financeiras; as trocas são baseadas em confiança e nas verificações de segurança que realizamos.</p>
                    <p className={styles.notice}>Observação: Certifique-se de que todos os detalhes foram acordados antes da troca, e caso haja algum problema, entre em contato com o suporte do PlayTrade para assistência.</p>
                </div>

                <div className={styles.steps}>
                    <h2>4. Como posso começar?</h2>
                    <p>Agora que você já sabe como funciona, clique no botão abaixo para iniciar sua troca! Lembre-se de que a segurança é prioridade, então verifique todos os detalhes e aproveite para conhecer novos jogos e jogadores.</p>
                    <button className={styles.button}>consoles</button>
                </div>

                <div className={styles.commentForm}>
                    <h2>Deixe seu comentário</h2>
                    <div className={styles.formGroup}>
                        <input type="text" placeholder="Usuário" />
                    </div>
                    <div className={styles.formGroup}>
                        <input type="email" placeholder="E-mail" />
                    </div>
                    <div className={styles.formGroup}>
                        <textarea placeholder="Seu comentário..."></textarea>
                    </div>
                    <button className={styles.button}>Enviar Comentário</button>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Sobre;
