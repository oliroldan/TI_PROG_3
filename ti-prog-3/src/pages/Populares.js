import Peliculas from "../components/Peliculas/Peliculas";
import { Component } from "react";
import { Link } from "react-router-dom";

class Populares extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: [],
      peliculasFiltrado: [],
      filterValue: '',
      actualPage: 1,
      isLoading: true,
      isLoadingCargarMas: false
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })

    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.state.actualPage}&api_key=6d74e7317f9a497bee146a3eed86d6f7`)
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            info: data.results,
            peliculasFiltrado: data.results,
            actualPage: this.state.actualPage + 1,
            isLoading: false
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
    this.setState({
      isLoadingCargarMas: true
    })

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=56c25df0bc04ec0dd18325a8ea74e10c&language=en-US&page=${this.state.actualPage}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          info: this.state.info.concat(data.results),
          peliculasFiltrado: this.state.peliculasFiltrado.concat(data.results),
          actualPage: this.state.actualPage + 1,
          isLoadingCargarMas: false
        }));
  }

  handleResetFilter() {
    this.setState({
      filterValue: '',
      peliculasFiltrado: this.state.info
    })
  }

  render() {
    return (
      <>
        {this.state.isLoading ? <p>Cargando...</p> : <section>
          <h2 className="peliculasPopulares">
            <Link to="/populares">Peliculas populares </Link>
          </h2>

          <div>
            <input className="filtrar" type="text" onChange={(e) => this.handleFilterChange(e)} placeholder="Filtrar peliculas" value={this.state.filterValue} />
            <button className="boton_filtro" onClick={() => this.handleResetFilter()}>Borrar filtro</button>
            <Peliculas info={this.state.peliculasFiltrado} />
          </div>

          <div className="mas">
            {this.state.filterValue === '' &&
              <button className="boton_mas" onClick={() => this.handleLoadMore()} disabled={this.state.isLoadingCargarMas}>
                {this.state.isLoadingCargarMas ? "Cargando..." : "CARGAR MAS"} </button>}
          </div>
        </section>}

      </>
    )
  }
}

export default Populares