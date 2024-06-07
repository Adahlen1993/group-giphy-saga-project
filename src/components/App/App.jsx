import FavoriteGifs from "../FavoriteGifs/FavoriteGifs.jsx";
import Home from "../Home/Home";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import Search from "../Search/Search";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

function App() {
  return (
    <div>
      <Router>
      <nav className='navbar'>
          <ul>
            <li>
              <NavLink
                to='/'
                exact
                activeClassName='active'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/search'>Search</NavLink>
            </li>
            <li>
              <NavLink
                to='/favorites'
                activeClassName='active'
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/favorites">
          <FavoriteGifs />
        </Route>

        <Route path="/search">
          <Search />
        </Route>
      </Router>
    </div>
  );
}

export default App;
