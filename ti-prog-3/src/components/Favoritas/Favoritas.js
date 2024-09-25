import React, { Component } from "react";
import "./Favoritas.css"
//import { FaHeart } from "react-icons/fa";
//import { FaRegHeart } from "react-icons/fa";
import Detalle from "../Detalle/Detalle";

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

    sacarFavorito() {
        const storage = localStorage.getItem('favoritos')
        const parsedArray = JSON.parse(storage)
        const favoritosRestantes = parsedArray.filter(id => id !== this.props.pelicula.id)
        const stringArray = JSON.stringify(favoritosRestantes)
        localStorage.setItem('favoritos', stringArray)
        this.setState({
            esFavorito: false
        })

    }

    render() {
        return (
            <div>
                {!this.state.isLoading ? (
                    <article>
                        <Detalle/>
                    </article>
                ) : <h2>Cargando...</h2>}
            </div>
        )
    }
}

export default Favoritas;