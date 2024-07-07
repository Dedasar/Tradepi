import React, { useState } from 'react';
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Pesquisa() {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para lidar com a pesquisa
        console.log('Pesquisa submetida:', query);
    };

    return (
        <>   
            <Header/>   
            <Banner imagem="mk"/>
            <Container>
                <form onSubmit={handleFormSubmit}>
                    <input 
                        type="text" 
                        value={query} 
                        onChange={handleInputChange} 
                        placeholder="Digite sua pesquisa"
                    />
                    <button type="submit">Pesquisar</button>
                </form>
            </Container>    
            <Footer/>
        </>
    );    
}

export default Pesquisa;
