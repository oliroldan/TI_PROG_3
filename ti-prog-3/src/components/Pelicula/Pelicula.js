import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

class Pelicula extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            showDesc: true
        };
    }

    handleShowDescr(){
        this.setState({
            showDescr: !this.state.showDescr // muestra lo contrario de lo que ya tenia
        })
    }

    render() {
        const {id, nombre, descr, img} = this.props.pelicula;

        return (
            <>
                <div className="character-card">
                    <img src={`https://image.tmdb.org/t/p/w342/${img}`} alt={nombre} />
                    <Link to={`pelicula/id/${id}`}><h4>{nombre}</h4></Link>

                    <p className={this.state.showDescr ? "hide" : "show"} >{descr}</p>
                    <button onClick={() => this.handleShowDescr()}>{this.state.showDescr ? "Ocultar descripcion" : "Ver descripcion"}</button>
                    <p><Link to= {`/pelicula/id/${id}`}>Ver mas</Link></p>
                </div>
            </>
        );
    }
}

export default Pelicula;
