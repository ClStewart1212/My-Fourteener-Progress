import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import PeakInfo from './pages/peakInfo.jsx'

import './styles.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/peakInfo" element={<PeakInfo />} />
    </Routes>
  )
}

export default App
