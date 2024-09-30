import { Component } from 'react'
import "./SearchForm.css";

class SearchForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      query: ''
    }

  }

  handleInputChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleCancelSubmit(e) {
    e.preventDefault()
  }

  handleInputSubmit() {
    this.props.history.push('/search', { query: this.state.query })
  }

  render() {
    return (
      <>
        <div className='search'>
          <form onSubmit={(e) => this.handleCancelSubmit(e)} >
            <input onChange={(e) => this.handleInputChange(e)} placeholder="Ingresa tu busqueda" type="text" name="query" value={this.state.query} />

            <button className="searchform" onClick={() => this.handleInputSubmit()}>Buscar</button>
          </form>
        </div >
      </>
    )
  }
}

export default SearchForm
