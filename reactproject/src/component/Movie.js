import { useEffect, useState } from 'react';
import Hero from './hero';
import { useParams } from 'react-router-dom';

const Movie =() => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [ isLoading, setIsLoading ] = useState(true)


    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=016acae896b1141ca2b291f75736549f&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setTimeout( () => {

          setMovieDetails(data)
          setIsLoading(false)
        }, 2000)
      })
    }, [id])

    function renderMovieDetails() {
      if(isLoading) {
        return <Hero text="Loading..." />
      }
      if(movieDetails) {
        return <Hero text={movieDetails.original_title} />
      }
    }

    return renderMovieDetails()
  };
  export default Movie;