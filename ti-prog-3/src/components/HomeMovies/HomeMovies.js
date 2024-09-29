import React, { Component } from 'react'
import Pelicula from '../Pelicula/Pelicula';

class HomeMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      verMas: false,
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })

    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({
        info: data.results,
        isLoading: false
      }))
      .catch(error => console.error(error));
  }
  
  handleVerMas() {
    this.setState({
      verMas: !this.state.verMas
    })
  }

  render() {
    return (
      <>
        {this.state.isLoading ? <p>Cargando...</p> : <section className='contenedor'>
          <article>

            <h3>{this.props.titulo}</h3>

            <div className='peli'>
              {this.state.info.slice(0, 6).map((pelicula, index) => (<Pelicula key={index} pelicula={pelicula} />))}
            </div>
          </article>
        </section>}

      </>
    )
  }

}

export default HomeMovies