import Peliculas from "../components/Peliculas/Peliculas";
import { Link } from "react-router-dom";
//import "../components/Navbar/Navbar.css"
const popularesUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7`;

const Populares = () => {
  return (
    <>
      <h2 /* className="peliculasPopulares" */><Link to="/populares">Peliculas populares</Link></h2>
      <Peliculas url= {popularesUrl}/>
    </>
  )
}

export default Populares
