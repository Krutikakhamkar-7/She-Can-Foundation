import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>She Can Foundation</strong>
          <p className="muted">Building brighter futures through education and empowerment.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="links">
            <li><a href="#about">About</a></li>
            <li><a href="#impact">Impact</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="socials">
            <a aria-label="Twitter" href="#">Twitter</a>
            <a aria-label="Facebook" href="#">Facebook</a>
            <a aria-label="Instagram" href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} She Can Foundation. All rights reserved.</div>
    </footer>
  )
}
