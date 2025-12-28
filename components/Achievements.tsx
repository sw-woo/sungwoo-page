"use client";

import { FaChartLine, FaUsers, FaRocket, FaCode } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      icon: <FaUsers className="text-blue-500" size={40} />,
      number: "40+",
      label: "Community Impact",
      detail: "Stars & Forks across projects",
    },
    {
      icon: <FaRocket className="text-green-500" size={40} />,
      number: "80%",
      label: "Performance Improvement",
      detail: "RAG system optimization",
    },
    {
      icon: <FaCode className="text-purple-500" size={40} />,
      number: "6",
      label: "Open Source Projects",
      detail: "Production-ready solutions",
    },
    {
      icon: <FaChartLine className="text-orange-500" size={40} />,
      number: "92%",
      label: "Accuracy Rate",
      detail: "AI search precision",
    },
  ];

  return (
    <section className="section-container bg-white dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Impact & Achievements
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          측정 가능한 성과로 입증된 문제 해결 능력
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {item.number}
            </div>
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {item.label}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {item.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Problem-Solving Journey
        </h3>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {[
              {
                year: "2024",
                title: "RAG 시스템 성능 최적화",
                description: "검색 속도 80% 개선, 답변 정확도 92% 달성",
                tech: ["LangChain", "Vector DB", "Optimization"],
              },
              {
                year: "2024",
                title: "한국어 LangChain 교육 콘텐츠 제작",
                description: "커뮤니티 20+ Stars 획득, 진입 장벽 완화",
                tech: ["LangChain", "Python", "Tutorial"],
              },
              {
                year: "2023",
                title: "Flutter ML 모바일 앱 개발",
                description: "온디바이스 AI로 오프라인 실시간 분류 구현",
                tech: ["Flutter", "TensorFlow Lite", "Mobile"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start group hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-300">
                      {item.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
