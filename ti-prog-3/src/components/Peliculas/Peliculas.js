import { Component } from 'react'
import Pelicula from '../Pelicula/Pelicula';

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
        <article>
          <h3>{this.props.titulo}</h3>
          <div>
            {this.state.info.map((pelicula, index) => (<Pelicula key={index} pelicula={pelicula} />))}
          </div>
        </article>
      </>
    )
  }

}

export default Peliculas
