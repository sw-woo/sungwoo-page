"use client";

import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "hanbit-langchain",
      description:
        "Comprehensive LangChain tutorial and examples in Korean. A complete guide for building AI applications with LangChain.",
      stars: 9,
      forks: 11,
      language: "Jupyter Notebook",
      tech: ["LangChain", "Python", "AI/ML"],
      github: "https://github.com/sw-woo/hanbit-langchain",
    },
    {
      title: "Langchain-js",
      description:
        "LangChain.js tutorial covering essential concepts and practical implementations for JavaScript developers.",
      stars: 8,
      forks: 5,
      language: "JavaScript",
      tech: ["LangChain", "JavaScript", "Node.js"],
      github: "https://github.com/sw-woo/Langchain-js",
    },
    {
      title: "Flutter TFLite Classification",
      description:
        "Mobile app built with Flutter using TensorFlow Lite for real-time image classification. Songdo presentation project.",
      stars: 7,
      forks: 0,
      language: "Dart",
      tech: ["Flutter", "TensorFlow Lite", "Mobile"],
      github: "https://github.com/sw-woo/Flutter_tflite_classfication_songdo",
    },
    {
      title: "langchain-python-basic",
      description:
        "Beginner-friendly book and tutorial for learning LangChain fundamentals with Python.",
      stars: 7,
      forks: 5,
      language: "Jupyter Notebook",
      tech: ["LangChain", "Python", "Tutorial"],
      github: "https://github.com/sw-woo/langchain-python-basic",
    },
    {
      title: "langchain.js-naver-crawling",
      description:
        "Web scraping tool using LangChain.js for extracting and processing data from Naver.",
      stars: 6,
      forks: 3,
      language: "JavaScript",
      tech: ["LangChain", "Web Scraping", "Node.js"],
      github: "https://github.com/sw-woo/langchain.js-naver-crawling",
    },
    {
      title: "pdf-rag-streamlit",
      description:
        "RAG (Retrieval-Augmented Generation) application for PDF documents using Streamlit.",
      stars: 3,
      forks: 0,
      language: "Python",
      tech: ["RAG", "Streamlit", "LangChain"],
      github: "https://github.com/sw-woo/pdf-rag-streamlit",
    },
  ];

  return (
    <section id="projects" className="section-container bg-white dark:bg-gray-900">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden group"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FaGithub size={24} />
                </a>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 min-h-[80px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch />
                  {project.forks}
                </span>
                <span className="text-xs">{project.language}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/sw-woo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 font-semibold"
        >
          <FaGithub size={20} />
          View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
