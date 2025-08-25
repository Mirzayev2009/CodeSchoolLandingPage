import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState("all");
    const [featuredCourses, setFeaturedCourses] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await fetch('/featuredCourses.json');
                const data = await response.json();
                setFeaturedCourses(data);
            } catch (error) {
                console.error("Error fetching courses data:", error);
            }
        }
        fetchCourses();
    }, [])


  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={"courses"} navigateToPage={navigate} />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-purple-600 to-purple-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Courses
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Explore our comprehensive range of courses designed to help you
              achieve your learning goals
            </p>
          </div>
        </section>
        {/* Course Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                onClick={() => setActiveTab("all")}
                className={`!rounded-button whitespace-nowrap ${
                  activeTab === "all"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                All Courses
              </Button>
              <Button
                onClick={() => setActiveTab("programming")}
                className={`!rounded-button whitespace-nowrap ${
                  activeTab === "programming"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Programming
              </Button>
              <Button
                onClick={() => setActiveTab("languages")}
                className={`!rounded-button whitespace-nowrap ${
                  activeTab === "languages"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Languages
              </Button>
              <Button
                onClick={() => setActiveTab("mathematics")}
                className={`!rounded-button whitespace-nowrap ${
                  activeTab === "mathematics"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Mathematics
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredCourses.map((course, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => navigateToPage(course.path)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-600 font-semibold">
                        $299
                      </span>
                      <Button className="!rounded-button whitespace-nowrap bg-purple-600 text-white">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )};

  export default CoursesPage;