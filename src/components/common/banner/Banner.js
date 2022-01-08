import React, {useState, useEffect} from "react";
import axios from "../../../axios";
import requests from "../../../request";
import "./Banner.css"

const base_imgUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try {
                const request = await axios.get(requests.fetchPopular);
                setMovie(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length - 1)]
                );
            } catch (e) {
                console.log("Something went wrong", e);
                console.error(e)
            }
        }
        fetchData();
    }, []);

    //@Todo misschien limit de overview tot maximaal aantal woorden.
    // console.log("wat geeft de movie in de banner: ", movie);

    return (
        <header className="banner"
        style = {{
            backgroundSize: "cover",
            backgroundImage: `url("${base_imgUrl}${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner__content">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                {/*    misschien 2 buttons*/}
                <div className= "banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My list</button>
                </div>
                <h3 className="banner__description">
                    {movie?.overview}
                </h3>
            </div>

            <div className="banner__fadeBottom"> </div>
        </header>
    )
}

export default Banner;