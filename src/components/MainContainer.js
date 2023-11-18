import React, { useEffect, useState } from 'react'
import { API_URL } from '../constants';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShimmerUI from './ShimmerUI';

const MainContainer = () => {
    const isMenuOpen=useSelector(state=>state.app.isMenuOpen);
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1);
    const filterItems=['All','Cricket','Tech','Robots','cinema','festival','knowledge']

    const handleScroll=()=>{
        if (window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight)setPage((prev)=>prev+1);

    }

   

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        fetch(API_URL)
        .then(res=>res.json())
        .then(data=>setData(data.items))
        .catch(error=>console.log(error))
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
            console.log('Bye MainContainer');
        };
    },[])
    
    
  return (<div>
    <div className='filters'>
        {filterItems.map((item)=><div key={item}>{item}</div>)}
    </div>
    
    <div className={isMenuOpen?'contents':'contents-full'}>
        {!data?<ShimmerUI/>: data.slice(0,page*10).map((item)=><div className='content' key={item.id}><Link  to={"/watch?v="+item.id}> 
            <img width='100%' height='200px' alt='' src={item.snippet.thumbnails.high.url}></img>
            <div className='text'><b>{item.snippet.title}</b></div>
            <div>📺{item.snippet.channelTitle}✅</div>
            <div>{item.statistics.viewCount} 👁️</div>
        </Link></div>)}
    </div>

  </div>
    
  )
}

export default MainContainer