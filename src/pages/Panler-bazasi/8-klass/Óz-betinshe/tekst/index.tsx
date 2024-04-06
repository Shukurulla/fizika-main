import React from 'react'
import { Link } from 'react-router-dom'

export const OzBetinsheTekst8: React.FC = () => {

  return (
    <div className="list">
      <h2>Óz-betinshe tálim shınıǵıwları</h2>
      <ul>
        <Link to={'/panler-bazasi/8-klass/oz-betinshe/tekst/tutiniwshilardi-aralas-tutastiriw'}>
          <li><span>Tutınıwshılardı aralas tutastırıw</span></li>
        </Link>
      </ul>
    </div>
  )
}