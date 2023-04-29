import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <section className='contact'>
           <div className="container">
              <h2 className="title">Contact <span> US</span></h2>
               <form action="">
                 <input type="text" placeholder='Name' />
                 <input type="text" placeholder='Number' />
                 <input type="email" placeholder='Email' />
                 <textarea name="" id="" cols="30" rows="10" placeholder='Meassage'></textarea>
               </form>
           </div>
    </section>
  )
}

export default Contact
