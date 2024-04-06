import React from 'react'
import { Link } from 'react-router-dom'

export const AmeliyTekst7: React.FC = () => {

  return (
    <div className="list">
      <h2>Ámeliy-shınıǵıwlar</h2>
      <ul>
        <Link to={'/panler-bazasi/7-klass/ameliy/tekst/Ampermetr-jardeminde-tutınıwshıdan-ótip-atırǵan-tok-kúshin-ólshew.pdf'}>
          <li><span>Ampermetr járdeminde tutınıwshıdan ótip atırǵan tok kúshin ólshew</span></li>
        </Link>
        <Link to={'/panler-bazasi/7-klass/ameliy/tekst/Ommetr-járdeminde-rezistordıń-qarsılıǵın-ólshew.pdf'}>
          <li><span>Ommetr járdeminde rezistordıń qarsılıǵın ólshew</span></li>
        </Link>
        <Link to={'/panler-bazasi/7-klass/ameliy/tekst/Reostat-járdeminde-tok-kúshin-tártiplestiriw.pdf'}>
          <li><span>Reostat járdeminde tok kúshin tártiplestiriw</span></li>
        </Link>
      </ul>
    </div>
  )
}