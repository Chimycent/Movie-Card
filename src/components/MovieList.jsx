import { useState } from "react"
import MovieCard from "./MovieCard"

const MovieList = ( { movies } ) => {

    const [filteredMovies, setFilteredMovies] = useState(movies);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleFilter = () => {
    const filtered = movies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        (!filterRating || movie.rating >= filterRating)
      );
    });
    setFilteredMovies(filtered);
  };

  return (
     <div>
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRating}
        onChange={(e) => setFilterRating(parseFloat(e.target.value))}
      />
      <button onClick={handleFilter}>Apply Filter</button>
      {filteredMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};


export default MovieList