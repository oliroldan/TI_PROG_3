import Navbar from "./components/Navbar/Navbar/Navbar";
import SearchFrom from "./components/SearchForm/SearchFrom";
import {Switch, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <Navbar/>
    <SearchFrom />
    <Switch>
      <Route path = "" component = {NotFound} />
      <Route path = "/search" component = {SearchForm} />
    </Switch>
    <p>React</p>
    </>
  );
}

export default App;
