import FavoriteGifs from "../FavoriteGifs/FavoriteGifs.jsx";
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
          <Route path='/favorites'>
            <FavoriteGifs />
          </Route>
      </Router>
    </div>
  );
}


export default App;
