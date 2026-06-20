"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 px-8 lg:px-20 py-32 scroll-mt-28 md:scroll-mt-32"
    >

      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full"></div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20 relative z-10"
      >

        <p className="text-blue-400 uppercase tracking-widest mb-4">
          About Me
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">

          Building
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {" "}Intelligent AI Systems
          </span>
          {" "}for the Next Generation

        </h2>

      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]"
        >

          <p className="text-gray-300 leading-relaxed text-lg">
            I am an AI Engineer & Creative Developer focused on building intelligent AI systems,
            immersive digital experiences, and scalable AI-powered applications.
          </p>

          <p className="text-gray-400 leading-relaxed mt-6">
            My work combines Generative AI, Retrieval-Augmented Generation (RAG),
            Voice AI, AI Automation, and Full Stack Development to create
            modern intelligent systems that solve real-world problems.
          </p>

          <p className="text-gray-400 leading-relaxed mt-6">
            I completed my AI/ML internship at Srishti Innovative and currently
            work as an AI/ML Intern at GenLab, where I contribute to real-world AI projects,
            model development, and intelligent application systems.
          </p>

          <p className="text-gray-400 leading-relaxed mt-6">
            My vision is to build next-generation intelligent AI systems that combine
            creativity, automation, and human-centered technology.
          </p>

        </motion.div>

        {/* Right Stats Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >

          {/* Card 1 */}
          <div className="backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 text-center hover:border-blue-500/30 transition duration-500">

            <h3 className="text-5xl font-bold text-blue-400">
              5+
            </h3>

            <p className="text-gray-400 mt-4">
              AI Projects
            </p>

          </div>

          {/* Card 2 */}
          <div className="backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 text-center hover:border-purple-500/30 transition duration-500">

            <h3 className="text-5xl font-bold text-purple-400">
              2
            </h3>

            <p className="text-gray-400 mt-4">
              AI Internships
            </p>

          </div>

          {/* Card 3 */}
          <div className="backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 text-center hover:border-pink-500/30 transition duration-500">

            <h3 className="text-5xl font-bold text-pink-400">
              AI
            </h3>

            <p className="text-gray-400 mt-4">
              Generative Systems
            </p>

          </div>

          {/* Card 4 */}
          <div className="backdrop-blur-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-500/30 transition duration-500">

            <h3 className="text-5xl font-bold text-cyan-400">
              Full
            </h3>

            <p className="text-gray-400 mt-4">
              Stack Developer
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}