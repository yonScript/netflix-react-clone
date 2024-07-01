/* eslint-disable react/prop-types */

import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";

// Context
import { useMovieContext } from "../../Context/MovieContext";

// Utilities
import tmdb from "../../../utilities/tmdb";

// Style
import "./MovieCard.css";

const MovieCard = ({ moviesType, fetchMoviesURL, isCardPoster }) => {
    const [movies, setMovies] = useState([]);
    const { setCurrentMovie } = useMovieContext();
    const cardsRef = useRef();

    const handleWheel = useCallback((event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }, []);

    useEffect(() => {
        const currentCardsRef = cardsRef.current;
        currentCardsRef.addEventListener("wheel", handleWheel);

        return () => {
            currentCardsRef.removeEventListener("wheel", handleWheel);
        };
    }, [handleWheel]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await tmdb.get(fetchMoviesURL);
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, [fetchMoviesURL]);

    const baseImgURL = "https://image.tmdb.org/t/p/w500";

    const handleMovieClick = (movie) => {
        setCurrentMovie(movie);
    };

    return (
        <div
            className={`movies-grid ${
                isCardPoster ? "poster-movies-grid" : ""
            }`}
        >
            <div className="movies-type">
                <p>{moviesType}</p>
            </div>
            <div className="movie-cards" ref={cardsRef}>
                {movies.map((movie) => (
                    <Link
                        key={movie.id}
                        to={`/player/${movie.id}`}
                        className="movie-card"
                        onClick={() => handleMovieClick(movie)}
                    >
                        <img
                            src={`${baseImgURL}${
                                isCardPoster
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            alt={movie.original_name || movie.title}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MovieCard;
