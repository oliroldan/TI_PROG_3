import { Component, Link } from "react";
//import { Link } from "react-router-dom@5"

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <article>
			<h2>ALL MOVIES</h2> 

            <nav>
            <ul>
                <li><Link to= "/">Home</Link></li>
            </ul>
            </nav>
 
            
            </article>
 
        )
    }
}
export default Header
