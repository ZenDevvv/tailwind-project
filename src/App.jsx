import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Subscription from './components/Subscription'
import Footer from './components/Footer'
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Subscription />
      <Footer />
    </div>
  )
}
