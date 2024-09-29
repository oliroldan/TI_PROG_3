import React, { Component } from 'react'
import "./Pelicula.css"
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

class Pelicula extends Component {
    constructor(props) {
        super(props)

        this.state = {
            esFavorito: false,
            pelicula: null,
            showDescr: false,
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        
        const storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            const parsedArray = JSON.parse(storage)
            const estaEnFavoritos = parsedArray.includes(this.props.pelicula.id)
            this.setState({
                esFavorito: estaEnFavoritos,
                isLoading: false
            })
        }

        if (this.props.match && this.props.match.params) {
            const { id } = this.props.match.params

            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6d74e7317f9a497bee146a3eed86d6f7`)
                .then(response => response.json())
                .then(data => {
                    this.setState({ pelicula: data })
                })
                .catch(err => console.log(err))
        }
    }

    handleShowDescr() {
        this.setState({
            showDescr: !this.state.showDescr
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
        const { id, title, overview, poster_path } = this.props.pelicula;

        return (
            <>
            {this.state.isLoading ? <p>Cargando...</p> : <section className='pelicula'>
                    <div>

                        <article>
                            <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} />

                            <Link to={`pelicula/id/${id}`}><h2>{title}</h2></Link>

                            <article className='extra'>
                                <p className={this.state.showDescr ? "show" : "hide"}>{overview}</p>
                                <button className='more' onClick={() => this.handleShowDescr()}>{this.state.showDescr ? "Ocultar sinopsis" : "Ver sinopsis"}</button>
                            </article>

                            <p><Link to={`/pelicula/id/${id}`}>Ir a detalle</Link></p>

                            <i className='fas fa clipboard-list fa-2x text-grey-300'></i>
                            <div className="favoritos">
                                <button onClick={() => !this.state.esFavorito ? this.agregarFavorito() : this.sacarFavorito()}>
                                    <p>{!this.state.esFavorito ? <FaRegHeart size={20} /> : <FaHeart size={20} />}</p>
                                </button>
                            </div>

                        </article>

                    </div>
                </section>}
            </>
        )
    }
}

export default Pelicula
