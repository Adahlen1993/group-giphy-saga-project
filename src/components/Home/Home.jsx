import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const allGifs = useSelector((store) => store.allGifs)
  const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch({type: 'FETCH_GIFS'});
    }, []);

    return(
        <>
        <h1>A-Team Giphy Gallery</h1>
        {/* {allGifs.map(gif => (
            <div className='gif'>
              <img src={gif.images.original.url} />
              <h6>{gif.title}</h6>
            </div>
          )
        )} */}
        </>
    )
}