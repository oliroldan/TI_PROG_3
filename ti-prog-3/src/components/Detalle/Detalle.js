import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./Detalle.css"

class Detalle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pelicula: {},
            showDescr: false,
            esFavorito: false,
            isLoading: true
        };

        this.handleShowDescr = this.handleShowDescr.bind(this);
    }

    componentDidMount() {
        console.log('ID', this.props.id)
        this.setState({
            isLoading: true
        })
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=6d74e7317f9a497bee146a3eed86d6f7`)
            .then(response => response.json())
            .then(data => {
                this.setState({ pelicula: data, isLoading: false })
                console.log(data)
            })
            .catch(err => console.log(err))

    }

    handleShowDescr() {
        this.setState({
            showDescr: !this.state.showDescr // muestra lo contrario de lo que ya tenia
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
            <>
                {this.state.isLoading ? <p>Cargando...</p> : <section className='pelicula'>
                    <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />

                    <h2>{this.state.pelicula.title}</h2>

                    <p>Duracion: {this.state.pelicula.runtime} minutos</p>
                    <p>Estreno: {this.state.pelicula.release_date}</p>
                    {/* <p>Generos: {this.state.pelicula.genres.map(genre => genre.name).join(', ')}</p> HACE QUE ROMPA FAVORITAS*/}
                    <p>Rating: <a className="rating" href={`https://www.imdb.com/title/${this.state.pelicula.imdb_id}/?ref_=nv_sr_srsg_0_tt_1_nm_0_in_0_q_${this.state.pelicula.imdb_id}`}>IMDB</a></p>

                    <p>{this.state.pelicula.overview}</p>

                    <i className='fas fa clipboard-list fa-2x text-grey-300'></i>
                    <div className="favoritos">
                        <button onClick={() => !this.state.esFavorito ? this.agregarFavorito() : this.sacarFavorito()}>
                            <p>{!this.state.esFavorito ? <FaRegHeart size={20} /> : <FaHeart size={20} />}</p>
                        </button>
                    </div>
                </section>}

            </>
        );
    }
}

export default Detalle;