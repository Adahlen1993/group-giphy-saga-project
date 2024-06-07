import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams} from 'react-router-dom';
import { useEffect } from "react";


export default function FavoriteCategory () {

    const { id } = useParams();
    const favoriteGifs = useSelector(store => store.favoriteReducer);
    const dispatch = useDispatch();
    console.log('favoriteGifs', favoriteGifs);

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITE_CATEGORY', payload: id })
    }, [])

    return (
        <>
            <h2>Favorite Gif?</h2>
            
          
        
        </>
    )
}