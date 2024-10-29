import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export const PrezentatsiyaTekst10: React.FC = () => {

  return (
    <div className="list">
      <h2>Prezentaciyalar</h2>
      <ul>
        <Link to={'/panler-bazasi/10-klass/Prezentaciyalar/tekst/tok-kushi-ham-toktin-tigizligi'}>
          <li><span>Tok kúshi hám toktıń tıǵızlıǵı</span></li>
        </Link>
        <Link to={'/panler-bazasi/10-klass/Prezentaciyalar/tekst/toliq-shinjir-ushin-om-nizami'}>
          <li><span>Tolıq shınjır ushın Om nızamı</span></li>
        </Link>
      </ul>
    </div>
  )
}