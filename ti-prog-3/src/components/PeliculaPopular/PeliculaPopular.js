import React, { Component } from 'react'

class PeliculaPopular extends Component {
    constructor(props) {
        super(props)

        this.state = {
            esFavorito: false,
            movie: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=6d74e7317f9a497bee146a3eed86d6f7")
            .then(response => response.json())
            .then(data => this.setState(
                { movie: data.results }
            ))
            .catch(error => console.log(error));

        const storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            const parsedArray = JSON.parse(storage)
            const estaEnFavoritos = parsedArray.includes(this.props.movie.id)
            this.setState({
                esFavorito: estaEnFavoritos
            })
        }
    }

    agregarFavorito() {
        const storage = localStorage.getItem('favoritos')
        if (storage !== null) {
            const parsedArray = JSON.parse(storage)
            parsedArray.push(this.props.movie.id)
            const stringArray = JSON.stringify(parsedArray)
            localStorage.setItem('favoritos', stringArray)
        } else {
            const primerPelicula = [this.props.movie.id]
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
        const favoritosRestantes = parsedArray.filter(id => id !== this.props.movie.id)
        const stringArray = JSON.stringify(favoritosRestantes)
        localStorage.setItem('favoritos', stringArray)
        this.setState({
            esFavorito: false
        })

    }

    render() {
        const {title, image} = this.props.movie
        return (
            <article className='data-detail'>
                <div className='card-content'>
                    <h4>{this.props.movie.title}</h4>
                    <p>Datos de la pelicula.</p>

                </div>
                <i className='fas fa clipboard-list fa-2x text-grey-300'></i>
                <button onClick={() => !this.state.esFavorito ? this.agregarFavorito() : this.sacarFavorito()}>
                    {!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}
                </button>

            </article>
        )
    }
}

export default PeliculaPopular
