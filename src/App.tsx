import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Home from './pages/Home'
import PronunciationGuide from './pages/PronunciationGuide'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pronunciation-guide" element={<PronunciationGuide />} />
            <Route path="/lessons" element={<div style={{padding: '4rem 2rem', textAlign: 'center'}}><h1>पाठ अनुभाग - जल्द आ रहा है!</h1><p>यहाँ इंटरैक्टिव पाठ होंगे।</p></div>} />
            <Route path="/practice" element={<div style={{padding: '4rem 2rem', textAlign: 'center'}}><h1>अभ्यास अनुभाग - जल्द आ रहा है!</h1><p>यहाँ व्यक्तिगत अभ्यास होंगे।</p></div>} />
            <Route path="/progress" element={<div style={{padding: '4rem 2rem', textAlign: 'center'}}><h1>प्रगति ट्रैकिंग - जल्द आ रहा है!</h1><p>यहाँ आपकी सीखने की प्रगति दिखेगी।</p></div>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
