import { useDispatch, useSelector } from "react-redux";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>


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
              <button class="btn btn-primary" onClick={()=> addFavorite(gif)}>Favorite?</button>
            </div>
    )
}