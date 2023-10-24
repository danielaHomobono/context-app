import React ,{createContext, useState} from 'react';
import initialMovies from '../consts/initialMovies';

const UserContext = createContext();
const initialUser = {id:1, name: 'dani', favoriteMovies:[1,2]}
const UserProvider = ({children})=>{
    const [user, setUser]= useState(initialUser);
    const login = ()=> {
        setUser(initialUser);
    }

    const logout = ()=> {
        setUser(null);
    }
    const toggleFavoriteMovieToUser = (movieId)=>{

        const isFavorite = user.favoriteMovies.includes(movieId)
        const favoriteMovies = isFavorite
        ?[user.favoriteMovies.filter(favMovId => favMovId !== movieId)]//eliminarla
        :[...user.favoriteMovies, movieId]//agregarla
        setUser({
            ...user,
            favoriteMovies
        })

    }
    const data = {user, login, logout,toggleFavoriteMovieToUser}
return(
<UserContext.Provider value={data}>
{children}
</UserContext.Provider>
)

}
export {UserProvider}
export default UserContext;