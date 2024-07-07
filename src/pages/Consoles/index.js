import React, { useState } from "react";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Consoles() {
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);
  const [marcasSelecionadas, setMarcasSelecionadas] = useState([]);

  //ESTA EM UM ARRAY SÓ PARA DEMONSTRAR, DEVE MIGRAR PARA O BANCO DE DADOS
  const categorias = [
    "Console Seminovos",
    "Consoles",
    "NINTENDO",
    "PLAYSTATION",
    "RETRÔ",
    "XBOX"
  ];

  //ESTA EM UM ARRAY SÓ PARA DEMONSTRAR, DEVE MIGRAR PARA O BANCO DE DADOS
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
    // *************IMPLEMENTAR categoriasSelecionadas e marcasSelecionadas ****************************
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
        <div>
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
        <div>
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
        <button onClick={handleFiltrar}>Filtrar</button>
        <button onClick={handleLimparFiltro}>Limpar Filtro</button>
      </Container>
      <Footer />
    </>
  );
}

export default Consoles;
