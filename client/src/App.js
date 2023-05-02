import "./App.css";
import Home from "./views/Home/Home";
import Lading from "./views/Lading/Lading";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route>
        <Lading path="/home" />
      </Route>

      <Route>
        <Home path="/" />
      </Route>
    </div>
  );
}

export default App;
