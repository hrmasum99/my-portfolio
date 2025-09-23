import { ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Modern React Patterns: A Comprehensive Guide",
      journal: "Tech Weekly",
      year: "2024",
      description: "An in-depth analysis of modern React patterns and best practices for scalable applications.",
      link: "#"
    },
    {
      title: "Optimizing Web Performance with Modern Tools",
      journal: "Frontend Masters Blog",
      year: "2023",
      description: "Strategies and techniques for improving web application performance using modern development tools.",
      link: "#"
    },
    {
      title: "The Future of Full-Stack Development",
      journal: "Dev.to",
      year: "2023",
      description: "Exploring emerging trends and technologies shaping the future of full-stack web development.",
      link: "#"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Publications & Writing</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
                  <p className="text-purple-600 font-semibold mb-2">{pub.journal} • {pub.year}</p>
                  <p className="text-gray-600 mb-4">{pub.description}</p>
                </div>
                <div className="md:ml-6">
                  <a 
                    href={pub.link}
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Article
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
