import { ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "A Multimodal Deep Learning Framework for Integrating Visual, Textual, and Categorical Features in Retail Price Estimation",
      journal: "Array",
      year: "2025",
      description: "This article presents a multimodal deep learning framework for retail price estimation. It leverages product images, descriptions, and categorical data to develop and compare two distinct model architectures: the Functional API and the Sequential API, ultimately aiming to find a balance between accuracy and computational efficiency.",
      link: "#"
    },
    {
      title: "Smart Home and Garden Management System with Environmental Monitoring and Automation",
      journal: "Conference: 2025 IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN 2025)",
      year: "2025",
      description: "This project presents a smart home and garden management system using an Arduino Nano ESP32 and multiple sensors to monitor and automate environmental conditions. The system allows for remote and voice control of devices like lights and fans via Alexa and Arduino IoT Cloud. It aims to reduce manual effort and improve the safety, efficiency, and cost-effectiveness of home and garden management.",
      link: "https://www.researchgate.net/publication/394160939_Smart_Home_and_Garden_Management_System_with_Environmental_Monitoring_and_Automation"
    },
    {
      title: "Smart Home Cleaning Automation: A GSM Integrated Autonomous Robot for Efficient Household Maintenance",
      journal: "27th International Conference on Computer and Information Technology (ICCIT 2024)",
      year: "2024",
      description: "This paper details a GSM-integrated autonomous cleaning robot that uses an Arduino Uno and various sensors to navigate and clean homes efficiently. Its key feature is a GSM module that enables users to remotely control the robot via SMS commands, allowing for real-time monitoring and control of cleaning operations. The system enhances user convenience and provides a reliable solution for automated household maintenance.",
      link: "https://www.researchgate.net/publication/389591993_Smart_Home_Cleaning_Automation_A_GSM_Integrated_Autonomous_Robot_for_Efficient_Household_Maintenance"
    },
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
