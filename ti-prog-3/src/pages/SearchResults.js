import { Component } from 'react'
import Peliculas from '../components/Peliculas/Peliculas'

export class SearchResults extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      isLoading: true
    }
  }

  componentDidMount(){
    this.setState({
      isLoading: true
    })
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=6d74e7317f9a497bee146a3eed86d6f7`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        movies: data.results,
        isLoading: false
      });
    })
    .catch((error) => console.log(error));
  }
  
  render() {
    return (
      
      <>
        SearchResults {this.props.location.state.query}
        {!this.state.isLoading ? (<Peliculas movies= {this.state.movies}/>) : (<p>Loading...</p>)}
      </>
    )
  }
}

export default SearchResults
