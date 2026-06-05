import React, {useEffect, useState} from 'react'

function Stat({label, value}){
  const [count, setCount] = useState(0)
  useEffect(()=>{
    let start = 0
    const end = value
    const duration = 900
    const stepTime = Math.max(Math.floor(duration / end), 10)
    const timer = setInterval(()=>{
      start += Math.ceil(end / (duration / stepTime))
      if(start >= end){
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, stepTime)
    return ()=> clearInterval(timer)
  }, [value])

  return (
    <div className="stat card fade-up">
      <div className="stat-value">{count}{value>100? '+' : ''}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Impact(){
  return (
    <section className="section alt" aria-labelledby="impact-title">
      <div className="container">
        <h2 id="impact-title" className="section-title">Our Impact</h2>
        <div className="grid grid-3 stats">
          <Stat label="Women Empowered" value={500} />
          <Stat label="Workshops Conducted" value={100} />
          <Stat label="Communities Reached" value={50} />
        </div>
      </div>
    </section>
  )
}
