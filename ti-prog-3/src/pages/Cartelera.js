import Peliculas from "../components/Peliculas/Peliculas";
import { Component } from "react";
import { Link } from "react-router-dom";
//const cartelUrl = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7`;

class Cartelera extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: [], // el le puso movie
      peliculasFiltrado: [],
      filterValue: " ",
      actualPage: 1
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${this.state.actualPage}&api_key=6d74e7317f9a497bee146a3eed86d6f7`)
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            info: data.results,
            peliculasFiltrado: data.results,
            actualPage: this.state.actualPage + 1
          })
      })
      .catch(error => console.error(error));
  }

  handleFilterChange(e) {
    const userValue = e.target.value

    this.setState({
      filterValue: userValue,
      peliculasFiltrado: this.state.info.filter(info => info.title.toLowerCase().includes(userValue.toLowerCase()))
    })
  }

  handleLoadMore() {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${this.state.actualPage}&api_key=6d74e7317f9a497bee146a3eed86d6f7`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          info: this.state.info.concat(data.results),
          peliculasFiltrado: this.state.peliculasFiltrado.concat(data.results),
          actualPage: this.state.actualPage + 1
        }));
  }

  render() {
    return (
      <>
        <h2 className="peliculasCartelera">
          <Link to="/cartelera">Peliculas en cartelera</Link>
        </h2>

        <div>
          <input type="text" onChange={(e) => this.handleFilterChange(e)} placeholder="Filtrar peliculas" value={this.state.filterValue} />
          <Peliculas info={this.state.peliculasFiltrado} />
        </div>

        <div>
          {/* {this.state.peliculasFiltrado.length === 0 && DEJAR COMENTADO HASTA QUE ANDE EL FILTER!!!*/}
          <button onClick={() => this.handleLoadMore()}>CARGAR MAS</button>
        </div>
      </>
    )
  }
}

export default Cartelera
