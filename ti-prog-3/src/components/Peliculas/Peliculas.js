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

  /* componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({
        info: data.results
      }))
      .catch(error => console.error(error));
  } */
  handleVerMas() {
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
              {this.props.info.map((pelicula, index) => (<Pelicula key={index} pelicula={pelicula} />))}
            </div>

            <div className='masPelis'>
              <p className={this.state.verMas ? "show" : "hide"}>{this.state.info.map((pelicula, index) => (<Pelicula key={index} pelicula={pelicula} />))}</p>
              <button onClick={() => this.handleVerMas()}>{this.state.verMas ? "Cargar mas" : "Cargar mas"}</button>
            </div>

          </article>
        </section>
      </>
    )
  }

}

export default Peliculas
