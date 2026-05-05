import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularRoutes from './components/PopularRoutes'
import Promotions from './components/Promotions'
import BusOperators from './components/BusOperators'
import AppDownload from './components/AppDownload'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <PopularRoutes />
        <Promotions />
        <BusOperators />
        <AppDownload />
      </main>
      <Footer />
    </div>
  )
}

export default App
