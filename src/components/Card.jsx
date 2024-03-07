import React, { useState } from 'react'
import './css/Card.css'
import { Modal,Box,Typography,ImageList } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#F0E6EF',
  border: '2px solid #000',
  borderColor: "black",
  boxShadow: 2,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

function Card({name,image,location,rating,yearbuilt,description}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <div className='card' onClick={handleOpen}>
      <img src={image} alt={name}/>
      <div className='card-body'>
        <h3>{name}</h3>
        <p>{location}</p>
        <p>{rating !=null ? `${rating}⭐`: `🏗️${yearbuilt}`}</p>
      </div>
    </div> 
    <Modal open={open} onClose={handleClose}  aria-labelledby="modal-modal-title"  aria-describedby="modal-modal-description">
    <Box sx={style}>
    <Typography id="modal-modal-title" variant="h5" component="h2">
            {name}
          </Typography>
    <ImageList>
      <div className='modal-img'>
      <img src={image} alt={name} width={550} height={300}/>
      </div>
    </ImageList>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
          </Typography>
        </Box>
    </Modal>
    </>
  )
}

export default Card
