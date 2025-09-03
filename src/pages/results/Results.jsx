// src/pages/Results.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../footer/Footer";

// Fake API Arrays (temporary, replace later with real API calls)
// const stories = await getSuccessStories();
// const courses = await getCourses();

const fakeCourses = [
  { slug: "web-dev", title: "Full-Stack Web Dasturlash" },
  { slug: "data-science", title: "Data Science & Sun’iy Intellekt" },
  { slug: "design", title: "UI/UX Dizayn" },
];

const fakeStories = [
  {
    id: 1,
    student_name: "Dilshod Karimov",
    date: "2025-08-10",
    avatar: "https://source.unsplash.com/100x100/?portrait,man",
    summary:
      "Kursdan keyin IT kompaniyada dasturchi bo‘lib ish boshladim. Bu markaz hayotimni o‘zgartirdi!",
    course_slug: "web-dev",
  },
  {
    id: 2,
    student_name: "Madina To‘xtayeva",
    date: "2025-08-14",
    avatar: "https://source.unsplash.com/100x100/?portrait,woman",
    summary:
      "Data Science kursi orqali chet eldagi kompaniyaga masofaviy ishlash imkoniyatiga ega bo‘ldim.",
    course_slug: "data-science",
  },
  {
    id: 3,
    student_name: "Javohir Raxmonov",
    date: "2025-08-20",
    avatar: "https://source.unsplash.com/100x100/?portrait,young",
    summary:
      "Dizayn kursidan so‘ng portfolio tuzdim va bir nechta freelancing buyurtmalar oldim.",
    course_slug: "design",
  },
];

export default function Results() {
  const navigate = useNavigate();
  const [courseFilter, setCourseFilter] = useState("");

  const filtered = useMemo(() => {
    if (!courseFilter) return fakeStories;
    return fakeStories.filter(
      (s) => s.course_slug === courseFilter || s.courseSlug === courseFilter
    );
  }, [courseFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <div className="relative bg-indigo-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Muvaffaqiyat Hikoyalari
            </h1>
            <p className="text-indigo-100 mt-2 text-lg">
              Talabalarimizning haqiqiy natijalari bilan tanishing.
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:scale-105 transition"
          >
            ⬅️ Orqaga
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full">
        {/* Filter */}
        <div className="flex items-center justify-end mb-8">
          <select
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Barcha kurslar</option>
            {fakeCourses.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        {/* Stories */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {filtered.length === 0 && (
            <p className="text-gray-600 col-span-3">
              Hozircha hikoyalar mavjud emas.
            </p>
          )}
          {filtered.map((s) => (
            <motion.div
              key={s.id}
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white border rounded-2xl p-6 shadow hover:shadow-lg transition flex flex-col"
            >
              <div className="flex items-center gap-4">
                {s.avatar && (
                  <img
                    src={s.avatar}
                    alt={s.student_name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-semibold text-gray-900">
                    {s.student_name}
                  </div>
                  <div className="text-xs text-gray-500">{s.date}</div>
                </div>
              </div>
              <p className="text-gray-700 mt-4 flex-1">{s.summary}</p>
              <div className="mt-4 text-sm text-gray-600 font-medium">
                📚 Kurs:{" "}
                {
                  fakeCourses.find((c) => c.slug === s.course_slug)?.title ||
                  s.course_slug
                }
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
