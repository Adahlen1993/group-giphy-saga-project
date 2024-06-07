import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchItem from "../SearchItem/SearchItem";

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
        <input onChange={searchBarInput}/>
        <button>Search</button>
        </form>
        {search.map((gif,i) => (
            <SearchItem gif={gif} key={i} />
          )
        )}
        </>


    )
}