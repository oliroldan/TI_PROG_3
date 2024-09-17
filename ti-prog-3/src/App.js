//import { Switch, Route } from "react-router-dom";
import {Switch, Route} from 'react'
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path= "/" exact component= {Home}/>
      <Route path = "/search" component = {SearchResults}/>
      <Route component = {NotFound} />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
