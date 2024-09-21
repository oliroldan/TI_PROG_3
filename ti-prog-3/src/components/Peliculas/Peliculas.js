import React, { Component } from 'react'
import Pelicula from '../Pelicula/Pelicula';
import "./Peliculas.css";

class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = { info: [] };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({ info: data.results }))
      .catch(error => console.error(error));
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

          </article>
        </section>
      </>
    )
  }

}

export default Peliculas
