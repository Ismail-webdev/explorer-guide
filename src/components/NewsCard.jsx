import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material'
import React from 'react'
import notavailable from '../images/Image_not_available.png'
const NewsCard = ({news}) => {
  return (
    <div>
         <Card sx={{ maxWidth: 345 }} style={{marginBottom: 16}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={news.urlToImage ? news.urlToImage : notavailable}
          alt={news.title}
          style={{objectFit: 'cover'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {news.title}<br/>
         <small>{news.author}</small>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default NewsCard
