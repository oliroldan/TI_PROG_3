import Peliculas from "../components/Peliculas/Peliculas";
const cartelUrl = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7`;

const Cartelera = () => {
  return (
    <>
      <h2>Peliculas en cartelera</h2>
      <Peliculas url= {cartelUrl}/>
    </>
  )
}

export default Cartelera
