// Components
import MovieCard from "../MovieCard/MovieCard";

// Utilities
import requests from "../../../utilities/requests";

const MovieGrid = () => {
    return (
        <>
            <MovieCard
                moviesType="Netflix Originals"
                fetchMoviesURL={requests.fetchNetflixOriginals}
                isCardPoster={true}
            />
            <MovieCard
                moviesType="Trending Now"
                fetchMoviesURL={requests.fetchTrending}
            />
            <MovieCard
                moviesType="Top Rated"
                fetchMoviesURL={requests.fetchTopRatedMovies}
            />
            <MovieCard
                moviesType="Action Movies"
                fetchMoviesURL={requests.fetchActionMovies}
            />
            <MovieCard
                moviesType="Comedy Movies"
                fetchMoviesURL={requests.fetchComedyMovies}
            />
            <MovieCard
                moviesType="Horror Movies"
                fetchMoviesURL={requests.fetchHorrorMovies}
            />
            <MovieCard
                moviesType="Romance Movies"
                fetchMoviesURL={requests.fetchRomanceMovies}
            />
            <MovieCard
                moviesType="TV Shows"
                fetchMoviesURL={requests.fetchTvShow}
            />
            <MovieCard
                moviesType="Documentaries"
                fetchMoviesURL={requests.fetchDocumentaries}
            />
        </>
    );
};

export default MovieGrid;
