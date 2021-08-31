import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getGenresList } from "../../services/api"
import {MovieItem} from '../MovieItem/MovieItem';
import { List } from './MovieList.styles'

export function MovieList({ movies }) {
  const [genres, setGenres] = useState(null);
  useEffect(() => {
      async function GenresList() {
  try {
      const genres = await getGenresList();
      setGenres(genres);
      
    } catch (error) {
      console.log(error);
    }
      }
    GenresList();
    }, [])
  return (
    <List>
      {genres && movies.map(({id, poster_path, title, vote_average, genre_ids}) => (
          <MovieItem
              key={id}
              id={id}
              posterPath={poster_path}
              title={title}
              rating={vote_average}
              genres={genres.filter((genre) => genre_ids.includes(genre.id))
                  .slice(0, 3).map((genre) => genre.name).join(', ')} />
      ))}
    </List>
  )
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}