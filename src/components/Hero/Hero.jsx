import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Utilities
import tmdb from "../../utilities/tmdb";
import requests from "../../utilities/requests";

// Context
import { useMovieContext } from "../Context/MovieContext";

// Style
import "./Hero.css";

// Assets
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";

const truncate = (str, maxLength) => {
    if (!str) return "";

    if (str.length <= maxLength) {
        return str;
    }

    const truncatedStr = str.slice(0, maxLength);
    const lastPeriodIndex = truncatedStr.lastIndexOf(".");

    if (lastPeriodIndex === -1) {
        return truncatedStr + "...";
    }

    return truncatedStr.slice(0, lastPeriodIndex + 1);
};

const Hero = () => {
    const [movie, setMovie] = useState(null);
    const { setCurrentMovie } = useMovieContext();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await tmdb.get(requests.fetchNetflixOriginals);
                const movies = response.data.results;

                if (movies.length > 0) {
                    const randomIndex = Math.floor(
                        Math.random() * movies.length
                    );
                    setMovie(movies[randomIndex]);
                }
            } catch (error) {
                console.error("Failed to fetch Netflix Originals:", error);
            }
        };

        fetchMovie();
    }, []);

    const handlePlayClick = (movie) => {
        setCurrentMovie(movie);
    };

    const bannerImgPath = movie
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : "";

    return (
        <div className="hero">
            {movie && (
                <img
                    src={bannerImgPath}
                    alt={`${movie.original_name || movie.title} Banner`}
                    className="banner-img"
                />
            )}

            <div className="hero-caption">
                <div className="movie-title">
                    <p>{movie?.original_name || movie?.title}</p>
                </div>

                <div className="movie-description">
                    <p>{truncate(movie?.overview, 150)}</p>
                </div>
            </div>

            <div className="hero-buttons">
                {movie && (
                    <Link
                        onClick={handlePlayClick(movie)}
                        to={`/player/${movie.id}`}
                    >
                        <button className="button">
                            <img src={play_icon} alt="Play Icon" />
                            Play
                        </button>
                    </Link>
                )}

                <button className="button dark-button">
                    <img src={info_icon} alt="Info Icon" />
                    More Info
                </button>
            </div>
        </div>
    );
};

export default Hero;
