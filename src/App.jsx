import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import MainLayout from './layouts/MainLayout'

const App = () => {
  return (
    <div className=' bg-sky-400'>
    <BrowserRouter>
    <MainLayout>
    <Routes />
    </MainLayout>
    </BrowserRouter>
    </div>
  )
}

export default App