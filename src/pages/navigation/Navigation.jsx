  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  


  const Navigation = ({currentPage, navigateToPage}) => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrollToSection = (sectionId) => {
    if (currentPage !== "home") {
      navigateToPage("home");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  }

  const navigate = useNavigate()
  return(


    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <i className="fas fa-graduation-cap text-2xl text-blue-600 mr-2"></i>
            <span className="text-xl font-bold text-gray-900">CodeSchool</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("success-section")}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection("courses-section")}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("experts-section")}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Teachers
            </button>
            <button
              onClick={() => scrollToSection("forum-section")}
              className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Register
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 cursor-pointer"
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("results")}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              Courses
            </button>
            <button
              onClick={() =>scrollToSection("teachers")}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              Teachers
            </button>
            <button
              onClick={() => scrollToSection("forum")}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  )};

  export default Navigation;