import FavoriteGifs from "../FavoriteGifs/FavoriteGifs.jsx";
import Home from "../Home/Home";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import Search from "../Search/Search";
import FavoriteCategory from "../FavoriteCategory/FavoriteCategory.jsx";

import './App.css';

function App() {
  return (
    <div className="main-div">
      <Router>
        <section className="darkgrey">

        
      <Nav className='navbar'>
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
        </Nav>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/favorites">
          <FavoriteGifs />
        </Route>

        <Route path="/search">
          <Search />
        </Route>

        <Route path='/favorite/:url'>
          <FavoriteCategory/>
        </Route>

    
        </section>
      </Router>
    </div>
  );
}

export default App;
