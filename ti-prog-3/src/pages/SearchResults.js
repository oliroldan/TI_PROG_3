import { Component } from 'react'
import Peliculas from '../components/Peliculas/Peliculas'

export class SearchResults extends Component {
  constructor(props) {
    super(props)

    this.state = {
      info: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=6d74e7317f9a497bee146a3eed86d6f7&query=${this.props.location.state.query}&include_adult=false&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          info: data.results,
          isLoading: false
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (

      <>
          {!this.state.isLoading ? (
              <div>
              <h2>Resultados de búsqueda: {this.props.location.state.query}</h2>
              <Peliculas info={this.state.info} />
              </div>) : (<p>Cargando...</p>)}
      </>
    )
  }
}

export default SearchResults
