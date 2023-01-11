import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Film from './pages/Film';
import Favoritos from './pages/Favoritos';

import Erreur from './pages/Erreur';

import Header from './components/Header';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/filme/:id" element={ <Film/> } />
                <Route path='/favoritos' element={ <Favoritos/>} />
                

                <Route path="*" element={ <Erreur/> } />
            </Routes>
        
        </BrowserRouter>

    );
}

export default RoutesApp;

