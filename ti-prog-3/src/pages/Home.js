import { Link } from "react-router-dom";
import HomeMovies from "../components/HomeMovies/HomeMovies";

const Home = () => {
    return (
        <>
            <Link to="/populares"><h2>Peliculas populares</h2></Link>
            <HomeMovies url={`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7`}></HomeMovies>
            <Link to="/populares"><button>Ver todas</button></Link>
            <Link to= "/cartelera"><h2>Peliculas en cartelera</h2></Link> 
            <HomeMovies url={`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7`}></HomeMovies>
            <Link to="/cartelera"><button>Ver todas</button></Link> 
        </>
    );
};

export default Home;