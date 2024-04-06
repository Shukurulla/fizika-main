import React from 'react'
import { Link } from 'react-router-dom'

export const AmeliyTekst8: React.FC = () => {

  return (
    <div className="list">
      <h2>Ámeliy tapsırmalar</h2>
      <ul>
        <Link to={'/panler-bazasi/8-klass/ameliy/tekst/tok-dereklerin-tutastiriw'}>
          <li><span>Tok dereklerin tutastırıw</span></li>
        </Link>
      </ul>
    </div>
  )
}