import React from 'react'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Portfolio from '../Components/Portfolio/Portfolio'
import Counter from '../Components/Counter/Counter'
import Testimonial from '../Components/Testimonial/Testimonial'
import Card from '../Components/Card/Card'
const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Portfolio />
        <Counter />
        <Testimonial/>
        <Card />
    </div>
  )
}

export default Home