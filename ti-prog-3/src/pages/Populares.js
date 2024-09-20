import Peliculas from "../components/Peliculas/Peliculas";
const popularesUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7`;

const Populares = () => {
  return (
    <>
      <h2>Peliculas Populares</h2>
      <Peliculas url= {popularesUrl}/>
    </>
  )
}

export default Populares
