import React from 'react'
import { Link } from 'react-router-dom'

export const MaseleTekst8: React.FC = () => {

  return (
    <div className="list">
      <h2>Máseleler</h2>
      <ul>
        <Link to={'/panler-bazasi/8-klass/masele/tekst/7-shinigiw'}>
          <li><span>7-shınıǵıw</span></li>
        </Link>
        <Link to={'/panler-bazasi/8-klass/masele/tekst/9-shinigiw'}>
          <li><span>9-shınıǵıw</span></li>
        </Link>
        <Link to={'/panler-bazasi/8-klass/masele/tekst/10-shinigiw'}>
          <li><span>10-shınıǵıw</span></li>
        </Link>
        <Link to={'/panler-bazasi/8-klass/masele/tekst/13-shinigiw'}>
          <li><span>13-shınıǵıw</span></li>
        </Link>
        <Link to={'/panler-bazasi/8-klass/masele/tekst/18-shinigiw'}>
          <li><span>18-shınıǵıw</span></li>
        </Link>
        <Link to={'/panler-bazasi/8-klass/masele/tekst/29-shinigiw'}>
          <li><span>29-shınıǵıw</span></li>
        </Link>
      </ul>
    </div>
  )
}