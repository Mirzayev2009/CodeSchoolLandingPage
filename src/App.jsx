import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/home/Homepage';
import Enroll from './pages/Enrollment/Enroll';
import CourseDetail from './pages/courses/CourseDetail';
import Teachers from './pages/teachers/Teachers';
import Courses from './pages/courses/Courses';
import TeacherDetail from './pages/teachers/TeacherDetail';
import Results from './pages/results/Results';

function App() {
  return (
    <div className="App">
      <Router>
     
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:id" element={<TeacherDetail />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App