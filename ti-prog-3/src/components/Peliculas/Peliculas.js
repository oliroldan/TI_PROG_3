import {Component} from 'react'

class Peliculas extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>Peliculas</div>
    )
  }
  
}

export default Peliculas
/* import Pelicula from '../Pelicula/Pelicula'

const Peliculas = ({movies}) => {
  return (
    <div>
      {movies.map(movie => <Pelicula movie= {movie}/>)}
    </div>
  )
}

export default Peliculas

 */