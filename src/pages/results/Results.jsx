import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

const ResultsPage = () => {
  const [codingCount, setCodingCount] = useState(0);
  const [mathCount, setMathCount] = useState(0);
  const [englishCount, setEnglishCount] = useState(0);
  const [currentPage, setCurrentPage] = useState("results");

  useEffect(() => {
    const animateCounter = (setter, target) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 20);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === "success-section") {
          animateCounter(setCodingCount, 15420);
          animateCounter(setMathCount, 12890);
          animateCounter(setEnglishCount, 18650);
        }
      });
    });

    const successSection = document.getElementById("success-section");
    if (successSection) observer.observe(successSection);

    return () => observer.disconnect();
  }, [currentPage]);


    return (
    <div className="min-h-screen bg-white">
        <Navigation currentPage={currentPage} navigateToPage={setCurrentPage} />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Success Stories
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover how our students have transformed their lives through
              education and achieved remarkable success in their careers
            </p>
          </div>
        </section>
        {/* Statistics Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {codingCount.toLocaleString()}+
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Coding Graduates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Successfully employed in tech companies
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100">
                <CardHeader>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    94%
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Employment Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Within 6 months of graduation</p>
                </CardContent>
              </Card>
              <Card className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardHeader>
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    45+
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Partner Companies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Hiring our graduates</p>
                </CardContent>
              </Card>
              <Card className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardHeader>
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    $75K
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Average Salary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">For entry-level positions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Success Stories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Student Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20young%20woman%20in%20tech%20office%20environment%20working%20on%20computer%2C%20modern%20workspace%20with%20multiple%20screens%2C%20casual%20business%20attire%2C%20confident%20pose&width=400&height=300&seq=success1&orientation=landscape"
                    alt="Success Story 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Sarah Johnson
                  </CardTitle>
                  <p className="text-blue-600">Software Engineer at Google</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "The coding bootcamp completely transformed my career.
                    Within 3 months of graduating, I landed my dream job at
                    Google."
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=young%20male%20professional%20in%20modern%20startup%20office%20environment%2C%20business%20casual%20attire%2C%20working%20on%20laptop%2C%20collaborative%20workspace%20background&width=400&height=300&seq=success2&orientation=landscape"
                    alt="Success Story 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Michael Chen
                  </CardTitle>
                  <p className="text-blue-600">Data Scientist at Amazon</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "The mathematics program gave me the foundation I needed to
                    excel in data science. Now I'm leading projects at Amazon."
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20woman%20presenting%20in%20corporate%20meeting%20room%2C%20business%20formal%20attire%2C%20confident%20pose%2C%20modern%20office%20setting%20with%20presentation%20screen&width=400&height=300&seq=success3&orientation=landscape"
                    alt="Success Story 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Emily Rodriguez
                  </CardTitle>
                  <p className="text-blue-600">Technical Lead at Microsoft</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "The comprehensive curriculum and expert mentorship helped
                    me advance to a leadership position at Microsoft."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )};

  export default ResultsPage;