import {Component} from 'react'
import PeliculaPopular from '../PeliculaPopular/PeliculaPopular'

class PeliculasPopulares extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
        <>
        <PeliculaPopular/> 
        </>
    )
  }
  
}

export default PeliculasPopulares