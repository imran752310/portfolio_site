import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <div className="row">
        <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card" style={{position:'relitive',marginTop:-30}}>
                            <i className='fa fa-book'></i>
                            <div>
                                <h2>Product Design</h2>
                                <p>The technological revolution is changing aspect</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card"style={{position:'relitive',marginTop:30}}>
                            <i className='fa fa-book'></i>
                            <div>
                                <h2>Logo Design</h2>
                                <p>The technological revolution is changing aspect</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card" style={{position:'relitive',marginTop:-30}}>
                            <i className='fa fa-book'></i>
                            <div>
                                <h2>UI Design</h2>
                                <p>The technological revolution is changing aspect</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card" style={{position:'relitive',marginTop:30}}>
                            <i className='fa fa-book'></i>
                            <div>
                                <h2>Icon Design</h2>
                                <p>The technological revolution is changing aspect</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="col-lg-6">
            <div className='about-text'>
                <span>My Skills</span>
                <h1>
                Why Hire Me For Next Project?
                </h1>
                <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                <button>Download CV</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About