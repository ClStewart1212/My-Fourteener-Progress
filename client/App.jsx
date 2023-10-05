import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import HomePage from './pages/HomePage.jsx'
import PeakInfo from './pages/peakInfo.jsx'

import styles from './styles.css'

const queryClient = new QueryClient()

//create app HTML structure
const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/peakInfo" element={<PeakInfo />} />
        </Routes>
      </QueryClientProvider>
    </React.StrictMode>
  )
}

export default App
