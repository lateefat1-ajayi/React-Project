import React from 'react'
import { Allroutes } from "./routes/Allroutes"
import {Footer, Header } from "./components"

const App = () => {
  return (
    <div className='App dark:bg-dark '>
      <Header/>
      <Allroutes/>
      <Footer/>
    </div>
  )
}

export default App
