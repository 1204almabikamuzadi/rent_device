import React,{useState} from 'react'


export default function DeviceCard() {
    const [device,setDevice]=useState()
    
    return (
        <div>
            <img className="card-img-top" src="..." alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">Device name</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div className="card-body">
    
    <a href="#" className="card-link">Add to Cart</a>
  </div>
        </div>
    )
}
