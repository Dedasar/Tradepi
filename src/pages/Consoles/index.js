import React, { useState } from "react";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Console.module.css";

function Consoles() {
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);
  const [marcasSelecionadas, setMarcasSelecionadas] = useState([]);

  const categorias = [
    "Console Seminovos",
    "Consoles",
    "NINTENDO",
    "PLAYSTATION",
    "RETRÔ",
    "XBOX"
  ];

  const marcas = ["Nintendo", "Microsoft", "Sony"];

  const handleCategoriaChange = (categoria) => {
    if (categoriasSelecionadas.includes(categoria)) {
      setCategoriasSelecionadas(
        categoriasSelecionadas.filter((cat) => cat !== categoria)
      );
    } else {
      setCategoriasSelecionadas([...categoriasSelecionadas, categoria]);
    }
  };

  const handleMarcaChange = (marca) => {
    if (marcasSelecionadas.includes(marca)) {
      setMarcasSelecionadas(marcasSelecionadas.filter((m) => m !== marca));
    } else {
      setMarcasSelecionadas([...marcasSelecionadas, marca]);
    }
  };

  const handleFiltrar = () => {
    // Implementar lógica para filtrar com categoriasSelecionadas e marcasSelecionadas
    console.log("Filtrar");
  };

  const handleLimparFiltro = () => {
    setCategoriasSelecionadas([]);
    setMarcasSelecionadas([]);
    console.log("Limpar filtro");
  };

  return (
    <>
      <Header />
      <Banner imagem="mk" />
      <Container>
        <h2>CONSOLES</h2>
        <div className={styles.categorias}>
          <h3>CATEGORIAS</h3>
          {categorias.map((categoria, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={categoriasSelecionadas.includes(categoria)}
                onChange={() => handleCategoriaChange(categoria)}
              />
              {categoria}
            </label>
          ))}
        </div>
        <div className={styles.marcas}>
          <h3>MARCA</h3>
          {marcas.map((marca, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={marcasSelecionadas.includes(marca)}
                onChange={() => handleMarcaChange(marca)}
              />
              {marca}
            </label>
          ))}
        </div>
        <div className={styles.botoes}>
          <button className={styles["botao-filtrar"]} onClick={handleFiltrar}>
            Filtrar
          </button>
          <button
            className={styles["botao-limpar"]}
            onClick={handleLimparFiltro}
          >
            Limpar Filtro
          </button>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Consoles;
