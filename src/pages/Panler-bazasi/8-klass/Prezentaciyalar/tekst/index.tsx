import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export const PrezentatsiyaTekst8: React.FC = () => {

  return (
    <div className="list">
      <h2>Prezentaciyalar</h2>
      <ul>
        <Link to={'/panler-bazasi/8-klass/Prezentaciyalar/tekst/elektr-toginin-quwatliligi'}>
          <li><span>Elektr togınıń quwatlılıǵı</span></li>
        </Link>
        <Link to={'/panler-bazasi/8-klass/Prezentaciyalar/tekst/elektr-toginin-jumisi'}>
          <li><span>Elektr togınıń jumısı</span></li>
        </Link>
        <Link to={'/panler-bazasi/8-klass/Prezentaciyalar/tekst/kondensatorlardi-parallel-ham-izbe-iz-jalgaw'}>
          <li><span>Kondensatorlardı parallel hám izbe-iz jalǵaw</span></li>
        </Link>
        <Link to={'/panler-bazasi/8-klass/Prezentaciyalar/tekst/elektr-siyimliligi-kondensatorlar'}>
          <li><span>Elektr sıyımlılıǵı. Kondensatorlar</span></li>
        </Link>
        <Link to={'/panler-bazasi/8-klass/Prezentaciyalar/tekst/tutiniwshilardi-parallel-tutastiriw'}>
          <li><span>Tutınıwshılardı parallel tutastırıw</span></li>
        </Link>
        <Link to={'/panler-bazasi/8-klass/Prezentaciyalar/tekst/tutiniwshilardi-izbe-iz-tutastiriw'}>
          <li><span>Tutınıwshılardı izbe-iz tutastırıw</span></li>
        </Link>
      </ul>
    </div>
  )
}