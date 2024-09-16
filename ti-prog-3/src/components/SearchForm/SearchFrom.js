import React, { Component } from 'react'

export class SearchFrom extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: ""
        }
    }

    componentDidMount

    handleInputChange(e){

    }

    handleInputSubmit(){

    }

  render() {
    return (
      <div>
        <input onChange = {(e)=> this.state({
            query: e.target.value
        })} type = "text" name = "query" value={this.state.query} />
        <button>Search Movie</button>
      </div>
    )
  }
}

export default SearchFrom
