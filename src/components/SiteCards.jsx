import React from 'react'
import './css/Card.css'

const SiteCards = ({name,image,location,besttime,timerequired,entryfees}) => {
  return (
        <>
         <img src={image} alt={name}/>
            <div className='card-body'>
            <h3>{name}</h3>
            <p>{location}</p>
            <p>{besttime}</p>
            </div>
        </>
  )
}

export default SiteCards
