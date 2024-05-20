import React from 'react'
import './Counter.css'
import CountUp from 'react-countup';
const Counter = () => {
  return (
    <div>
        <div className="containe">
    
    <div className="counter-row">

	<div className="four col-md-3">
		<div className="counter-box ">
			<span className="counter">
				<CountUp end={58} duration={6}/>
			</span>
			<p>Happy Client</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box">
			
			<span className="counter">
			<CountUp end={89} duration={6}/>
			</span>
			<p>Projects Done</p>
		</div>
	</div>
	<div className="four col-md-3">
		<div className="counter-box">
			
			<span className="counter">
			<CountUp end={16} duration={2}/>
			</span>
			<p>Awards Winning
</p>
		</div>
	</div>
	<div className="four col-md-3">
		<div className="counter-box">
		
			<span className="counter">
			<CountUp end={9} duration={1}/>	
			</span>
			<p>Years Experiecnce</p>
		</div>
	</div>
  </div>	
</div>
    </div>
  )
}

export default Counter