import { Link } from "react-router-dom";
import HomeMovies from "../components/HomeMovies/HomeMovies";
import SearchForm from "../components/SearchForm/SearchForm";

const Home = (props) => {
    return (
        <>
            <SearchForm history={props.history} />

            <Link to="/populares"><h2>Peliculas populares</h2></Link>
            <HomeMovies url={`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7`}></HomeMovies>
            <div className="todas">
                <Link to="/populares"><button className="boton_todas">Ver todas</button></Link>
            </div>

            <Link to="/cartelera"><h2>Peliculas en cartelera</h2></Link>
            <HomeMovies url={`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7`}></HomeMovies>
            <div className="todas">
                <Link to="/cartelera"><button className="boton_todas">Ver todas</button></Link>
            </div>
        </>
    );
};

export default Home;