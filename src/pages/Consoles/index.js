import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Console.module.css";
import lupaImg from "../../components/imagens/lupa.png";

import ps4Img from "../../components/consoles/ps4.png";
import xboxImg from "../../components/consoles/xbox one.png";
import switchImg from "../../components/consoles/switch.png";
import xbox360Img from "../../components/consoles/xbox 360.png";
import ps3Img from "../../components/consoles/ps3.png";
import retroImg from "../../components/consoles/retrogame.png";

// Imagens das marcas
import sonyImg from "../../components/consoles/marcas/sony.png";
import microsoftImg from "../../components/consoles/marcas/microsoft.png";
import nintendoImg from "../../components/consoles/marcas/nintendo.png";

// Dados de exemplo para os consoles
const consoleImages = [
  { src: ps4Img, link: "/pagina-console1" },
  { src: xboxImg, link: "/pagina-console2" },
  { src: switchImg, link: "/pagina-console3" },
  { src: xbox360Img, link: "/pagina-console4" },
  { src: ps3Img, link: "/pagina-console5" },
  { src: retroImg, link: "/pagina-console6" }
];

// Dados de exemplo para as marcas
const brandImages = [
  { src: sonyImg, link: "http://link-to-sony.com" },
  { src: microsoftImg, link: "http://link-to-microsoft.com" },
  { src: nintendoImg, link: "http://link-to-nintendo.com" }
];

const ConsoleGrid = () => {
  const navigate = useNavigate();

  const handleConsoleClick = (link) => {
    navigate(link);
  };

  return (
    <div className={styles.consoleGrid}>
      <div className={styles.gridRow}>
        {consoleImages.slice(0, 3).map((console, index) => (
          <div
            key={index}
            className={styles.gridColumn}
            onClick={() => handleConsoleClick(console.link)}
          >
            <img
              src={console.src}
              alt={`Console ${index + 1}`}
              className={styles.consoleImage}
            />
          </div>
        ))}
      </div>
      <div className={styles.gridRow}>
        {consoleImages.slice(3).map((console, index) => (
          <div
            key={index}
            className={styles.gridColumn}
            onClick={() => handleConsoleClick(console.link)}
          >
            <img
              src={console.src}
              alt={`Console ${index + 4}`}
              className={styles.consoleImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Consoles = () => {
  const [query, setQuery] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário enviado com a consulta:", query);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Header />
      <Banner imagem="mk" />
      <Container>
        <div className={styles.consolesContainer}>
          <h2 className={styles.consolesTitle}>Consoles</h2>
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
          <ConsoleGrid />
        </div>
        <h2 className={styles.subTitle}>Marcas</h2>
        <div className={styles.brandImages}>
          {brandImages.map((brand, index) => (
            <a key={index} href={brand.link} className={styles.brandLink} target="_blank" rel="noopener noreferrer">
              <img src={brand.src} alt={`Marca ${index + 1}`} className={styles.brandImage} />
            </a>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Consoles;
