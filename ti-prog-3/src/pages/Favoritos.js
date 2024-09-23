import React, { Component } from 'react'

class Favoritos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pelicula: [],
            isLoading: true
        }
    }
    componentDidMount() {

        this.setState({
            isLoading: true
        })

        const storage = localStorage.getItem('favoritos');

        if (storage) {
            const favoritos = JSON.parse(storage);

            const defino = favoritos.map(id => {
                const url = `https://api.themoviedb.org/3/movie/${id}?api_key=6d74e7317f9a497bee146a3eed86d6f7`;
                
                return(
                    fetch(url)
                    .then(response => response.json())
                    .then(movie =>
                        this.setState({
                            movies: [...this.state.movies, movie]
                        })
                    )
                )
            });
    
            Promise.all(defino)
                .then(peliculas => {
                    this.setState({ peliculas });
                })
                .catch(err => {
                    console.log(err);
                });
        }
        this.setState({
            isLoading: false
        })
    }
    render() {
        return (
            <div>
                {!this.state.isLoading ? <h2>Tus peliculas favoritas</h2> : <h2>Loading...</h2>}
            </div>
        )
    }
}

export default Favoritos
