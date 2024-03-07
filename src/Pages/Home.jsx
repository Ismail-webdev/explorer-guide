import React from 'react'
import Places from '../data.json'
import Card from '../components/Card'
import Img from '../images/Cover.jpg'
import { Quote } from 'lucide-react'

const Home = () => {
  return (
   <div>
   <div className='cover'>
  <img src={Img}x alt='cover-img' />
 <div className='overlay'>
 <p><Quote className='quote-left'/> Explore the cultural richness and diverse landscapes of India through our travel guide <Quote /></p>
 <span className='author'><strong>-Explorer Guide</strong></span>
 </div> 
  </div>
<section id='cards'>
<div className="container">
 <h2>Wonder Of India</h2>
 <div className='card-container'>
 {Places.wonder && Places.wonder.map((place)=>{
  return(
     <Card key={place.id} name={place.name} image={place.image} location={place.location} yearbuilt={place.yearBuilt} description={place.description}/>
  ) 
 })}
 </div>
 </div>
 <div className="container">
  <h2>Popular Places</h2>
  <div className="card-container">
    {Places.places && Places.places.map((popular)=>{
        return(
          <Card key={popular.id} name={popular.name} image={popular.image} location={popular.location} rating={popular.rating} description={popular.description}/>
       ) 
    })}
  </div>
 </div>
 <div className="container">
  <h2>Adventure Activites In India</h2>
  <div className="card-container">
    {Places.adventure && Places.adventure.map((adventure)=>{
        return(
          <Card key={adventure.id} name={adventure.activity} image={adventure.img} location={adventure.location}  description={adventure.description} rating={adventure.rating}/>
       ) 
    })}
  </div>
 </div>
</section>
   </div>
  )
}

export default Home
