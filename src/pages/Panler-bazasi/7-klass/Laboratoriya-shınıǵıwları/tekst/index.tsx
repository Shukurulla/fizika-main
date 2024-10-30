import React from 'react'
import { Link } from 'react-router-dom'

export const LabaratoriyaTekst7: React.FC = () => {

  return (
    <div className="list">
      <ul>
        <Link to={'/panler-bazasi/7-klass/laboratoriya-shinigiwlari/tekst/51-tema'}>
          <li><span>51-Tema. Elektr shınjırında tok kúhi hám kernewdi ólshew</span></li>
        </Link>
        <Link to={'/panler-bazasi/7-klass/laboratoriya-shinigiwlari/tekst/57-tema'}>
          <li><span>57-Tema. Om nızamın úyreniw</span></li>
        </Link>
      </ul>
    </div>
  )
}