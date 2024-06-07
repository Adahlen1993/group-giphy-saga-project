import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";


export default function FavoriteCategory () {
const history = useHistory();
    const favoriteGifs = useSelector(store => store.updateReducer);
    const dispatch = useDispatch();
    console.log('favoriteGifs.id', favoriteGifs.id);
    const [category, setCategory] = useState()
  
    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITE_CATEGORY' })
    }, [])

    const categoryInput = (event) => {
        setCategory(event.target.value);
      };
    
      const handleCategorySubmit = (event) => {
        event.preventDefault();
    
        dispatch({ type: "UPDATE_CATEGORY", payload: {id:favoriteGifs.id, categories_id: category} });
        history.push("/search");
        
      };

    return (
        <>
            <h2>Favorite Gif?</h2>
          <img src={favoriteGifs.url}/>
          <h4>{favoriteGifs.title}</h4>
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