import React from 'react'
import { Link } from 'react-router-dom'

export const MaseleTekst10: React.FC = () => {

  return (
    <div className="list">
      <h2>Máseleler</h2>
      <ul>
        <Link to={'/panler-bazasi/10-klass/masele/tekst/28-shinigiw'}>
          <li><span>28-shınıǵıw</span></li>
        </Link>
      </ul>
    </div>
  )
}