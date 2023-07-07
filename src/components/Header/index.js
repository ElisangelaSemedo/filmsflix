import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
           <Link className='logo' to="/">Films Flix</Link>
           <Link className='favoritos' to='/favoritos'>Mes Films</Link>


        </header>
    );
}

export default Header;