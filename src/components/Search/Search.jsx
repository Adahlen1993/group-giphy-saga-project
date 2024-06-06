import { useDispatch, useSelector} from "react-redux";
import { useState,  useEffect  } from "react";
import { useHistory } from "react-router-dom";

export default function Search () {

    const dispatch = useDispatch();

  const search = useSelector((store) => store.searchGifs);

  console.log(search);

  

  useEffect(() => {
    
    dispatch({ type: "FETCH_SEARCH" });
  }, []);

    const [searchBar, setSearchBar] = useState('Hello');


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
            <div className='gif' key = {i}>
              <img src={gif?.images?.original?.url} />
              <h6>{gif.title}</h6>
            </div>
          )
        )}
        </>


    )
}