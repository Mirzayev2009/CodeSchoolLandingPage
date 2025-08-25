// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation  as SwiperNavigation} from "swiper/modules";

import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState("home");
    const [currentSlide, setCurrentSlide] = useState(0);
    const [codingCount, setCodingCount] = useState(0);
    const [activeTab, setActiveTab] = useState("all");
    const [mathCount, setMathCount] = useState(0);
    const [englishCount, setEnglishCount] = useState(0);
    const [isVisible, setIsVisible] = useState({
        success: false,
        courses: false,
        experts: false,
        forum: false,
    });
    const [heroSlides, setHeroSlides] = useState([]);
    const [featuredCourses, setFeaturedCourses] = useState([]);
    const [experts, setExperts] = useState([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id.split("-")[0]]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );
    const sections = ["success", "courses", "experts", "forum"].map((id) =>
      document.getElementById(`${id}-section`)
    );
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () =>
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
  }, [currentPage]);
  const swiperModules = [Pagination, Autoplay, SwiperNavigation ];
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
    if (successSection) {
      observer.observe(successSection);
    }
    return () => observer.disconnect();
  }, [currentPage]);


  // Fetch Hero Slides
  useEffect(() => {
    fetch("/heroSlides.json")
      .then((res) => res.json())
      .then((data) => setHeroSlides(data))
      .catch((err) => console.error("Error loading heroSlides:", err));
  }, []);

  // Fetch Featured Courses
  useEffect(() => {
    fetch("/featuredCourses.json")
      .then((res) => res.json())
      .then((data) => setFeaturedCourses(data))
      .catch((err) => console.error("Error loading featuredCourses:", err));
  }, []);

  // Fetch Experts
  useEffect(() => {
    fetch("/experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data))
      .catch((err) => console.error("Error loading experts:", err));
  }, []);

const navigate = useNavigate()


  return (
    <div className="min-h-screen bg-white">
    <Navigation currentPage={currentPage} navigateToPage={navigate} />
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Swiper
          modules={swiperModules}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          loop={true}
          className="h-full"
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${slide.image}')` }} 
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                        {slide.description}
                      </p>
                      <a
                        href="https://readdy.ai/home/fe6177b6-fd92-473f-aa60-8054a68482b6/462c05aa-f022-474e-a549-4d7117cdd796"
                        data-readdy="true"
                      >
                        <Button className="!rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg cursor-pointer">
                          Enroll Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Our Success Section */}
      <section
        id="success-section"
        className={`py-20 bg-gray-50 transform transition-all duration-1000 ${
          isVisible.success
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thousands of students have achieved their goals through our
              comprehensive educational programs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-code text-2xl text-blue-600"></i>
                </div>
                <CardTitle className="text-3xl font-bold text-blue-600">
                  {codingCount.toLocaleString()}+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Coding Students
                </h3>
                <p className="text-gray-600">
                  Successfully completed our programming courses and landed
                  their dream jobs
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calculator text-2xl text-orange-600"></i>
                </div>
                <CardTitle className="text-3xl font-bold text-orange-600">
                  {mathCount.toLocaleString()}+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Math Students
                </h3>
                <p className="text-gray-600">
                  Achieved excellence in mathematics and improved their academic
                  performance
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-book text-2xl text-green-600"></i>
                </div>
                <CardTitle className="text-3xl font-bold text-green-600">
                  {englishCount.toLocaleString()}+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  English Students
                </h3>
                <p className="text-gray-600">
                  Enhanced their communication skills and achieved fluency in
                  English
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button
              onClick={() => navigate("results")}
              className="!rounded-button whitespace-nowrap bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 cursor-pointer"
            >
              See More Results
            </Button>
          </div>
        </div>
      </section>
      {/* Featured Courses Section */}
      <section
        id="courses-section"
        className={`py-20 bg-white transform transition-all duration-1000 ${
          isVisible.courses
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular courses designed to help you achieve
              your learning goals
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {featuredCourses.map((course, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                onClick={() => navigate("courses")}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
                  ></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                    {course.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Meet Experts Section */}
      <section
        id="experts-section"
        className={`py-20 bg-gray-50 transform transition-all duration-1000 ${
          isVisible.experts
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry professionals and experienced educators who
              are passionate about teaching
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {experts.map((expert, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {expert.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 font-semibold">
                    {expert.subject}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button
              onClick={() => navigate("teachers")}
              className="!rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 cursor-pointer"
            >
              See All Teachers
            </Button>
          </div>
        </div>
      </section>
      {/* Community Forum Section */}
      <section
        id="forum-section"
        className={`py-20 bg-white transform transition-all duration-1000 ${
          isVisible.forum
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join Our Community Forum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with fellow students, share your experiences, and get
              support from our vibrant learning community
            </p>
          </div>
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                Share Your Story
              </CardTitle>
              <CardDescription className="text-gray-600">
                Tell us about yourself and join thousands of students in our
                community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      className="border border-gray-300 text-sm"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      className="border border-gray-300 text-sm"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      className="border border-gray-300 text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      className="border border-gray-300 text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <Input
                      type="number"
                      className="border border-gray-300 text-sm"
                      placeholder="Enter your age"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <Input
                      className="border border-gray-300 text-sm"
                      placeholder="Enter your country"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Education Level *
                    </label>
                    <Input
                      className="border border-gray-300 text-sm"
                      placeholder="e.g., High School, Bachelor's"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Occupation *
                    </label>
                    <Input
                      className="border border-gray-300 text-sm"
                      placeholder="Enter your occupation"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interested Subject *
                    </label>
                    <Input
                      className="border border-gray-300 text-sm"
                      placeholder="Coding, Math, English, etc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Level *
                    </label>
                    <Input
                      className="border border-gray-300 text-sm"
                      placeholder="Beginner, Intermediate, Advanced"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Learning Goals *
                  </label>
                  <Textarea
                    className="border border-gray-300 text-sm"
                    rows={4}
                    placeholder="Tell us about your learning goals and what you hope to achieve..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Comments
                  </label>
                  <Textarea
                    className="border border-gray-300 text-sm"
                    rows={3}
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>
                <div className="text-center">
                  <Button className="!rounded-button whitespace-nowrap bg-green-600 hover:bg-green-700 text-white px-12 py-3 cursor-pointer">
                    Join Community
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default HomePage;