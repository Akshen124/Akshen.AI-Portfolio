"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 px-8 lg:px-20 py-32 scroll-mt-28 md:scroll-mt-32"
    >

      {/* Background Glow */}
      <div className="absolute left-0 top-40 w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20 relative z-10"
      >

        <p className="text-blue-400 uppercase tracking-widest mb-4">
          Skills
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">

          Technologies &
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {" "}Intelligent Systems
          </span>

        </h2>

      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

        {/* AI & ML */}
        <motion.div
          whileHover={{ y: -10 }}
          className="lg:col-span-2 backdrop-blur-2xl bg-white/[0.03] border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400 transition duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
        >

          <h3 className="text-3xl font-bold text-blue-400 mb-6">
            AI & Machine Learning
          </h3>

          <div className="flex flex-wrap gap-4">

            {[
              "Machine Learning",
              "Deep Learning",
              "TensorFlow",
              "Scikit-learn",
              "Keras",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
              >
                {skill}
              </span>
            ))}

          </div>

        </motion.div>

        {/* Generative AI */}
        <motion.div
          whileHover={{ y: -10 }}
          className="backdrop-blur-2xl bg-white/[0.03] border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400 transition duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
        >

          <h3 className="text-2xl font-bold text-purple-400 mb-6">
            Generative AI
          </h3>

          <div className="flex flex-wrap gap-3">

            {[
              "OpenAI",
              "RAG",
              "Hugging Face",
              "Ollama",
              "Prompt Engineering",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
              >
                {skill}
              </span>
            ))}

          </div>

        </motion.div>

        {/* Full Stack */}
        <motion.div
          whileHover={{ y: -10 }}
          className="lg:col-span-2 backdrop-blur-2xl bg-white/[0.03] border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
        >

          <h3 className="text-3xl font-bold text-cyan-400 mb-6">
            Full Stack Development
          </h3>

          <div className="flex flex-wrap gap-4">

            {[
              "React",
              "Next.js",
              "FastAPI",
              "Node.js",
              "REST APIs",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
              >
                {skill}
              </span>
            ))}

          </div>

        </motion.div>

        {/* Data Science */}
        <motion.div
          whileHover={{ y: -10 }}
          className="backdrop-blur-2xl bg-white/[0.03] border border-pink-500/20 rounded-3xl p-8 hover:border-pink-400 transition duration-500 hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]"
        >

          <h3 className="text-2xl font-bold text-pink-400 mb-6">
            Data Science
          </h3>

          <div className="flex flex-wrap gap-3">

            {[
              "Pandas",
              "NumPy",
              "Power BI",
              "Visualization",
              "EDA",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300"
              >
                {skill}
              </span>
            ))}

          </div>

        </motion.div>

        {/* Cloud & Tools */}
        <motion.div
          whileHover={{ y: -10 }}
          className="lg:col-span-4 backdrop-blur-2xl bg-white/[0.03] border border-green-500/20 rounded-3xl p-8 hover:border-green-400 transition duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]"
        >

          <h3 className="text-3xl font-bold text-green-400 mb-6">
            Cloud & Tools
          </h3>

          <div className="flex flex-wrap gap-4">

            {[
              "GitHub",
              "Docker",
              "Google Cloud",
              "API Integration",
              "Deployment",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300"
              >
                {skill}
              </span>
            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}