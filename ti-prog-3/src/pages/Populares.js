import Peliculas from "../components/Peliculas/Peliculas";
import { Component } from "react";
import { Link } from "react-router-dom";
const popularesUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7`;

class Populares extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
      <h2 className="peliculasPopulares">
        <Link to="/populares">Peliculas populares </Link>
      </h2>
      <Peliculas url={popularesUrl}></Peliculas>
      </>
    )
}
}

export default Populares

