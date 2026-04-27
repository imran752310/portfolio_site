import React from 'react'
import './Counter.css'
import CountUp from 'react-countup';

const stats = [
  { end: 58, label: 'Happy Clients', suffix: '+' },
  { end: 89, label: 'Projects Done', suffix: '' },
  { end: 16, label: 'Awards Winning', suffix: '' },
  { end: 7, label: 'Years Experience', suffix: '+' }
]

const Counter = () => {
  return (
    <section className="counter-section">
      <div className="counter-container">
        {stats.map((stat, index) => (
          <div key={index} className="counter-card">
            <div className="counter-number">
              <CountUp end={stat.end} duration={4} enableScrollSpy scrollSpyOnce />
              <span className="suffix">{stat.suffix}</span>
            </div>
            <div className="counter-label">{stat.label}</div>
            <div className="counter-line"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Counter;
