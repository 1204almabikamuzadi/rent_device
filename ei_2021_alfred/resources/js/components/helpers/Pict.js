import React from 'react'

const handleDefault=(e)=>{
    e.target.src="http://127.0.0.1:8000/avatar/default.jpg"
   
}

function Pict(props) {
    return (
        <img src={props.src} onError={handleDefault} alt="" />
    )
}

export default Pict
