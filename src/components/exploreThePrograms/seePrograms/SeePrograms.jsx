import React from 'react'
import './seePrograms.css'


const SeePrograms = (props) => {
  return (
    <div>
       <div id="seePrograms_main">
              <img src={props.img} alt="" />
              <hr />
              <h1>{props.name}</h1>
              <hr />
              <div id="seePrograms_seePrograms">
              <h2>See Programs</h2>
              </div>
              
       </div>
      
    </div>
  )
}



export default SeePrograms