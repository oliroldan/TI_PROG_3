import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Pelicula extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        };
    }

    handleShowDescr(){
        this.setState({
            showDescr: !this.state.showDescr
        })
    }

    render() {
        const {id, nombre, descr, img} = this.props.pelicula;

        return (
            <>
                <div className="character-card">
                    <img src={`https://image.tmdb.org/t/p/w342/${img}`} alt={nombre} />
                    <h3>{nombre}</h3>

                    <p className={this.state.showDescr ? "hide" : "show"} >{descr}</p>
                    <button onClick={() => this.handleShowDescr()}>{this.state.showDescr ? "Ocultar descripcion" : "Ver descripcion"}</button>
                    <p><Link to= {`/pelicula/id/${id}`}>Ver mas</Link></p>
                </div>
            </>
        );
    }
}

export default Pelicula;
