"use client";

import { motion } from "framer-motion";
import SmoothScroll from "./SmoothScroll";

const projects = [
  {
    title: "NLP to SQL",
    subtitle: "Natural Language Database Intelligence",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    size: "large",
  },

  {
    title: "RAG Chatbot",
    subtitle: "Retrieval-Augmented AI Assistant",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    size: "medium",
  },

  {
    title: "Voice Cloning TTS",
    subtitle: "Human-Like AI Voice Synthesis",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    size: "small",
  },

  {
    title: "Plant Disease Detection",
    subtitle: "AI Smart Agriculture System",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    size: "large",
  },

  {
    title: "AI Home Automation",
    subtitle: "Voice-Controlled Smart Environment",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop",
    size: "medium",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 px-8 lg:px-20 py-32 scroll-mt-28 md:scroll-mt-32"
    >

      {/* Background Glow */}
      <div className="absolute top-40 left-20 w-[400px] h-[400px] bg-purple-500/10 blur-3xl rounded-full"></div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20 relative z-10"
      >

        <p className="text-blue-400 uppercase tracking-widest mb-4">
          Projects
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl">

          AI
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {" "} Experiences
          </span>

        </h2>

      </motion.div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="break-inside-avoid relative overflow-hidden rounded-3xl group cursor-pointer"
          >

            {/* Image Container */}
            <div
              className={`relative overflow-hidden rounded-3xl ${
                project.size === "large"
                  ? "h-[550px]"
                  : project.size === "medium"
                  ? "h-[420px]"
                  : "h-[320px]"
              }`}
            >

              {/* Image */}
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              {/* Glow Hover */}
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 z-10">

                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-3 text-sm tracking-wide uppercase">
                  {project.subtitle}
                </p>

              </div>

            </div>
              <SmoothScroll />
          </motion.div>

        ))}

      </div>

    </section>
   

  );
}