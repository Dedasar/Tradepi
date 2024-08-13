import React, { useState } from 'react';
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import lupaImg from "../../components/imagens/lupa.png";

import styles from "./Pesquisa.module.css";

// Importar imagens dos jogos
import game1Img from "../../components/imagens/cod ps4.png";
import game2Img from "../../components/imagens/diablo.png";
import game3Img from "../../components/imagens/elden ring.png";
import game4Img from "../../components/imagens/fc 24.png";
import game5Img from "../../components/imagens/fifa 23.png";
import game6Img from "../../components/imagens/hogwarts.png";
import game7Img from "../../components/imagens/naruto storm.png";
import game8Img from "../../components/imagens/red dead 2.png";
import game9Img from "../../components/imagens/sonic.png";
import game10Img from "../../components/imagens/zelda.png";

// Componente para exibir os cartões de jogos
const GameCards = ({ games }) => (
    <div className={styles.gameCards}>
        {games.map((game, index) => (
            <div key={index} className={styles.gameCard}>
                <img src={game.img} alt={game.title} className={styles.gameImage} />
                <h3>{game.title}</h3>
                <p>{game.description}</p>
            </div>
        ))}
    </div>
);

function Pesquisa() {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Implementar a lógica da pesquisa
        console.log('Pesquisa submetida:', query);
    };

    const mostDesiredGames = [
        { img: game1Img, title: '', description: '' },
        { img: game2Img, title: '', description: '' },
        { img: game3Img, title: '', description: '' },
        { img: game4Img, title: '', description: '' },
        { img: game5Img, title: '', description: '' },
    ];

    const mostTradedGames = [
        { img: game6Img, title: '', description: '' },
        { img: game7Img, title: '', description: '' },
        { img: game8Img, title: '', description: '' },
        { img: game9Img, title: '', description: '' },
        { img: game10Img, title: '', description: '' },
    ];

    return (
        <>
            <Header />
            <Banner imagem="mk" />
            <Container>
                <form className={styles.searchBar} onSubmit={handleFormSubmit}>
                    <label htmlFor="gameSearch" className={styles.visuallyHidden}>Pesquisar</label>
                    <input
                        type="text"
                        id="gameSearch"
                        className={styles.searchInput}
                        placeholder="Digite o nome do jogo que deseja"
                        value={query}
                        onChange={handleInputChange}
                    />
                    <button type="submit" aria-label="Pesquisar">
                        <img
                            src={lupaImg}
                            alt="Ícone de pesquisa"
                            className={styles.searchIcon}
                        />
                    </button>
                </form>

                <h2 className={styles.mostDesire}>Jogos mais desejados</h2>
                <GameCards games={mostDesiredGames} />

                <h2 className={styles.mostTrade}>Jogos mais trocados</h2>
                <GameCards games={mostTradedGames} />
            </Container>
            <Footer />
        </>
    );
}

export default Pesquisa;
