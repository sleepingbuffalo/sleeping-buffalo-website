import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import HotSprings from './pages/HotSprings'
import Accommodations from './pages/Accommodations'
import Dining from './pages/Dining'
import RVPark from './pages/RVPark'
import Events from './pages/Events'
import History from './pages/History'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hot-springs" element={<HotSprings />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/rv-park" element={<RVPark />} />
          <Route path="/events" element={<Events />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
