import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Search () {

    const dispatch = useDispatch();

  const search = useSelector((store) => store.searchList);

  console.log(favorites);



  useEffect(() => {
    
    dispatch({ type: "FETCH_SEARCH" });
  }, []);

    const [searchBar, setSearchBar] = useState('');


    const handleSearchSubmit = event => {
        event.preventDefault();
       dispatch({type: 'FETCH_SEARCH', payload: searchBar})
      };

    const searchBarInput = (event) => {
        setSearchBar(event.target.value);
      };

    return (
        <form>
        <input onChange={searchBarInput}/>
        </form>
    )
}