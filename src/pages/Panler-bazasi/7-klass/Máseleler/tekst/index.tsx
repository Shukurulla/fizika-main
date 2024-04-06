import React from 'react'
import { Link } from 'react-router-dom'

export const MaseleTekst7: React.FC = () => {

  return (
    <div className="list">
      <h2>Máseleler</h2>
      <ul>
        <Link to={'/panler-bazasi/7-klass/Masele/tekst/33-shinigiw'}>
          <li><span>33-shınıǵıw</span></li>
        </Link>
        <Link to={'/panler-bazasi/7-klass/Masele/tekst/50-tema'}>
          <li><span>50-tema. MÁSELELER SHESHIW</span></li>
        </Link>
      </ul>
    </div>
  )
}