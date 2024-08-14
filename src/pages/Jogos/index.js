import React, { useState } from "react"; // Importação do useState para gerenciamento de estado
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "../../pages/Pesquisa/Pesquisa.module.css"; // Verifique o caminho do arquivo CSS
import lupaImg from "../../components/imagens/lupa.png";

function Jogos() {
  const [query, setQuery] = useState(""); // Definindo o estado 'query'

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o envio do formulário
    console.log("Formulário enviado com a consulta:", query);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value); // Atualizando o estado 'query'
  };

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
      </Container>
      <Footer />
    </>
  );
}

export default Jogos;
