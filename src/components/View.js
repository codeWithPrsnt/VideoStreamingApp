import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { addMessage } from '../utils/chatSlice';
import { toggleMenu } from '../utils/appSlice';
import CommentContainer from './Comments';


const View = () => {
    const [params]=useSearchParams();
    const id = params.get('v');
    const dispatch = useDispatch();
    const [msg,setMsg]=useState('');
    const chats = useSelector(state=>state.chat.messages);

    const handleMsg=(event)=>{
        setMsg(event.target.value);
        //console.log(event.target.value)
    }

    const handleSubmit=()=>{
        dispatch(addMessage({name:'Prsnt',msg}))
        setMsg('');
    }

    function makeMsg(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKL MNOPQRSTUVWXYZ abcdefghijkl mnopqrstuvwxyz_0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    var nameList = [
        'Time', 'Past', 'Future', 'Dev',
        'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
        'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
        'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
        'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
        'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
        'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
        'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
        'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
        'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
        'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
        'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
        'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
        'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
        'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
        'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
        'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
        'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
        'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
        'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
        'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
      ];
      function generate() {
      var finalName = nameList[Math.floor(Math.random() * nameList.length)];
            return finalName;
          };

    const message=()=>{
        let msg = makeMsg(Math.floor(Math.random()*50));
        let name = generate();
        if (msg.length>0)dispatch(addMessage({name,msg}))
    }


    useEffect(()=>{
        const i = setInterval(()=>message(),1000);
        return ()=>clearInterval(i);
    })
    useEffect(()=>{
        dispatch(toggleMenu(false));
        //document.getElementsByClassName('sidebar')[0].style.position='fixed';
        
    },[])
    return (
        <div className='view'>
            <div style={{width:'100%',display:'flex'}}>
            <iframe
                className='video'
                src={`https://www.youtube.com/embed/${id}`}
                title="Sodhi और Bhide ने Enjoy किये गरम Paranthe | Taarak Mehta Ka Ooltah Chashmah | 21 Sep 2023" 
                width="700px"
                height='500px'
                frameborder="0"
                allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>
            <div className='live-chat'>
                <p style={{textAlign:'center'}}>Live Chat</p>
                <hr></hr>
                <div className='chat'>
                    {chats.map((chat,i)=><div key={i}>
                        <p style={{display:'flex'}} >
                            <b style={{marginRight:'5px',marginLeft:'5px'}}>{chat.name}</b><div>{chat.msg}</div>
                        </p>
                        </div>)}
                </div>
                <div className='input'>
                <input value={msg} onChange={(e)=>handleMsg(e)} type='text' placeholder='write something'/>
                <button  onClick={()=>handleSubmit()} type='button'>Send</button>
                </div>
            </div>
            </div>
            <div>
            <h1>Comments:</h1>
            <CommentContainer/>
            </div>
            
        </div>
    )
}

export default View