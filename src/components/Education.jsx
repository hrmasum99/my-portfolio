import { Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    // {
    //   degree: "Master of Science in Computer Science",
    //   school: "Stanford University",
    //   period: "2017 - 2019",
    //   description: "Specialized in Software Engineering and Human-Computer Interaction. Graduated Magna Cum Laude.",
    //   achievements: ["GPA: 3.8/4.0", "Research in Machine Learning", "Teaching Assistant"]
    // },
    {
      degree: "Bachelor of Science in Computer Science And Engineering",
      school: "American International University-Bangladesh",
      period: "2022 - 2025",
      description: "Foundation in computer science, algorithms, and software development, Data Science, Machine Learning and Human-Computer Interaction. Active in coding and ML/AI competitions.",
      achievements: ["Academic Scholarship", "Dean's List Honors", "ACM Programming Team"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-purple-600 font-semibold">{edu.school}</p>
                </div>
                <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{edu.period}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{edu.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((achievement, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center">
                    <Award className="w-3 h-3 mr-1" />
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;