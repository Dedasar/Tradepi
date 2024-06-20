import Banner from "../../components/Banner";
import Container from "../../components/Container"
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <>   
    <Header/>   
    <Banner imagem="mk"/>
    <Container>
    <h2>Jogos em alta</h2>
    </Container>
    
    <Footer/>
    </>
  );
}

export default Home;
