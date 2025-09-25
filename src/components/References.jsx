import { Linkedin, Star } from 'lucide-react';

const References = () => {
  const references = [
    {
      name: "MD. Rakibul Hasan Raihan",
      position: "Project Coordinator",
      company: "Workspace Infotech Limited",
      testimonial: "Masum is extremely polite and humble, making it a pleasure to work with him. He is a quick learner who easily understands and follows instructions. He consistently delivers high-quality work and is always willing to help team members.",
      linkedIn:"https://www.linkedin.com/in/raihanrakib/",
      contact: "raihan@workspaceit.com"
    },
    // {
    //   name: "Jane Doe",
    //   position: "Senior Project Manager",
    //   company: "Tech Innovators Inc.",
    //   testimonial: "It was a pleasure having Masum on my team. He possesses a strong work ethic, is incredibly reliable, and consistently produces high-quality work. His collaborative nature and positive attitude make him a valuable asset to any project, and he is always proactive in seeking out new challenges.",
    //   linkedIn: "https://www.google.com/search?q=https://www.linkedin.com/in/janedoe/",
    //   contact: "jane.doe@techinnovators.com"
    // },
    {
      name: "MD. FARUK ABDULLAH AL SOHAN",
      position: "Lecturer, Faculty of Science and Technology",
      company: "American International University-Bangladesh",
      testimonial: "Masum demonstrated exceptional dedication and intellectual curiosity throughout his thesis work. He is an independent thinker with a keen ability to analyze complex problems and propose innovative solutions. It was a privilege to supervise him, and his commitment to his research was evident in the high quality of his final thesis. I highly recommend him as a researcher and a scholar.",
      linkedIn: "https://www.linkedin.com/in/farukabdullahalsohan/",
      contact: "faruk.sohan@aiub.edu"
    }
    // {
    //   name: "Sarah Johnson",
    //   position: "Senior Engineering Manager",
    //   company: "Tech Innovations Inc.",
    //   testimonial: "John is an exceptional developer with strong technical skills and great leadership qualities. He consistently delivers high-quality work and is always willing to help team members.",
    //   contact: "sarah.johnson@techinnovations.com"
    // },
    // {
    //   name: "Mike Chen",
    //   position: "CTO",
    //   company: "Digital Solutions Co.",
    //   testimonial: "Working with John was a pleasure. His ability to solve complex problems and communicate technical concepts clearly makes him a valuable team member.",
    //   contact: "mike.chen@digitalsolutions.com"
    // },
    // {
    //   name: "Lisa Rodriguez",
    //   position: "Product Manager",
    //   company: "StartupXYZ",
    //   testimonial: "John's attention to detail and user-focused approach resulted in products that exceeded our expectations. He's a developer who truly understands the business impact of his work.",
    //   contact: "lisa.rodriguez@startupxyz.com"
    // }
  ];

  // Helper function to generate initials from a full name.
  const getInitials = (fullName) => {
    const nameParts = fullName
      .split(' ')
      .filter(part => !['MD', 'MD.'].includes(part.toUpperCase()));

    if (nameParts.length > 1) {
      const firstNameInitial = nameParts[0][0];
      const lastNameInitial = nameParts[nameParts.length - 1][0];
      return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
    }

    if (nameParts.length === 1) {
      return nameParts[0].substring(0, 2).toUpperCase();
    }

    return '';
  };
  
  return (
    <section id="references" className="py-20 bg-white">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">References</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref, index) => (
            <div key={index} className="h-full flex flex-col bg-gray-50 rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
                <div className='flex-1 flex flex-col gap-4'>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {getInitials(ref.name)}
                    </div>
                    
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900">{ref.name}</h3>
                      <p className="text-sm text-gray-600">{ref.position}</p>
                      <p className="text-sm text-purple-600">{ref.company}</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{ref.testimonial}"</p>
                  </div>
                </div>
                
                <div className='mt-4'>
                  <p className="text-sm text-gray-500">{ref.contact}</p>
                  <a href={ref.linkedIn} className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                    <Linkedin className="w-4 h-4 mr-1" />
                    LinkedIn
                  </a>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;