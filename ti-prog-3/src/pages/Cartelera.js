import Peliculas from "../components/Peliculas/Peliculas";
import { Component } from "react";
import { Link } from "react-router-dom";
const cartelUrl = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7`;

class Cartelera extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <h2><Link to="/cartelera">Peliculas en cartelera</Link></h2>
        <Peliculas url={cartelUrl} />
      </>
    )
  }
}

export default Cartelera
