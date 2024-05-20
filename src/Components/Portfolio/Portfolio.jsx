import React from 'react'
import './Portfolio.css'
import portfolio_1 from '../Assets/portfolio-1-img.jpg';
import portfolio_2 from '../Assets/portfolio-2-img.jpg'
import portfolio_3 from '../Assets/portfolio-3-img.jpg'

const Portfolio = () => {
  return (
    <div className='potfolio'>
        {/* ist row start */}
        <div className="row">  
            <div className="col-lg-6">
                <div className='potfolio-text'>
                <span>Project 1</span>
                <h1>
                Branding Nice Studio
                </h1>
                <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                <button><i className='fa  fa-arrow-right'></i>  Read More</button>
                 </div>
            </div>
            <div className="col-lg-6">
                  <div className='img-dev'>
                  <img src={portfolio_1} alt="" />
                  </div>
                </div>
        </div>
         {/* ist row end */}
          {/* 2nd row start */}
        <div className="row">  
            <div className="col-lg-6">
                  <div className='img-dev'>
                  <img src={portfolio_2} alt="" />
                  </div>
                </div>
                <div className="col-lg-6 ">
                <div className='potfolio-text'>
                <span>Project 2</span>
                <h1>
                Branding Nice Studio
                </h1>
                <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                <button><i className='fa  fa-arrow-right'></i>  Read More</button>
                 </div>
            </div>
        </div>
          {/* 2nd row end */}
           {/* ist row start */}
        <div className="row">  
            <div className="col-lg-6">
                <div className='potfolio-text'>
                <span>Project 3</span>
                <h1>
                Branding Nice Studio
                </h1>
                <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                <button><i className='fa  fa-arrow-right'></i>  Read More</button>
                 </div>
            </div>
            <div className="col-lg-6">
                  <div className='img-dev'>
                  <img src={portfolio_3} alt="" />
                  </div>
                </div>
        </div>
         {/* ist row end */}
        <div className='btn'>
          <button className='view-tbn'>View All</button>
        </div>
    </div>
  )
}

export default Portfolio