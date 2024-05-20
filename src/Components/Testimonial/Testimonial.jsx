import React from 'react'
import Testimonial_img from '../Assets/testimonials-img.jpg';
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className='Testimonial'>
        <div className="test_row">
            <div className="text-col-6">
                <img src={Testimonial_img} alt="" />
            </div>
            <div className="text-col-6">
               <div className='test-text'>
               <i class="fa fa-quote-left fa-3x"></i>
               <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
                </p>
                <h3>Amman Payne</h3>
                <h5>CEO Of Figma</h5>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial