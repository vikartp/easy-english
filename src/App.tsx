import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Home from './pages/Home'
import PronunciationGuide from './pages/PronunciationGuide'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pronunciation-guide" element={<PronunciationGuide />} />
              <Route path="/lessons" element={<div className="py-8 px-4 text-center"><h1 className="text-2xl font-bold mb-4">पाठ अनुभाग - जल्द आ रहा है!</h1><p className="text-gray-600 dark:text-gray-400">यहाँ इंटरैक्टिव पाठ होंगे।</p></div>} />
              <Route path="/practice" element={<div className="py-8 px-4 text-center"><h1 className="text-2xl font-bold mb-4">अभ्यास अनुभाग - जल्द आ रहा है!</h1><p className="text-gray-600 dark:text-gray-400">यहाँ व्यक्तिगत अभ्यास होंगे।</p></div>} />
              <Route path="/progress" element={<div className="py-8 px-4 text-center"><h1 className="text-2xl font-bold mb-4">प्रगति ट्रैकिंग - जल्द आ रहा है!</h1><p className="text-gray-600 dark:text-gray-400">यहाँ आपकी सीखने की प्रगति दिखेगी।</p></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
