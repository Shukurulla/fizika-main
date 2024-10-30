import React, { useEffect } from 'react'
import { LayoutPage } from './Layouts'
import { useNavigate } from 'react-router-dom'

const App:React.FC = () => {
  let navigate = useNavigate()

  useEffect(() => {
    window.localStorage.clear()
    navigate('/login')
  }, [])

  return (<LayoutPage/>)
}

export default App