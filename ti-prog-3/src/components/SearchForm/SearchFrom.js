import { Component } from 'react'

export class SearchForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      query: e.target.value
    }
  }

  componentDidMount() {
    // fetch
  }

  handleInputChange() {

  }

  handleInputSubmit() {
    this.props.history.push('/search', {query: this.query})
  }

  render() {
    return (
      <>
        <input onChange={(e) => this.handleInputChange(e)} type="text" name="query" value={this.state.query} />

        <button onClick={(this.handleInputSubmit)}>Search Movie</button>
      </>
    )
  }
}

export default SearchForm
