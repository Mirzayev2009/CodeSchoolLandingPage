  import React from "react";
  
  
  
  const Footer = () =>{

    return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-graduation-cap text-2xl text-blue-400 mr-2"></i>
              <span className="text-xl font-bold">CodeSchool</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering students worldwide with quality education in coding,
              mathematics, and English.
            </p>
            <div className="flex space-x-4">
              <i className="fab fa-facebook text-xl text-gray-400 hover:text-blue-400 cursor-pointer"></i>
              <i className="fab fa-twitter text-xl text-gray-400 hover:text-blue-400 cursor-pointer"></i>
              <i className="fab fa-instagram text-xl text-gray-400 hover:text-blue-400 cursor-pointer"></i>
              <i className="fab fa-linkedin text-xl text-gray-400 hover:text-blue-400 cursor-pointer"></i>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateToPage("home")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("courses-section")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Our Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("success-section")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("forum-section")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateToPage("coding")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToPage("physics")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Data Science
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToPage("math")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Mathematics
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToPage("english")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  English Language
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-gray-400 flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                info@codeschool.com
              </p>
              <p className="text-gray-400 flex items-center">
                <i className="fas fa-phone mr-2"></i>
                +1 (555) 123-4567
              </p>
              <p className="text-gray-400 flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                123 Education St, Learning City
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 CodeSchool. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  )};

  export default Footer;