import {useEffect, useState} from 'react';
import {useParams, useNavigate, json} from 'react-router-dom';
import './film.css';
import api from '../../services/api';
import { toast } from 'react-toastify';


function Film(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [film, setFilm] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function loadFilm(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key:"69ae5ab75100b55feb1a3d3fe7c7040a",
                    language: "fr",
                }
            })
            .then((response) => {
                setFilm(response.data);
                setLoading(false);
            })
            .catch(() =>{
                console.log("FILM INTROVABLE");
                navigate('/', {reolace: true})
                return;
            })

        }

        loadFilm();


        return() =>{
            console.log("Le composant a été démonté")
        }
    }, [navigate, id])

    function saveFilm(){
        const myList = localStorage.getItem("@primeflix");

        let filmsSaved = JSON.parse(myList) || [];

        const hasFilm = filmsSaved.some((filmSaved) => filmSaved.id == film.id)

        if(hasFilm){
            toast.warn("CE FILM EST DÉJÀ DANS VOTRE LISTE!");
            return;
        }

        filmsSaved.push(film);
        localStorage.setItem("@primeflix", JSON.stringify(filmsSaved));
        toast.success("FILM ENREGISTRÉ AVEC SUCCÈS!")
    }

    if(loading){
        return(
            <div className='film-info'>
                <h1>Chargement des infos du film...</h1>
            </div>
        )
    }

    return(
        <div className='film-info'>
            <h1>{film.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt={film.title}/>
            <h3>Synopsis</h3>
            <span>{film.overview}</span>

            <strong>Evaluation: {film.vote_average} / 10</strong>

            <div className='area-btn'>
            <button onClick={saveFilm}>Enregistrer</button>
            <button>
                <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${film.title} Trailer`}>
                    Trailer
                </a>
            </button>
            </div>
        </div>
    );
}

export default Film;