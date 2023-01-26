import Home from "./views/Home/Home";
import { Route } from "react-router-dom";
import Detail from "./views/Detail/Detail";
import Landing from "./views/Landing/Landing";


function App() {
  return (
    <div className="App">

      <Route exact path="/">
        <Landing></Landing>
      </Route>

      <Route path="/home">
        <Home></Home>
      </Route>

      <Route path="/detail">
        <Detail></Detail>
      </Route>
      
    </div>
  );
}

export default App;
