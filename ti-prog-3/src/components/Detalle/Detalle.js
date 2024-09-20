import React, { Component } from 'react'

class Detalle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            esFavorito: false
        }
    }

    componentDidMount() {
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
        return (
            <article className='data-detail'>
                <div className='card-content'>
                    <h4>{this.props.movie.title}</h4>
                    <p>Datos de la pelicula</p>
                </div>
                <i className='fas fa clipboard-list fa-2x text-grey-300'></i>
                <button onClick={() => !this.state.esFavorito ? this.agregarFavorito() : this.sacarFavorito()}>
                    {!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}
                </button>

            </article>
        )
    }
}

export default Detalle
