import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {

  const [articles, setArticles] = useState([]);


  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=${category}&apiKey=b753d1c204cf46f6b775076d1aa0b98d`
    fetch(url).then(res => res.json()).then(data => setArticles(data.articles));
  }, [category])

  return (
    <div className='text-center mx-1'>
      <h2 className='text-center mt-3'>Latest <span className='badge bg-danger'>News</span></h2>
      {articles.map((news, ind) => (
        <NewsItem key={ind} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  )
}

export default NewsBoard