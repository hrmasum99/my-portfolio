import { Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    // {
    //   title: "Senior Full Stack Developer",
    //   company: "Tech Innovations Inc.",
    //   period: "2022 - Present",
    //   description: "Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices.",
    //   achievements: ["Improved app performance by 40%", "Led team of 5 developers", "Implemented CI/CD pipeline"]
    // },
    // {
    //   title: "Frontend Developer",
    //   company: "Digital Solutions Co.",
    //   period: "2020 - 2022",
    //   description: "Developed responsive web applications and collaborated with UX/UI teams to create intuitive user interfaces.",
    //   achievements: ["Built 10+ responsive websites", "Reduced load time by 60%", "Implemented modern design systems"]
    // },
    // {
    //   title: "Junior Web Developer",
    //   company: "StartupXYZ",
    //   period: "2019 - 2020",
    //   description: "Started career developing small-scale applications and learning modern web development practices.",
    //   achievements: ["Delivered 5+ client projects", "Learned React and Node.js", "Contributed to open source"]
    // }, 
    {
      title: "Front-End Developer Intern",
      company: "Workspace Infotech Limited",
      period: "June 2025 - Present",
      description: "Collaborated with senior software engineers, participated in code reviews, and followed industry’s best practices. Enhanced skills in front-end development, debugging, state management, REST API integration, and version control (Git).",
      achievements: ["Contributed to ERP project", "Learned React and Next.js", "Improved UI consistency and performance."]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 md:p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-purple-600 font-semibold">{exp.company}</p>
                </div>
                <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.achievements.map((achievement, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
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

export default Experience;
