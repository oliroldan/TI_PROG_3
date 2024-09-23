import Peliculas from "../components/Peliculas/Peliculas";
import { Component } from "react";
import { Link } from "react-router-dom";
const popularesUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7`;

class Populares extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: [],
      peliculasFiltrado: [], 
      filterValue: '' //Aca no se sies un array al quele voy agregando pocisiones o como hacer!
    }
  }
  componentDidMount() {
    fetch(popularesUrl)
      .then(response => response.json())
      .then(data => this.setState(
        { info: data.results }
      ))
      .catch(error => console.error(error));
  }

  handleFilterChange() {
    this.setState({
      peliculasFiltrado: this.state.info.filter(movie => movie.title.includes(this.state.filterValue))
    })
  }
  render() {
    return (
      <>
        <h2 className="peliculasPopulares">
          <Link to="/populares">Peliculas populares </Link>
        </h2>
        <input type="text" onChange={this.handleFilterChange} placeholder="Filtrar peliculas" value={this.state.filterValue}/>
        <Peliculas url={popularesUrl}></Peliculas>


      </>
    )
  }
}

export default Populares

