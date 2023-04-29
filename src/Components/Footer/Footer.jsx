import React from 'react'
import './Footer.css'
import{Link} from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
         <div className="f-wrapper">
             <div className="f-item">
                 <h2 className="f-title">choose.</h2>
                  <span>Commodo</span>
                  <span>consequat. Duis a</span>
                  <span>ute irure dolor</span>
                  <span>in reprehenderit</span>
                  <span>in voluptate</span>
             </div>
             <div className="f-item">
                 <h2 className="f-title">get support.</h2>
                  <p><i className="fas fa-map-marker-alt"></i>Address : Laos Vientaine</p>
                  <p><i className="fas fa-phone"></i>Call : +01 1234567890</p>
                  <p><i className="far fa-envelope"></i>Email : demo@gmail.com</p>
             </div>
             <div className="f-item">
              <h2 className="f-title">Company.</h2>
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/hosting">Hosting</Link>
               <Link to="/domain">domain</Link>
               <Link to="/contact">Contact</Link>
             </div>
             <div className="f-item">
                 <h2 className="f-title">Survices</h2>
                 <span>Commodo</span>
                  <span>consequat. Duis a</span>
                  <span>ute irure dolor</span>
                  <span>in reprehenderit</span>
                  <span>in voluptate</span>
             </div>
           
         </div>
         <hr />
         <span className='copyright'>© 2020 All Rights Reserved.  <a href="#">FREE CSS TEMPLATE</a> </span>
    </footer>
  )
}

export default Footer
