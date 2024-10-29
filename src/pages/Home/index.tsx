import React from 'react'
import './style.css'
import logo from '../../assets/image/cifrlÍ-talim-ortalÍǵÍ.png'

export const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h1>ÓZBEKISTAN RESPUBLIKASÍ XALÍQ BILIMLENDIRIW MINISTRLIGI</h1>
        <div className='logo-wrap'>
          <img src={logo} />
        </div>
        <h5>S.G. Kaypnazarov</h5>
        <p>Nókis - 2024</p>
      </div>
    </div>
  )
}

export default Home