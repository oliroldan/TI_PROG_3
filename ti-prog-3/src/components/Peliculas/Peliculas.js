import React, { Component } from 'react'
import Pelicula from '../Pelicula/Pelicula';
import "./Peliculas.css";

class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      verMas: false
    };
  }

  handleVerMas() {
    this.setState({
      verMas: !this.state.verMas
    })
  }

  render() {
    return (
      <>
        <section className='contenedor'>
          <article>

            <h3>{this.props.titulo}</h3>

            <div className='peli'>
              {this.props.info.map((pelicula, index) => (<Pelicula key={index} pelicula={pelicula} />))}
            </div>

          </article>
        </section>
      </>
    )
  }

}

export default Peliculas
