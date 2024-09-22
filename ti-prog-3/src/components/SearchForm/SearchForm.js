import { Component } from 'react'
import "./SearchForm.css";

export class SearchForm extends Component {

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

  handleInputSubmit() {
    this.props.history.push('/search', {query: this.state.query})
  }

  render() {
    return (
      <>
        <div className='search'>
          <input onChange={(e) => this.handleInputChange(e)} type="text" name="query" value={this.state.query} />

          <button className="searchform" onClick={(this.handleInputSubmit)}>Search</button>
        </div >
      </>
    )
  }
}

export default SearchForm
