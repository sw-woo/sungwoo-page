"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="section-container text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Sungwoo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            AI/ML Developer & Problem Solver
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            복잡한 기술 문제를 LangChain과 AI로 해결합니다. <br />
            실전 프로젝트 경험을 바탕으로 한국 개발자 커뮤니티에 기여하고 있습니다.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200 font-semibold"
            >
              View Projects
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/sw-woo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20 animate-slide-up">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "LangChain",
              "Python",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "TensorFlow",
              "Flutter",
              "Streamlit",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
