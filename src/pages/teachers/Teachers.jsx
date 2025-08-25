import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const TeachersPage = () => {


    const [experts, setExperts] = useState([])

    useEffect(() => {
        async function fetchExperts() {
            try {
                const response = await fetch('/experts.json');
                const data = await response.json();
                setExperts(data);
            } catch (error) {
                console.error("Error fetching experts data:", error);
            }
        }
        fetchExperts();
    }, [])

    return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={"teachers"} navigateToPage={() => {}} />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our Expert Teachers
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Learn from industry professionals with years of experience in
              their respective fields
            </p>
          </div>
        </section>
        {/* Teachers Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {experts.concat(experts).map((expert, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      {expert.name}
                    </CardTitle>
                    <p className="text-green-600">{expert.subject}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      With over 10 years of experience in teaching and industry
                      practice, specializing in advanced concepts and practical
                      applications.
                    </p>
                    <div className="flex space-x-4">
                      <i className="fab fa-linkedin text-gray-400 hover:text-blue-600 cursor-pointer"></i>
                      <i className="fab fa-twitter text-gray-400 hover:text-blue-400 cursor-pointer"></i>
                      <i className="fas fa-globe text-gray-400 hover:text-green-600 cursor-pointer"></i>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )};

  export default TeachersPage;