import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Sobre from "./pages/Sobre";

function AppRoutes() {

    return (
        <BrowserRouter>
        <Routes>
        <Route path='/' element={ <Home /> }> </Route>        
        <Route path='/cadastro' element={ <Cadastro /> }> </Route>        
        <Route path='/login' element={ <Login /> }> </Route>        
        <Route path='/sobre' element={ <Sobre /> }> </Route>        
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
