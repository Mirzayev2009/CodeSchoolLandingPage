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
import {
  Pagination,
  Autoplay,
  Navigation as SwiperNavigation,
} from "swiper/modules";

import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import HomePageSections from "./sections";
import Location from "./Location";
import { Link } from "react-router-dom";
import HeroCarousel from "./Swiper";

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
  const [clicked, setClicked] = useState(false);
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
  const swiperModules = [Pagination, Autoplay, SwiperNavigation];
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

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} navigateToPage={navigate} />
      {/* Hero Section */}
      <section className="relative h-screen ">
    <HeroCarousel slides={heroSlides} />
      </section>
      {/* Bizning Yutuqlar Bo‘limi */}
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
              Bizning Muvaffaqiyat Hikoyalarimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Minglab o‘quvchilar bizning keng qamrovli ta’lim dasturlarimiz
              orqali o‘z maqsadlariga erishdilar
            </p>
          </div>

          {/* Uchta karta */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* 1. Dasturlash */}
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
                  Dasturlash O‘quvchilari
                </h3>
                <p className="text-gray-600">
                  Frontend, Backend, Python, Sun’iy Intellekt va Mobil
                  Dasturlash sohalarida muvaffaqiyatga erishdilar
                </p>
              </CardContent>
            </Card>

            {/* 2. Grafik Dizayn */}
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-paint-brush text-2xl text-orange-600"></i>
                </div>
                <CardTitle className="text-3xl font-bold text-orange-600">
                  {mathCount.toLocaleString()}+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Grafik Dizayn va SMM
                </h3>
                <p className="text-gray-600">
                  Grafik Dizayn, 3D Max, Rasm ishlash va SMM bo‘yicha yuqori
                  natijalarga erishdilar
                </p>
              </CardContent>
            </Card>

            {/* 3. Asosiy Kurslar */}
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
                  Foundation
                </h3>
                <p className="text-gray-600">
                  Word, Excel va boshqa asosiy kompyuter bilimlarini
                  mustahkamladilar
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tugma */}
          <div className="text-center">
            <Button
              onClick={() => navigate("results")}
              className="!rounded-button whitespace-nowrap bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 cursor-pointer"
            >
              Ko‘proq Natijalarni Ko‘rish
            </Button>
          </div>
        </div>
      </section>
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
                onClick={() => navigate(`courses/${course.slug}`)}
              >
                <div className="relative h-auto overflow-hidden">
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
              Bizning O'qituvchilarimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tajribali mutaxassislar jamoasi bilan tanishing, ular sizning
              o'rganish safarlaringizda yo'l-yo'riq ko'rsatishga tayyor va
              ilhomlantiradi
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {experts.slice(0, 4).map((expert, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <CardHeader onClick={() => navigate(`teachers/${expert.id}`)}>
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
      <Location />
      {/* Community Forum Section */}
      <section
        id="forum-section"
        className={`py-20 bg-white transform transition-all duration-1000 ${
          isVisible.forum
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bepul sinov darsiga yoziling
            </h2>
            <p className="text-lg text-gray-600">
              Sizga ishonch bilan o‘rganishni boshlash uchun bepul sinov darsini
              taklif qilamiz
            </p>
          </div>
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                O‘zingiz haqingizda aytib bering
              </CardTitle>
              <CardDescription className="text-gray-600">
                Ishtirok etish uchun ma’lumotlaringizni kiriting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ism *
                    </label>
                    <Input
                      className="border border-gray-300 text-sm"
                      placeholder="Ismingizni kiriting"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Familiya *
                    </label>
                    <Input
                      className="border border-gray-300 text-sm"
                      placeholder="Familiyangizni kiriting"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon raqami *
                  </label>
                  <Input
                    className="border border-gray-300 text-sm"
                    placeholder="+998 90 123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telegram username (ixtiyoriy)
                  </label>
                  <Input
                    className="border border-gray-300 text-sm"
                    placeholder="@username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qiziqish fani *
                  </label>
                  <select className="w-full border border-gray-300 text-sm rounded-md p-2">
                    <option value="">Fan tanlang</option>
                    <option value="frontend">Frontend Dasturlash</option>
                    <option value="backend">Backend Dasturlash</option>
                    <option value="python">Python Dasturlash</option>
                    <option value="ai">Sun’iy Intellekt</option>
                    <option value="design">Grafik Dizayn</option>
                    <option value="3dmax">3D Max</option>
                    <option value="smm">SMM (Marketing)</option>
                    <option value="foundation">Foundation</option>
                  </select>
                </div>

                <div className="text-center">
                  {clicked ? (
                    <p className="text-green-600 font-semibold mt-2">
                      Biz siz bilan tez orada aloqaga chiqamiz ✅
                    </p>
                  ) : (
                    <Button
                      onClick={() => setClicked(true)}
                      className="!rounded-button whitespace-nowrap bg-green-600 hover:bg-green-700 text-white px-12 py-3 cursor-pointer"
                    >
                      Qo‘shilish
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <HomePageSections />

      <Footer />
    </div>
  );
};

export default HomePage;
