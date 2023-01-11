import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

// URL da Api: https://api.themoviedb.org/3/movie/now_playing?api_key=69ae5ab75100b55feb1a3d3fe7c7040a

function Home(){
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{

        async function loadFilms(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key:"69ae5ab75100b55feb1a3d3fe7c7040a",
                    language: "fr",
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0, 10));
            setFilms(response.data.results.slice(0, 15))
            setLoading(false);

        }

        loadFilms();
    }, [])

    if(loading){
        return(
            <div className='loading'>
                <h2>Chargement en cours...</h2>
            </div>
        )
    }

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {films.map((film) =>{
                    return(
                        <article key={film.id}>
                            <strong>{film.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title}/>
                            <Link to={`/filme/${film.id}`}>Voir détails</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;