import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard';

import './MoviesGrid.css'

// constantes abaixo que serão a CHAVE DA API e a URL DA API quando estamos usando o VITE
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

// useState[] = começa com um array vazio pq é uma lista
// cont get , precio criar uma funçao para chamar eles via API. Onde essa função é assincrona pois vai fazer a requisição esperando uma url como paramentro(sendo a URL da api )
// const data = await res.json() *recebo os daods, porem o transformo em um array em javascript atraves do .json
// toda vez que eu carrego a minha pagina eu preciso chamar a const getTopRatedMovies, para isso eu utilizo do hook useEffect (que me possibilita executar uma função em alguns estagios da minha aplicação), que sera baseado em um array dependencia[] 

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const getTopRatedMovies = async (url) => {
      const res = await fetch(url)
      const data = await res.json()

      setTopMovies(data.results);
  }
  useEffect(() =>
  {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, [])

  return (
    <div className='container'>
      <h2 className='txt'>Projeto de estudos ReactJS + VITE + API disponibilizada pela TMDB.</h2>
      <p className='txtp'>pesquise os filmes que você ama e veja mais detalhes sobre eles....</p>
     <h2 className="title">top 20 Melhores Filmes segundo TMDB:</h2>
     <div className='movies-container'>
      {topMovies.length === 0 && <p>Carregando...</p>}
       {topMovies.length > 0 && 
        topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} /> )}
     </div>
    </div>
  )
}

export default Home