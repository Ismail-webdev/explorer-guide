import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ChevronDown } from 'lucide-react'
import Places from '../data.json'
import React from 'react'
import Card from './Card'

const AccordionComp = () => {
  return (
    <div>
      <Accordion  className='accordion'>
        <AccordionSummary
          expandIcon={<ChevronDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        Wonder Of India
        </AccordionSummary>
        <AccordionDetails className='places'>
        {Places.wonder && Places.wonder.map((place)=>{
  return(
     <Card key={place.id} name={place.name} image={place.image} location={place.location} yearbuilt={place.yearBuilt} description={place.description}/>
  ) 
 })}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionComp
