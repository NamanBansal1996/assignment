import React from 'react'
import team from "./images/team.jpg";

export default function FirstSection() {
  return (
<div className="container mt-8">
    <div className="row">
        <div className="col-6 text-capitalize  mt-8 pr-2">
            <h1 className="fw-bold ">empowering youth for a brighter future:</h1>
            <h1 className="fw-bold text-primary" >UNYN's impact on each individuals </h1>
        </div>
          
        <div className='secondsection col-6'>
            <p className="text-body-secondary fs-6">
                 United Youth Network(UYN) is a dedicate0d to empowering individuals by providing them with opportunites for growth and developement.<br/>
                 Through our international student society, we aim to nurture their talents and unlock their potential.
                 By investing in the youth today, we believe that we can create a brighter and more promising fuuture for tommorow.</p>
        </div>
    </div>
    <img src={team} alt='team' style={{ width:"100%", height:"30%"}}/>
</div>
  )
}
