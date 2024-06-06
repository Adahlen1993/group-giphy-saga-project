import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function FavoriteGifs (){

    const favoriteGifs = useSelector(store => store.favoriteReducer);
    const dispatch = useDispatch();
    console.log('favoriteGifs', favoriteGifs);

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITE' })
    }, [])

    return (
        <>
            <h2>My Favorite Gifs</h2>
            {favoriteGifs.map((favGifs, i) => {
                <div className='gif' key={i}>
                    <img src={favGifs.url} />
                </div>
            })}
        </>
    )
}