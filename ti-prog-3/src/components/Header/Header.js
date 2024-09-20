import { Component } from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

class Header extends Component {
    /* constructor(props){
        super(props)
    } */

    render() {
        return (
            <header>
                    <Navbar />
                    <SearchForm />
            </header>
        )
    }
}

export default Header