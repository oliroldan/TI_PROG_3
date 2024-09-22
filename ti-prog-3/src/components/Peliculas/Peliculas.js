import React, { Component } from 'react'
import Pelicula from '../Pelicula/Pelicula';
import "./Peliculas.css";
import { Link } from "react-router-dom";

class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      info: [],
      verMas: false
     };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({ info: data.results }))
      .catch(error => console.error(error));
  }
  handleVerMas(){
    this.setState({
      verMas: !this.state.verMas // muestra lo contrario de lo que ya tenia
    })
  }

  render() {
    return (
      <>
        <section className='contenedor'>
          <article>

            <h3>{this.props.titulo}</h3>

            <div className='peli'>
              {this.state.info.slice(0, 6).map((pelicula, index) => (<Pelicula key={index} pelicula={pelicula} />))}
            </div>
            <div>
              <h2>{this.state.verMas}</h2>
              <Link to="/populares"><button>Ver todas</button></Link>
              <Link to="/cartelera"><button>Ver todas</button></Link>
            </div>

          </article>
        </section>
      </>
    )
  }

}

export default Peliculas
