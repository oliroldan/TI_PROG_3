//import { Switch, Route } from "react-router-dom";
import {Switch, Route} from 'react'
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
// import Favoritos from "./components/Favoritos/favoritos";
import Favoritos from "./components/Favoritos/Favoritos";

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path= "/" exact component= {Home}/>
      <Route path = "/search" component = {SearchResults}/>
      <Route path = "/favoritos" component = {Favoritos}/>
      <Route component = {NotFound} />
    </Switch>
    <Footer/>
    <p>React</p>
    </>
  );
}

export default App;
