/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Utilities
import tmdb from "../../utilities/tmdb";

// Context
import { useMovieContext } from "../../components/Context/MovieContext";

// Style
import "./Player.css";

// Asserts
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import netflix_spinner from "../../assets/netflix_spinner.gif";

const Player = () => {
    const [trailerUrl, setTrailerUrl] = useState("");
    const [moviesDetail, setMoviesDetail] = useState({});
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchMoviesDetail = async () => {
            try {
                const response = await tmdb.get(`/movie/${id}/videos`);

                const trailers = response.data.results.filter(
                    (video) =>
                        video.type === "Trailer" && video.site === "YouTube"
                );

                setTrailerUrl(
                    `https://www.youtube.com/embed/${trailers[0]?.key}`
                );

                setMoviesDetail(response.data.results[0]);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMoviesDetail();
    }, [id]);

    if (loading) {
        return (
            <div className="spinner-icon">
                <img src={netflix_spinner} alt="Play Icon" />
            </div>
        );
    }

    if (!trailerUrl && !moviesDetail) {
        return (
            <div>
                <p>No trailer available</p>
            </div>
        );
    }
    
    const { currentMovie } = useMovieContext();

    return (
        <div className="player">
            <div className="back-icon">
                <img
                    onClick={() => navigate("/")}
                    src={back_arrow_icon}
                    alt="Back Arrow Icon"
                />
            </div>

            <div className="trailer">
                <iframe
                    src={trailerUrl}
                    allowFullScreen
                    title="Trailer"
                ></iframe>
            </div>

            <div className="movie-info">
                <div className="movie-title">
                    {currentMovie && (
                        <p>
                            Movie title:
                            <span>
                                {currentMovie.original_name ||
                                    currentMovie.title}
                            </span>
                        </p>
                    )}
                </div>

                <div className="movie-published-date">
                    <p>
                        Published at:
                        <span>
                            {moviesDetail.published_at
                                ? new Date(
                                      moviesDetail.published_at
                                  ).toLocaleDateString()
                                : "Unknown date"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Player;
