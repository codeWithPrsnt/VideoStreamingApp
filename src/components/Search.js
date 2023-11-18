import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SEARCH } from '../constants';
import ShimmerUI from './ShimmerUI';

const Search = () => {
    const [params] = useSearchParams();
    const searchText = params.get('s');
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchSearch();
    }, [])

    const fetchSearch = () => {
        fetch(SEARCH + searchText)
            .then((res) => res.json())
            .then((data) => setData(data.items));
    }

    return (
        <div className='Search-text'>
            {!data?<ShimmerUI/>: data.map((item) => <div className='Search-text' key={item.id.videoId}>
                <Link to={"/watch?v="+item.id.videoId}>
                    <div className='search-card'>
                        <img width='100%' height='200px' alt='' src={item.snippet.thumbnails.high.url}></img>
                        <div className='card-description'>
                            <div className='text'><b>{item.snippet.title}</b></div>
                            <div>📺{item.snippet.channelTitle}✅</div>
                            <div className='card-text'>{item.snippet.description}</div>
                            <div>{item.snippet.publishedAt.replace(['T']," ").replace(['Z']," ")}</div>
                        </div>
                    </div>

                </Link>
            </div>)}
        </div>
    )
}

export default Search