import Pelicula from '../Pelicula/Pelicula'

const Peliculas = ({movies}) => {
  return (
    <div>
      {movies.map(movie => <Pelicula movie= {movie}/>)}
    </div>
  )
}

export default Peliculas

