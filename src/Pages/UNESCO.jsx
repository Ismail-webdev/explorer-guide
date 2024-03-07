import React from 'react'
import Sites from '../data.json'
import './css/Destinations.css'
import SiteCards from '../components/SiteCards'
const UNESCO = () => {
  return (
   <>
   <div className="heading-guide">
    <h2>UNESCO SITES OF INDIA</h2>
   </div>
    <div className='Destinations'>
      {Sites['unesco-site'] && Sites['unesco-site'].map((site)=>{
        return(
       <div className='card' key={site.id} >
          <SiteCards name={site.name} image={site.img} location={site.location} besttime={site['best-time']}/>
        </div>
       ) 
      })}
    </div>
   </>
  )
}

export default UNESCO
