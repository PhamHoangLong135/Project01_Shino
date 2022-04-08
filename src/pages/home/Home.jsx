import React from 'react';
import './home.scss'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        
        <Footer/>
    </div>
  )
}

export default Home