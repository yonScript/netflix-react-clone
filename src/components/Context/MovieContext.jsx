/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [currentMovie, setCurrentMovie] = useState(null);

    return (
        <MovieContext.Provider value={{ currentMovie, setCurrentMovie }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = () => {
    return useContext(MovieContext);
};
