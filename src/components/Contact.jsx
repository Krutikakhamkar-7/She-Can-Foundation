import React, {useState} from 'react'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  function validate(){
    const e = {}
    if(!name.trim()) e.name = 'Name is required'
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) e.email = 'Valid email required'
    if(message.trim().length < 10) e.message = 'Message should be at least 10 characters'
    return e
  }

  function handleSubmit(ev){
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if(Object.keys(e).length === 0){
      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
      setTimeout(()=> setSuccess(false), 4000)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-grid card fade-up" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Name</label>
            <input value={name} onChange={e=>setName(e.target.value)} />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group full">
            <label>Message</label>
            <textarea rows="5" value={message} onChange={e=>setMessage(e.target.value)} />
            {errors.message && <div className="error">{errors.message}</div>}
          </div>
          <div className="form-actions">
            <button className="btn primary" type="submit">Submit</button>
            {success && <span className="success">Form Submitted Successfully!</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
