import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Pelicula.css";
import { FaHeart } from "react-icons/fa";

class Pelicula extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            showDescr: false,
            esFavorito: false

        };
        this.handleShowDescr = this.handleShowDescr.bind(this);
    }

    handleShowDescr(){
        this.setState({
            showDescr: !this.state.showDescr // muestra lo contrario de lo que ya tenia
        })
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
        const {id, title, overview, poster_path} = this.props.pelicula;
        return (
            <>
                <section className='pelicula'>
                    <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} />
                    
                    <Link to={`pelicula/id/${id}`}><h2>{title}</h2></Link>
                    
                    <article className='extra'>
                        <p className={this.state.showDescr ? "show" : "hide"}>{overview}</p>
                        <button className='more' onClick={() => this.handleShowDescr()}>{this.state.showDescr ? "Ocultar descr" : "Ver descr"}</button>
                    </article>
                    
                    <p><Link to= {`/pelicula/id/${id}`}>Ir a detalle</Link></p>     

                    <div className="favoritos">

                        <button>
                            <a href="/favoritos">
                                <h2 id={id}><FaHeart size={20} /></h2>
                            </a>
                        </button>
                    </div>

                </section>
            </>
        );
    }
}

export default Pelicula;
