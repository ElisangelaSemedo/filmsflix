import { useEffect, useState} from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function Favoritos() {
    const [films, setFilms] = useState([]);

    useEffect(() =>{

        const myList = localStorage.getItem('@primeflix');
        setFilms(JSON.parse(myList) || [])

    }, [])

    function suppriFilm(id){
        const filtrerFilms = films.filter((item) => {
            return (item.id !== id)
        })

        setFilms(filtrerFilms);
        localStorage.setItem('@primeflix', JSON.stringify(filtrerFilms));
        toast.success("LE FILM A ÉTÉ SUPRIMÉ AVEC SUCCÈS!")
    }

    return(
        <div className='mes-films'>
            <h1>Mes films</h1>

            {films.length === 0 && <span>Vous n'avez aucun film enregistré :( </span>}

            <ul>
                {films.map((item) =>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>


                            <div>
                                <Link to={`/filme/${item.id}`}>Voir infos</Link>
                                <button onClick={() => suppriFilm(item.id) }>Supprimer</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;