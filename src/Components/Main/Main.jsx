import React from 'react'
import About from '../About/About';
import Hosting from '../Hosting/Hosting';
import Home from '../Home/Home';
import './Main.css';
import Domain from '../Domain/Domain';

const Main = () => {
  return (
    <main className='main'>
        <Home />
        <About/>
        <Hosting/>
        <Domain/>
    </main>
  )
}

export default Main