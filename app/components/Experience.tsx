'use client';

import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'AI/ML Developer',
    company: 'Genlab',
    period: 'May 2026 - Present',
    points: [
      'Developing AI-powered applications and intelligent systems',
      'Working with LLMs, RAG pipelines, and Prompt Engineering',
      'Building ML solutions for real-world use cases',
      'Integrating APIs and automation workflows',
      'Researching and implementing modern AI technologies',
    ],
  },
  {
    title: 'AI/ML Intern',
    company: 'Srishti Innovative',
    period: 'Aug 2024 - Sep 2024',
    points: [
      'Collaborated with the AI/ML team on model development',
      'Performed data preprocessing and feature engineering',
      'Built classification models using TensorFlow and Scikit-learn',
      'Worked on image recognition and text analysis projects',
      'Improved understanding of model evaluation metrics',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32 bg-black scroll-mt-28 md:scroll-mt-32"
    >
      {/* Glow Background */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <p className="mb-4 text-sm font-medium uppercase tracking-[4px] text-blue-400">
          EXPERIENCE
        </p>

        <h2 className="mb-20 text-5xl font-bold leading-tight md:text-7xl">
          Professional Journey &{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Development Experience
          </span>
        </h2>

        {/* Timeline */}

        <div className="relative mx-auto max-w-5xl">

          {/* Vertical line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-purple-500/30" />

          <div className="space-y-12">

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative ml-14 rounded-3xl border border-purple-500/20 bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40"
              >

                {/* Timeline Dot */}

                <div className="absolute -left-[54px] top-10 flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/40 bg-purple-600">

                  <Briefcase size={18} />

                </div>


                {/* Header */}

                <div className="mb-6">

                  <h3 className="text-3xl font-bold text-white">
                    {exp.title}
                  </h3>

                  <p className="mt-2 text-xl font-semibold text-purple-400">
                    {exp.company}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-zinc-400">

                    <Calendar size={16} />

                    <span>{exp.period}</span>

                  </div>

                </div>



                {/* Points */}

                <ul className="space-y-3">

                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-zinc-300"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-purple-500" />

                      <span>{point}</span>

                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}