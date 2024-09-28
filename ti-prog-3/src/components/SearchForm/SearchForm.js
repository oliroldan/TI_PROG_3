import { Component } from 'react'
// import { withRouter } from 'react-router-dom';
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
    //console.log(this.props.history)
    this.props.history.push('/search', { query: this.state.query })
  }

  render() {
    return (
      <>
        <div className='search'>
          <form onSubmit={(e) => this.handleCancelSubmit(e)} >
            <input onChange={(e) => this.handleInputChange(e)} type="text" name="query" value={this.state.query} />

            <button className="searchform" onClick={()=> this.handleInputSubmit()}>Search</button>  
          </form>
        </div >
      </>
    )
  }
}
/* export default withRouter(SearchForm) */
export default SearchForm
