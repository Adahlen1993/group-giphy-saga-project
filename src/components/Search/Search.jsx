import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchItem from "../SearchItem/SearchItem";
import './Search.css';

export default function Search () {

    const dispatch = useDispatch();

  const search = useSelector((store) => store.searchGifs);

  

  

  useEffect(() => {
    
    dispatch({ type: "FETCH_SEARCH" });
  }, []);

    const [searchBar, setSearchBar] = useState('hello');


    const handleSearchSubmit = event => {
        event.preventDefault();
       dispatch({type: 'FETCH_SEARCH', payload: searchBar})
      };

    const searchBarInput = (event) => {
        setSearchBar(event.target.value);
      };



   

    return (
        <>
        <form onSubmit={handleSearchSubmit}>
          <div className="search-input">
            <input className="btn-outline-primary" onChange={searchBarInput}/>
            <button className="btn btn-warning btn-outline-primary">Search</button>
          </div>
        </form>
          <div className="row">
            {search.map((gif,i) => (
                <SearchItem gif={gif} key={i} />
              )
            )}
          </div>
        </>


    )
}