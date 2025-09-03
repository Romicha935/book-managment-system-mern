
import './App.css'
import { Outlet } from 'react-router'

import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <Navbar/>
    
    <main className='min-h-[calc(100vh-100px)] mt-16'><Outlet/></main>
    </>
  )
}

export default App
