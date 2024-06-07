import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";


export default function FavoriteCategory () {

    const { url } = useParams();
    const favoriteGifs = useSelector(store => store.favoriteReducer);
    const dispatch = useDispatch();
    console.log('favoriteGifs', favoriteGifs[favoriteGifs.length-1]);
    const [category, setCategory] = useState()
    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITE' })
    }, [])

    const categoryInput = (event) => {
        setCategory(event.target.value);
      };
    
      const handleCategorySubmit = (event) => {
        event.preventDefault();
    
        dispatch({ type: "ADD_CATEGORY", payload: {category_id:category} });
        history.push("/search");
        
      };

    return (
        <>
            <h2>Favorite Gif?</h2>
          <img src={favoriteGifs[favoriteGifs.length-1].url}/>
          <h4>{favoriteGifs[favoriteGifs.length-1].title}</h4>
          <form onSubmit={handleCategorySubmit}>
        <ToggleButtonGroup type="radio" name="options">
          <ToggleButton
            id="tbg-radio-1"
            onChange={categoryInput}
            type="radio"
            value={1}
            name="buttons"
          >
            Wild
          </ToggleButton>

          <ToggleButton
            id="tbg-radio-2"
            onChange={categoryInput}
            type="radio"
            value={2}
            name="buttons"
          >
            Uproarous
          </ToggleButton>

          <ToggleButton
            id="tbg-radio-3"
            onChange={categoryInput}
            type="radio"
            value={3}
            name="buttons"
          >
            Poignant
          </ToggleButton>

          <ToggleButton
            id="tbg-radio-4"
            onChange={categoryInput}
            type="radio"
            value={4}
            name="buttons"
          >
            Felicitous
          </ToggleButton>

          <ToggleButton
            id="tbg-radio-5"
            onChange={categoryInput}
            type="radio"
            value={5}
            name="buttons"
          >
            Whimsical
          </ToggleButton>

        
          <button onClick={handleCategorySubmit}>Submit</button>
        </ToggleButtonGroup>
      </form>
          
        
        </>
    )
}