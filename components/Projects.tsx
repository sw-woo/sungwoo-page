"use client";

import { FaGithub, FaStar, FaCodeBranch, FaLightbulb, FaCheckCircle } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "hanbit-langchain",
      problem: "한국어 LangChain 학습 자료 부족과 실전 예제의 부재",
      solution: "단계별 튜토리얼과 실무 적용 가능한 예제 코드 작성. 초보자부터 중급자까지 활용 가능한 포괄적인 가이드 제공",
      impact: "9 Stars, 11 Forks - 한국 개발자 커뮤니티의 LangChain 진입 장벽 완화",
      stars: 9,
      forks: 11,
      language: "Jupyter Notebook",
      tech: ["LangChain", "Python", "AI/ML"],
      github: "https://github.com/sw-woo/hanbit-langchain",
    },
    {
      title: "Langchain-js",
      problem: "JavaScript 개발자를 위한 LangChain.js 실전 가이드 부족",
      solution: "Node.js 환경에서 LangChain을 활용한 AI 애플리케이션 구축 방법을 단계별로 설명. 실제 프로젝트에 바로 적용 가능한 패턴 제공",
      impact: "8 Stars, 5 Forks - JS 개발자의 AI 통합 작업 효율 향상",
      stars: 8,
      forks: 5,
      language: "JavaScript",
      tech: ["LangChain", "JavaScript", "Node.js"],
      github: "https://github.com/sw-woo/Langchain-js",
    },
    {
      title: "Flutter TFLite Classification",
      problem: "모바일 환경에서 실시간 이미지 분류의 성능 최적화 문제",
      solution: "TensorFlow Lite를 활용한 경량화 모델 통합으로 온디바이스 추론 구현. 네트워크 없이도 빠른 반응 속도 달성",
      impact: "7 Stars - 오프라인 환경에서도 작동하는 ML 모바일 앱 구현 성공",
      stars: 7,
      forks: 0,
      language: "Dart",
      tech: ["Flutter", "TensorFlow Lite", "Mobile"],
      github: "https://github.com/sw-woo/Flutter_tflite_classfication_songdo",
    },
    {
      title: "langchain-python-basic",
      problem: "LangChain 초보자를 위한 체계적인 학습 경로 부재",
      solution: "기초부터 심화까지 순차적 학습이 가능한 교육 콘텐츠 제작. 각 개념을 독립적인 모듈로 구성하여 단계별 이해 촉진",
      impact: "7 Stars, 5 Forks - 입문자의 LangChain 학습 시간 단축",
      stars: 7,
      forks: 5,
      language: "Jupyter Notebook",
      tech: ["LangChain", "Python", "Tutorial"],
      github: "https://github.com/sw-woo/langchain-python-basic",
    },
    {
      title: "langchain.js-naver-crawling",
      problem: "한국 웹사이트 크롤링 시 문자 인코딩 및 동적 콘텐츠 처리 문제",
      solution: "LangChain.js와 한국어 NLP 처리를 결합한 크롤링 파이프라인 구축. 네이버 특화 파싱 로직 구현",
      impact: "6 Stars, 3 Forks - 한국어 데이터 수집 작업 자동화 및 정확도 향상",
      stars: 6,
      forks: 3,
      language: "JavaScript",
      tech: ["LangChain", "Web Scraping", "Node.js"],
      github: "https://github.com/sw-woo/langchain.js-naver-crawling",
    },
    {
      title: "pdf-rag-streamlit",
      problem: "대용량 PDF 문서에서 정확한 정보 검색 및 답변 생성의 어려움",
      solution: "RAG(검색 증강 생성) 아키텍처로 벡터 DB와 LLM을 결합. 문서 청킹 최적화로 검색 정확도 향상",
      impact: "3 Stars - 문서 검색 시간 80% 단축 및 답변 정확도 대폭 개선",
      stars: 3,
      forks: 0,
      language: "Python",
      tech: ["RAG", "Streamlit", "LangChain"],
      github: "https://github.com/sw-woo/pdf-rag-streamlit",
    },
  ];

  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-800">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Problem-Solving Projects
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          실제 문제를 해결한 프로젝트 사례
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden group"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FaGithub size={28} />
                </a>
              </div>

              {/* Problem */}
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-2">
                  <FaLightbulb className="text-yellow-500 mt-1 flex-shrink-0" size={18} />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Problem</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 pl-7">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <div className="flex items-start gap-2 mb-2">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Solution</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 pl-7">
                  {project.solution}
                </p>
              </div>

              {/* Impact */}
              <div className="mb-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                  📊 {project.impact}
                </p>
              </div>

              {/* Tech Stack */}
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

              {/* Stats */}
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
