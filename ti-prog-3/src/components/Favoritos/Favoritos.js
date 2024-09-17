import React, { Component } from 'react'


class Favoritos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            isLoading: true
        }
    }
    componentDidMount() {

        this.setState({
            isLoading: true
        })

        const parsedArray = JSON.parse(Storage)
        Promise.all(
            parsedArray.map((id) => {
                fetch('URL DE MOVIE!!!')
                    .then(response => response.json())
                    .then(movie =>
                        this.setState({
                            movies: [...this.state.movies, movie]
                        })
                    )
            })
        )
        this.setState({
            isLoading: false
        })
    }
    render() {
        return (
            <div>
                {!this.state.isLoading ? <p>GRILLA DE FAVORITOS</p> : <p>Loading...</p>}
            </div>
        )
    }
}

export default Favoritos
