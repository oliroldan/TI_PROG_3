import Navbar from "../Navbar/Navbar";
import { SearchForm } from "../SearchForm/SearchForm";
import { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <header>
          <Navbar />
          <SearchForm history={this.props.history} />
        </header>
      </>
    )
  }
}

export default Header
