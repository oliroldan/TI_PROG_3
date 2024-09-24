import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
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

    render() {
        
        return (
            <>
            {this.state.isLoading ? <p>Cargando...</p> : <section className='pelicula'>
                    <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />

                    <h2>{this.state.pelicula.title}</h2>

                    <p>Duracion: {this.state.pelicula.runtime} minutos</p>
                    <p>Estreno: {this.state.pelicula.release_date}</p>
                    <p>Generos: {this.state.pelicula.genres.map(genre => genre.name).join(', ')}</p>
                    <p>Rating: <a className= "rating" href={`https://www.imdb.com/title/${this.state.pelicula.imdb_id}/?ref_=nv_sr_srsg_0_tt_1_nm_0_in_0_q_${this.state.pelicula.imdb_id}`}>IMDB</a></p>

                    <p>{this.state.pelicula.overview}</p>

                    

                </section>}
                
            </>
        );
    }
}

export default Detalle;