import React from 'react'

const ShimmerUI = () => {
  return (
    <>
        {new Array(9).fill(0).map((item,i)=><div key={i} className='shimmer-card'>
            <div style={{width:'100%',height:'150px',borderBottom:'1px solid gray'}}></div>
            <div style={{width:'100%',height:'50px',borderBottom:'1px solid gray'}}></div>
        </div>)}
    </>
  )
}

export default ShimmerUI;