import React from 'react';
import {Comments, USER_URL} from '../constants';
import { json } from 'react-router-dom';

const Comment=(props)=>{
    const {name,comment,replies}=props.name;
    return (<>
    <div className='comment'>
        <img width='40px' height='40px' alt='user' src={USER_URL}/>
        <b>{name}</b>:<div>{comment}</div>
        
    </div>
    {replies.map((item,i)=><div style={{marginLeft:'20px'}} key={i}><Comment  name={item}/></div>)}
    </>)
}

const Commentcontainer = () => {
    
  return (
    <div className='comment-container'>
        {Comments.map((item,i)=><div style={{margin:'30px'}} key={i}><Comment  name={item}/></div>)}
        
    </div>
  )
}

export default Commentcontainer