import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import Home from './pages/Home'
import RouteDetail from './pages/RouteDetail'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/route/:id" element={<RouteDetail />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
