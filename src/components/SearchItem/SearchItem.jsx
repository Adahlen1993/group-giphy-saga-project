import { useDispatch, useSelector } from "react-redux";

export default function SearchItem ({gif, i}) {
    const dispatch = useDispatch();
    const addFavorite = (event) => {
       
        dispatch({type: 'ADD_FAVORITE', payload: {title: event.title, url: event.images.original.url}})
        console.log(gif);
      };
    return (
        <div className='gif' key = {i}>
              <img  src={gif?.images?.original?.url} />
              <h6>{gif.title}</h6>
              <button onClick={()=> addFavorite(gif)}>Favorite?</button>
            </div>
    )
}