import { Link } from 'react-router-dom';
import './erreur.css';

function Erreur (){
    return(
        <div className='not-found'>
            <h1>404</h1>
            <h2>Page non trouvée!</h2>
            <Link to="/">Voir tous les films!</Link>
        </div>
    )
}

export default Erreur;