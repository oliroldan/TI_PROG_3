import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route path = "" component = {NotFound} />
    </Switch>
    <p>React</p>
    </>
  );
}

export default App;
