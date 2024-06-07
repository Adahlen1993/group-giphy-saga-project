import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams} from 'react-router-dom';

import './SearchItem.css'

export default function SearchItem ({gif, i}) {
    const history= useHistory();
    const dispatch = useDispatch();
    
    const addFavorite = (event) => {
        dispatch({type: 'ADD_FAVORITE', payload: {title: event.title, url: event.images.original.url, temp_id: event.i}})
        console.log(gif.url);
        history.push(`/favorite/category`)
      };
    return (
        <div className='gif' key = {i} id='card'>
              <img  src={gif?.images?.original?.url} />
              <h6>{gif.title}</h6>

              <div className="favorite-btn">
              <button className="btn btn-danger btn-outline-primary" onClick={()=> addFavorite(gif)}>Favorite?</button>
              </div>

            </div>
    )
}