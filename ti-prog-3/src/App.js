import {Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm/SearchFrom";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Header/>
    <SearchForm />
    <Switch>
      <Route path= "/" exact component= {Home}/>
      <Route component = {NotFound} />
      <Route path = "/search" component = {SearchForm} />
    </Switch>
    <p>React</p>
    </>
  );
}

export default App;
