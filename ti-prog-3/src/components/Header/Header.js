import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = (props) => {
  return (
    <>
        <header>
            <Navbar />
            <SearchForm history = {props.history}/>
        </header>
    </>
  )
}

export default Header
