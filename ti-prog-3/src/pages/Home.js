import Peliculas from "../components/Peliculas/Peliculas";
const popularesUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7`;
const cartelUrl = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7`;

const Home = () => {
    return (
        <>
            <h2>Peliculas Populares</h2>
            <Peliculas url= {popularesUrl}/>

            <h2>Peliculas en cartelera</h2>
            <Peliculas url= {cartelUrl}/>
        </>
    );
};

export default Home;