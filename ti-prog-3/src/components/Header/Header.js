import { Component } from "react";


class Header extends Component{
    constructor(props){
        super(props)
    }


    render(){
        const {name, image, species, status, origin} = this.props.character
        return(
            <article>
			<h2> NOMBRE APP </h2> 
			<img src={image} alt={name} />
 
            
            </article>
 
        )
    }
}
export default Header
