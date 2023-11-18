import React, { useEffect, useState } from 'react';
import { HAMBURGER_URL, YOUTUBE_URL, USER_URL, darkTheme, SEARCH, YOUTUBE_URL_B } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, toggleTheme } from '../utils/appSlice';
import { addSearch } from '../utils/searchSlice';


const Header = () => {
  const [suggestion, setSuggestion] = useState(false);
  const [search,setSearch]=useState([]);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(state=>state.app.darkTheme);
  const isMenuOpen = useSelector(state => state.app.isMenuOpen);
  const searchCache =useSelector(state=>state.search.searchCache);

  useEffect(()=>{
    window.addEventListener('scroll',()=>setSuggestion(false));
    return ()=>window.addEventListener('scroll',()=>setSuggestion(false));
  },[])

  useEffect(()=>{
    if(searchCache[searchText]){
      setSearch(searchCache[searchText]);
      return ;
    }
    let timer;
    if(searchText)timer=setTimeout(()=>fetchData(),400)
    return ()=>{
      clearTimeout(timer);
      
    }
  }, [searchText]);

  const fetchData = async () => {
    try {
      console.log(searchText);
      const data = await fetch(SEARCH + searchText, { mode: 'cors', method: "get", headers: { "Content-Type": "application/json" } });
      const res = await data.json();
      setSearch(res.items);
      dispatch(addSearch({'key':searchText,'val':res.items}));
      
    } catch (error) {
      console.log(error);
    }
    
  };

  const toggleMenuBar = () => {

    dispatch(toggleMenu(!isMenuOpen))
  };

  return (<>
    <div className='header'>
      <div>
        <img onClick={() => toggleMenuBar()} height='30vh' width='10%' src={"../../hamburger.png"} alt='hamburger_logo' />
        <a href='/'><img className='ytimg' height='30vh' width='30%' src={isDarkTheme?YOUTUBE_URL:YOUTUBE_URL_B} alt='youtube_logo' style={{ marginLeft: '2%' }} /></a>
      </div>
      <div>
        <input style={{backgroundColor:isDarkTheme?'black':'white'}} value={searchText} onFocus={() => setSuggestion(true)} onBlur={() => setTimeout(()=>setSuggestion(false),400)} onChange={(e) => setSearchText(e.target.value)} type='text' className='Search-input' placeholder='Search' ></input>
        <a href={"/search?s="+searchText} className='Search-button' type='text'>🔍</a>
      </div>
      <div>
        <img height='30vh' src={USER_URL} alt='User_logo' style={{ borderRadius: '50%', margin: '2%' }} />
        <img height='30vh' onClick={() => dispatch(toggleTheme())} src={darkTheme} alt='dark_theme' style={{ borderRadius: '50%',margin:'2%' }} />
      </div>
    </div>
    {suggestion && <div  className='suggestion'>
      {search && search.splice(0,8).map((item)=><a className='suggestion-items' href={"/search?s="+item.snippet.title} key={item.id.videoId} >
      🔍{item.snippet.title}
      </a>)}
    </div>}
  </>
  )
}

export default Header