import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/home/Homepage';
import CoursesPage from './pages/courses/Courses';
import TeachersPage from './pages/teachers/Teachers';
import ResultsPage from './pages/results/Results';
const App = () => {
  return (
    <div>
      <Router>
        
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="*" element={<HomePage />} />

          </Routes>

        </Router>


    </div>
  )
}

export default App