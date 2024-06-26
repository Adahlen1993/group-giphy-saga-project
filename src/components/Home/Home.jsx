import { useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../Home/Home';

export default function Home() {
  const history = useHistory();
  const allGifs = useSelector((store) => store.allGifs)
  const dispatch = useDispatch();
  const addFavorite = (event) => {
    history.push(`/favorite/category`)
    dispatch({type: 'ADD_FAVORITE', payload: {title: event.title, url: event.images.original.url}})
  };
    console.log('All Gifs', allGifs);

    useEffect(() => {
      dispatch({type: 'FETCH_GIFS'});
    }, []);

    return(
        <section> 
        <h1>A-Team Giphy Gallery</h1>
        <div className='row'>
        {allGifs.map((gif,i) => (
          <div className='gif,' key = {i} id='card'>
              <img src={gif?.images?.original?.url} className="img-fluid border border-primary" alt="Responsive image" />
              <h6>{gif.title}</h6>
              <div className = 'center'><button class="btn btn-primary margin" onClick={()=> addFavorite(gif)}>Favorite?</button> </div>
            </div>
          )
        )}
        </div>
        </section>
    )
}