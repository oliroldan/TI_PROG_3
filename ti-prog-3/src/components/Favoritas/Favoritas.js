import React, { Component } from "react";
import "./Favoritas.css"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

class Favoritas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            isLoading: true
        };
    }

    componentDidMount() {

        this.setState({
            isLoading: true
        })

        const storage = localStorage.getItem('favoritos');
        if (storage !== null) {
            const parsedStorage = JSON.parse(storage);
            Promise.all(
                parsedStorage.map((id) =>
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6d74e7317f9a497bee146a3eed86d6f7`)
                        .then((response) => response.json())))
                .then((data) => {
                    this.setState({
                        peliculas: data
                    })
                }

                )
        }

        this.setState({
            isLoading: false
        })
    }

    agregarFavorito() {
        const storage = localStorage.getItem('favoritos')

        if (storage !== null) {
            const parsedArray = JSON.parse(storage)
            parsedArray.push(this.props.pelicula.id)
            const stringArray = JSON.stringify(parsedArray)
            localStorage.setItem('favoritos', stringArray)
        } else {
            const primerPelicula = [this.props.pelicula.id]
            const stringArray = JSON.stringify(primerPelicula)
            localStorage.setItem('favoritos', stringArray)
        }
        this.setState({
            esFavorito: true
        })
    }

    sacarFavorito(idPelicula) {
        const storage = localStorage.getItem('favoritos');

        if (storage) {
            const parsedArray = JSON.parse(storage);
            const favoritosRestantes = parsedArray.filter(id => id !== idPelicula);
            const stringArray = JSON.stringify(favoritosRestantes);
            localStorage.setItem('favoritos', stringArray);

            if (favoritosRestantes.length > 0) {
                Promise.all(
                    favoritosRestantes.map(id =>
                        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6d74e7317f9a497bee146a3eed86d6f7`)
                            .then(response => response.json())
                    )
                ).then(data => {
                    this.setState({
                        peliculas: data
                    });
                });
            } else {
                this.setState({
                    peliculas: []
                });
            }
        }
    }


    render() {
        const { peliculas } = this.state;
        return (
            <div>
                {this.state.isLoading ? (
                    <h2>Cargando...</h2>
                ) : (
                    <ul className="lista">
                        {peliculas.map((pelicula) => (
                            <li key={pelicula.id}>
                                <article className="pelicula_fav">
                                    <img src={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}`} alt={pelicula.title} />

                                    <Link to={`pelicula/id/${pelicula.id}`}><h2>{pelicula.title}</h2></Link>

                                    <p><Link to={`/pelicula/id/${pelicula.id}`}>Ir a detalle</Link></p>

                                    <div className="favoritos">
                                        <button onClick={() => this.sacarFavorito(pelicula.id)}>
                                            <p>{!pelicula.esFavorito ? <FaHeart size={20} /> : <FaRegHeart size={20} />}</p>
                                        </button>
                                    </div>

                                </article>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )
    }
}

export default Favoritas;