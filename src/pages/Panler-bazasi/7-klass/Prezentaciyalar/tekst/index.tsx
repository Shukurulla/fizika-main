import React from 'react'
import { Link } from 'react-router-dom'

export const PrezentatsiyaTekst7: React.FC = () => {

  return (
    <div className="list">
      <h2>Prezentaciyalar</h2>
      <ul>
        <Link to={'/panler-bazasi/7-klass/Prezentaciyalar/tekst/shinjirdin-bir-bolegi-ushin-om-nizami'}>
          <li><span>Shınjırdıń bir bólegi ushın Om nızamı</span></li>
        </Link>
        <Link to={'/panler-bazasi/7-klass/Prezentaciyalar/tekst/tok-kushi'}>
          <li><span>Tok kúshi</span></li>
        </Link>
        <Link to={'/panler-bazasi/7-klass/Prezentaciyalar/tekst/elektr-kernewi-ham-oni-olshew'}>
          <li><span>Elektr kernewi hám onı ólshew</span></li>
        </Link>
        <Link to={'/panler-bazasi/7-klass/Prezentaciyalar/tekst/elektr-qarsiligi'}>
          <li><span>Elektr qarsılıǵı</span></li>
        </Link>
        <Link to={'/panler-bazasi/7-klass/Prezentaciyalar/tekst/rezistorlar-reostatlar'}>
          <li><span>Rezistorlar. Reostatlar</span></li>
        </Link>
      </ul>
    </div>
  )
}