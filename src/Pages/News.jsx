import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard';

const News = () => {
    const [data,setData] = useState([]);

useEffect(() => {
  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'in', 
          apiKey: import.meta.env.VITE_API_KEY,
        },
      });
      setData(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  fetchNews();
  },[]);
  return (
    <div className="heading-guide">
   <div style={{display:'flex',flexWrap:'wrap', justifyContent:"space-around"}}>
   {data && data.map((news,index)=>(
     <NewsCard key={index} news={news}/>
    ))}
   </div>
    </div>
  )
}

export default News