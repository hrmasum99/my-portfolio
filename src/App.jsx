import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import References from "./components/References";
import Skills from "./components/Skills";
import { GitHubNotFound, DemoNotFound, GeneralNotFound } from "./components/Custom404Page";
import PortfolioLoader from "./components/CustomLoadingPage/";
import { Suspense } from 'react';

const PortfolioPage = () => (
  <>
    <Navbar />
    <Hero />
    <Profile />
    <Experience />
    <Skills />
    <Projects />
    <Education />
    <Publications />
    <References />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set document title and SEO meta
    document.title = "Masum's Portfolio";

    const metaTags = [
      {
        name: "description",
        content:
          "John Doe - Full Stack Developer specializing in React, Node.js, and modern web technologies. Explore my portfolio of innovative web applications.",
      },
      {
        name: "keywords",
        content:
          "Full Stack Developer, React, Node.js, JavaScript, Web Development, Portfolio",
      },
      { name: "author", content: "John Doe" },
      {
        property: "og:title",
        content: "John Doe - Full Stack Developer Portfolio",
      },
      {
        property: "og:description",
        content:
          "Passionate Full Stack Developer with 5+ years of experience creating innovative web applications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ];

    metaTags.forEach((tag) => {
      const meta = document.createElement("meta");
      if (tag.name) meta.name = tag.name;
      if (tag.property) meta.property = tag.property;
      meta.content = tag.content;
      document.head.appendChild(meta);
    });

    // Scroll listener for back-to-top button
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // If the document is already loaded, skip loader
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      // Wait until browser finishes loading scripts, images, fonts, etc.
      const handleLoad = () => setLoading(false);
      window.addEventListener("load", handleLoad);

      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

   if (loading) return <PortfolioLoader />;

  return (
    <div className="min-h-screen bg-white relative">
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/not-available/github/:project" element={<GitHubNotFound />} />
        <Route path="/not-available/demo/:project" element={<DemoNotFound />} />
        <Route path="*" element={<GeneralNotFound projectName="This page" />} />
      </Routes>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-br from-pink-400 via-purple-900 to-blue-900 text-white shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default App;
