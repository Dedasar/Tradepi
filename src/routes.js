import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Sobre from "./pages/Sobre";
import Jogos from "./pages/Jogos";
import Pesquisa from "./pages/Pesquisa";
import Consoles from "./pages/Consoles";
import RecuperaSenha from "./pages/RecuperaSenha";


function AppRoutes() {

    return (
        <BrowserRouter>
        <Routes>
        <Route path='/' element={ <Home /> }> </Route>        
        <Route path='/jogos' element={ <Jogos/> }> </Route>
        <Route path='/pesquisa' element={ <Pesquisa/> }> </Route>
        <Route path='/consoles' element={ <Consoles/> }> </Route>
        <Route path='/cadastro' element={ <Cadastro/> }> </Route>                    
        <Route path='/login' element={ <Login/> }> </Route>        
        <Route path='/sobre' element={ <Sobre /> }> </Route>        
        <Route path='/recuperaSenha' element={ <RecuperaSenha /> }> </Route>        
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
