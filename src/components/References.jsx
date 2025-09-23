import { Star } from 'lucide-react';

const References = () => {
  const references = [
    {
      name: "Sarah Johnson",
      position: "Senior Engineering Manager",
      company: "Tech Innovations Inc.",
      testimonial: "John is an exceptional developer with strong technical skills and great leadership qualities. He consistently delivers high-quality work and is always willing to help team members.",
      contact: "sarah.johnson@techinnovations.com"
    },
    {
      name: "Mike Chen",
      position: "CTO",
      company: "Digital Solutions Co.",
      testimonial: "Working with John was a pleasure. His ability to solve complex problems and communicate technical concepts clearly makes him a valuable team member.",
      contact: "mike.chen@digitalsolutions.com"
    },
    {
      name: "Lisa Rodriguez",
      position: "Product Manager",
      company: "StartupXYZ",
      testimonial: "John's attention to detail and user-focused approach resulted in products that exceeded our expectations. He's a developer who truly understands the business impact of his work.",
      contact: "lisa.rodriguez@startupxyz.com"
    }
  ];

  return (
    <section id="references" className="py-20 bg-white">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">References</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {ref.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">{ref.name}</h3>
                  <p className="text-sm text-gray-600">{ref.position}</p>
                  <p className="text-sm text-purple-600">{ref.company}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{ref.testimonial}"</p>
              </div>
              
              <p className="text-sm text-gray-500">{ref.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;