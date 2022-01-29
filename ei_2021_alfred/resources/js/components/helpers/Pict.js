import React from 'react'

const handleDefault=(e)=>{
    e.target.src="http://127.0.0.1:8000/avatar/default.jpg"
   
}
const mystyle = {
    width:'50px',
    height:'50px'
  };

function Pict(props) {
    return (
        <img src={props.src} style={props.style} onError={handleDefault} className={props.className} alt="image" />
    )
}

export default Pict
