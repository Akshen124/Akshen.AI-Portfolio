"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import { TypeAnimation } from "react-type-animation";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/Experience";
import Smoothscroll from "./components/SmoothScroll";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

import ProjectsSection from "./components/ProjectsSection";

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <main
  onMouseMove={handleMouseMove}
  className="min-h-screen bg-black text-white overflow-hidden relative"
>  
   <ParticlesBackground />
     
      {/* Mouse Follow Glow */}
<motion.div
  animate={{
    x: mousePosition.x - 150,
    y: mousePosition.y - 150,
  }}
  transition={{
    type: "spring",
    stiffness: 50,
    damping: 20,
  }}
  className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-3xl z-0"
/>

      {/* Animated Background Glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full"
      />

      {/* Hero Section */}
      {/* Navbar */}
<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

    {/* Logo */}
    <h1 className="text-2xl font-bold tracking-wide text-white">
      Akshen AI
    </h1>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">

      <a href="#about" className="hover:text-white transition">
        About
      </a>

      <a href="#skills" className="hover:text-white transition">
        Skills
      </a>

      <a href="#projects" className="hover:text-white transition">
        Projects
      </a>

      <a href="#experience" className="hover:text-white transition">
        Experience
      </a>

      <a href="#contact" className="hover:text-white transition">
        Contact
      </a>

    </div>

    {/* Mobile Toggle */}
    <button
      type="button"
      className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white hover:bg-white/10 transition"
      aria-label="Toggle mobile menu"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      <span className="text-2xl">{mobileMenuOpen ? '×' : '☰'}</span>
    </button>

  </div>

  <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden border-t border-white/10 bg-black/95`}>
    <div className="px-8 py-4 space-y-3 text-white">
      <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition">
        About
      </a>
      <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition">
        Skills
      </a>
      <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition">
        Projects
      </a>
      <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition">
        Experience
      </a>
      <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition">
        Contact
      </a>
    </div>
  </div>

</nav>

{/* Scroll Indicator */}
<motion.div
  animate={{
    y: [0, 10, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
>

  

</motion.div>

      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 min-h-screen pt-40 lg:pt-32">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <p className="text-blue-400 mb-4 tracking-widest uppercase">
            AKSHEN AI
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            AI Engineer &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {" "}Creative Developer
            </span>
          </h1>

<div className="mt-6">

  <TypeAnimation
    sequence={[
      "AI Engineer",
      2000,
      "ML Engineer",
      2000,
      "Creative Developer",
      2000,
      "Full Stack Developer",
      2000,
      "Data Scientist",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-2xl lg:text-3xl font-semibold text-purple-400"
  />

  <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
    Building intelligent AI systems, immersive digital experiences,
    and next-generation applications.
  </p>

</div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">

           <button
             onClick={() => router.push('#projects')}
             className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300"
           >
             View Projects
           </button>

            <button
              onClick={() => router.push('#contact')}
              className="px-6 py-3 rounded-full border border-gray-600 hover:border-white transition duration-300"
            >
              Contact Me
            </button>

          </div>
        </motion.div>
        

{/* Right Side Floating Profile Orb */}
<motion.div
  animate={{
    y: [0, -20, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative mt-16 lg:mt-0 flex items-center justify-center"
>

  {/* Background Glow */}
  <div className="absolute 
    w-[320px] h-[320px] 
    sm:w-[420px] sm:h-[420px] 
    lg:w-[520px] lg:h-[520px] 
    rounded-full bg-purple-500 opacity-20 blur-3xl animate-pulse">
  </div>

  {/* Rotating Ring */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute 
      w-[260px] h-[260px]
      sm:w-[340px] sm:h-[340px]
      lg:w-[430px] lg:h-[430px]
      rounded-full border border-purple-400/30"
  />

  {/* Second Ring */}
  <motion.div
    animate={{ rotate: -360 }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute 
      w-[220px] h-[220px]
      sm:w-[300px] sm:h-[300px]
      lg:w-[390px] lg:h-[390px]
      rounded-full border border-blue-400/20"
  />

  {/* Profile Container */}
  <div className="relative 
    w-[180px] h-[180px]
    sm:w-[240px] sm:h-[240px]
    lg:w-[340px] lg:h-[340px]
    rounded-full overflow-hidden border border-white/10 
    shadow-[0_0_60px_rgba(139,92,246,0.5)]">

    <img
      src="/profile.png"
      alt="Akshen AI"
      className="w-full h-full object-cover"
    />

    {/* Overlay Glow */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>

  </div>

</motion.div>

      </section>
      <AboutSection />
      <SkillsSection/>
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Smoothscroll />
      <Footer />
      </main>
    
  );
    
}