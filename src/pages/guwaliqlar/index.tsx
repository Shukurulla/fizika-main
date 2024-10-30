import { Link } from 'react-router-dom'

export const Guwaliqlar = () => {

  return (
    <div className="list">
      <h2>Gúwalıqlar</h2>
      <ul>
        <Link to={'/guwaliqlar/1'}>
          <li><span>Fizika fanidan raqamli mobil glossariy</span></li>
        </Link>
        <Link to={'/guwaliqlar/2'}>
          <li><span>Maktab fizikasining elektr bo'limidan raqamli virtual laboratoriya</span></li>
        </Link>
      </ul>
    </div>
  )
}