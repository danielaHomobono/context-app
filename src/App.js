import React,{useState} from 'react';
import MovieList from './componentes/MovieList';
import Navbar from './componentes/Navbar';
import { UserProvider } from './contexts/userContext';
import { MoviesProvider } from './contexts/MovieContext';




function App() {
 

  

  return (
    <div >
     <UserProvider> 
      <MoviesProvider>
      <Navbar />
      <MovieList />
      </MoviesProvider>     
      </UserProvider>
    </div>
  );
}

export default App;
