import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Search () {

    const [searchBar, setSearchBar] = useState('');

    const searchBarInput = (event) => {
        setSearchBar(event.target.value);
      };

    return (
        <input onChange={searchBarInput}/>
    )
}