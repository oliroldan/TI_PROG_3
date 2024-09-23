import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Populares from "./pages/Populares";
import Cartelera from "./pages/Cartelera";
import Detalle from "./pages/Detalle";
import Favoritos from "./pages/Favoritos";

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path= "/" exact component= {Home}/>
      <Route path = "/pelicula/id/:id" component = {Detalle}/>
      <Route path = "/populares" component = {Populares}/>
      <Route path = "/cartelera" component = {Cartelera}/>
      <Route path = "/favoritos" component = {Favoritos}/>
      <Route path = "/search" component = {SearchResults}/>
      <Route component = {NotFound} />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
