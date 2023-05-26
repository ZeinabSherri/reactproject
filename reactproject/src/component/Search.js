import Hero from './hero';
import { Link } from 'react-router-dom';

//TMDB API key = 016acae896b1141ca2b291f75736549f

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.logo_path}`
    const detailUrl = `/movies/${movie.id}`
    return(
        <div className='col-lg-4 col-md-3 col-2 my-4'>
        <div className="card" >
  <img src={posterUrl} className="card-img-top" alt={movie.name}/>
  <div className="card-body">
    <h5 className="card-title">{movie.name}</h5>
    <Link to={detailUrl} className="btn btn-primary">Show Detials</Link>
  </div>
</div>
</div>
    )
}

const Search =({ keyword, searchResults }) => {
    const title = `you are searching for ${keyword}`

    const resultHtml = searchResults.length > 0 ? 
      searchResults.map((obj, i) => {
         return <MovieCard movie={obj} key = {i}/>
      }) : 
      <p>No results found</p>;

    return(
      <>
      <Hero text={title}/>
      {resultHtml && 
      <div className='container'>
        <div className='row'>
            {resultHtml}
        </div>
      </div>
}
      </>
    )
}

export default Search;
