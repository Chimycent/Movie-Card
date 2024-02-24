import React, { useState } from 'react';
import { render } from 'react-dom';
import Filter from './Filter';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Avatar', 
    description: 'Description of Movie 1', 
    posterURL: 'https://res.cloudinary.com/dhwqlht1d/image/upload/v1708761436/movieList/ava_u9qahd.jpg', 
    rating: 3.5 },

    { title: 'Wing Women', 
    description: 'Description of Movie 2', 
    posterURL: 'https://res.cloudinary.com/dhwqlht1d/image/upload/v1708761445/movieList/wing_wom_u3fihb.jpg', 
    rating: 4.8 },

    { title: 'A Tribe Called Judah', 
    description: 'Description of Movie 3', 
    posterURL: 'https://res.cloudinary.com/dhwqlht1d/image/upload/v1708761429/movieList/judah_cd35ig.jpg', 
    rating: 4.5 },

    { title: 'Hijack', 
    description: 'Description of Movie 4', 
    posterURL: 'https://res.cloudinary.com/dhwqlht1d/image/upload/v1708761419/movieList/hijack_okgugx.jpg', 
    rating: 4.8 },

    { title: 'The Pope Exorcist', 
    description: 'Description of Movie 5', 
    posterURL: 'https://res.cloudinary.com/dhwqlht1d/image/upload/v1708761409/movieList/pope_exorcist_taocud.jpg', 
    rating: 5.0 },

    { title: 'Wolf Warrior', 
    description: 'Description of Movie 6', 
    posterURL: 'https://res.cloudinary.com/dhwqlht1d/image/upload/v1708761386/movieList/wolf_lri47g.jpg', 
    rating: 4.8 },

    { title: 'Athena', 
    description: 'Description of Movie 7', 
    posterURL: 'https://res.cloudinary.com/dhwqlht1d/image/upload/v1708761402/movieList/athena_hzk6lw.jpg', 
    rating: 4.3 },

    { title: 'Blind Spot', 
    description: 'Description of Movie 8', 
    posterURL: 'https://res.cloudinary.com/dhwqlht1d/image/upload/v1708761380/movieList/blindspot_rnapbq.jpg', 
    rating: 4.3 },

    { title: 'The Woman King', 
    description: 'Description of Movie 9', 
    posterURL: 'https://res.cloudinary.com/dhwqlht1d/image/upload/v1708761393/movieList/the_woman_king_osjyx7.jpg', 
    rating: 4.5 },

    { title: 'Legend Of Ravaging Dynasty', 
    description: 'Description of Movie 10', 
    posterURL: 'https://res.cloudinary.com/dhwqlht1d/image/upload/v1708761371/movieList/LORD_fluaur.jpg', 
    rating: 4.1 },
  ]);

  const handleFilter = (filterCriteria) => {
  };

  return (
    <div className='text-center'>
      <h1 className='uppercase text-xl font-bold cursor-pointer mt-3 text-blue-400'> 
      <span className='hover:text-fuchsia-800'>Movie 
      <span className='hover:text-red-700'> Management </span> 
      <span> Application </span>
      </span> 
      </h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={movies} />
    </div>
  );
};
export default App;