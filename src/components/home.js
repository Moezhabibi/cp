import { Route, Routes } from "react-router-dom"
import { AddMovie } from "./Addmovie"
import { Filter } from "./Filter"
import { Moviedet } from "./Moviedet"
import { MovieList } from "./MovieList"

export const Home=({movies,setMovies,searchM,setSearchM,rateM,setRateM,movie,setMovie})=>{
    return(
        <>
         <AddMovie movies={movies} setMovies={setMovies}/>
         <Filter setSearchM={setSearchM} setRateM={setRateM} searchM={searchM} rateM={rateM}/>
         <MovieList movies={movies} setMovies={setMovies} searchM={searchM} rateM={rateM}/>
         {/* <Routes>
        
         </Routes> */}
        </>
    )
}