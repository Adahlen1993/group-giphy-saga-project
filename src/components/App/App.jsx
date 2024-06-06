import Home from "../Home/Home";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Route
            path='/'
            exact
          >
      <Home />
          
          </Route>
      </Router>
    </div>
  );
}


export default App;
