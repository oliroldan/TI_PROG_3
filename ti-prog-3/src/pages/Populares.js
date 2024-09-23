import Peliculas from "../components/Peliculas/Peliculas";
import { Component } from "react";
import { Link } from "react-router-dom";
const popularesUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7`;

class Populares extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: [], // el le puso movie
      peliculasFiltrado: [],
      filterValue: '' 
    }
  }
  componentDidMount() {
    fetch(popularesUrl)
      .then(response => response.json())
      .then((data)   => {
        console.log(data.results, 'pelis aca')
        this.setState(
          {
            info: data.results,
            peliculasFiltrado: data.results
          }
        )
      } )
      .catch(error => console.error(error));
  }

  handleFilterChange(e) {
    const userValue = e.target.value

    this.setState({
      filterValue: userValue, 
      peliculasFiltrado: this.state.info.filter(info => info.title.toLowerCase().includes(userValue.toLowerCase()))
    })
  }
  render() {
    return (
      <>
        <h2 className="peliculasPopulares">
          <Link to="/populares">Peliculas populares </Link>
        </h2>
        <Peliculas pelicula={this.state.info} />
        <input type="text" onChange={(e) => this.handleFilterChange(e)}
          placeholder="Filtrar peliculas" value={this.state.filterValue} />
{/*         <Peliculas url={popularesUrl}></Peliculas>
 */}        <Peliculas info={this.state.peliculasFiltrado}/>


      </>
    )
  }
}

export default Populares

