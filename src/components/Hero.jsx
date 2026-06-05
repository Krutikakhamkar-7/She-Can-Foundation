import React from 'react'

export default function Hero() {
  return (
    <header className="hero section">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="title">Empowering Women, Creating Opportunities</h1>
          <p className="subtitle">She Can Foundation supports education, skills training, and community programs that help women thrive.</p>
          <div className="hero-cta">
            <a className="btn primary" href="#contact">Join Us</a>
            <a className="btn ghost" href="#about">Learn More</a>
          </div>
        </div>
        <div className="hero-illustration" aria-hidden>
          <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#7C4DFF" />
                <stop offset="1" stopColor="#4DA3FF" />
              </linearGradient>
            </defs>
            <rect rx="20" width="100%" height="100%" fill="#f6f8ff" />
            <g transform="translate(40,40)">
              <circle cx="120" cy="80" r="60" fill="url(#g1)" opacity="0.12" />
              <g transform="translate(200,20)">
                <ellipse cx="60" cy="150" rx="70" ry="30" fill="#EDE7FF" />
                <path d="M10 200 C 60 120, 140 120, 190 200 L 190 260 L 10 260 Z" fill="#fff" stroke="#E6E9FF" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </header>
  )
}
