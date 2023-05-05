import "./App.css";
import { Home, Form, Landing, Detail } from "./views";
import NavBar from "./components/NavBar/NavBar";
import { Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/">
        <Landing />
      </Route>

      <Route exact path="/create">
        <Form />
      </Route>

      <Route exact path={`/recipes/:id`}>
        <Detail />
      </Route>

      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
