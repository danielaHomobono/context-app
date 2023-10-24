import React, {Children, createContext} from "react";
import initialMovies from "../consts/initialMovies";


const MovieContext= createContext();

const MoviesProvider = ({children})=> {
    const data ={movies:initialMovies}
    return(
        <MovieContext.Provider value={data}>
            {children}
        </MovieContext.Provider>
    )
}


export {MoviesProvider}
export default MovieContext;
