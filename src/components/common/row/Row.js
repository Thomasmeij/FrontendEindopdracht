import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import "./Row.css";

const base_imgUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    //wanneer de pagina geladen wordt of de regel verschijnt op het scherm,
    // run dit stukje code en run het eenmalig

    useEffect(() => {
        async function fetchData(){
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
            } catch (e){
                console.log("Something went wrong", e);
                console.error(e)
            }
        }
        fetchData();
    }, [fetchUrl] );


    return (
        <div className= "row" data-testid="resolved">
            <h2> {title} </h2>

            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key= {movie.id}
                        className={ `row__poster ${isLargeRow && "row__largePoster"}`}
                        src={`${base_imgUrl}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row