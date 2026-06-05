import React from 'react'

function Card({icon, title, children}){
  return (
    <div className="card fade-up">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
}

export default function About(){
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About She Can Foundation</h2>
        <p className="lead">We create pathways for women to access education, develop marketable skills, and lead in their communities.</p>
        <div className="grid grid-3">
          <Card icon={<svg width="28" height="28" viewBox="0 0 24 24"><path fill="#7C4DFF" d="M12 2L2 7l10 5 10-5z"/></svg>} title="Education Support">Scholarships, learning resources, and school partnerships.</Card>
          <Card icon={<svg width="28" height="28" viewBox="0 0 24 24"><path fill="#4DA3FF" d="M12 2a10 10 0 100 20 10 10 0 000-20z"/></svg>} title="Skill Development">Hands-on workshops and vocational training for careers.</Card>
          <Card icon={<svg width="28" height="28" viewBox="0 0 24 24"><path fill="#9C6BFF" d="M12 2c2 0 4 4 4 8s-2 8-4 8-4-4-4-8 2-8 4-8z"/></svg>} title="Community Impact">Local programs that amplify women's voices and leadership.</Card>
        </div>
      </div>
    </section>
  )
}
