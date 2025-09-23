import Masum from '../assets/MASUM.jpg';

const Profile = () => {
  return (
    <section id="profile" className="py-20 bg-white">
      <div className="max-w-[96rem] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left transform hover:scale-105 transition-all duration-300">
            <div className="w-120 mx-auto md:mx-0 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 p-1 mb-8">
              <img src={Masum} alt="Profile Image" className="w-full h-full rounded-sm bg-gray-300 flex items-center justify-center text-8xl"/>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Passionate Developer & Problem Solver</h3>
            {/* <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated full-stack developer with over 5 years of experience creating innovative web applications. 
              I specialize in React, Node.js, and modern web technologies. My passion lies in crafting elegant solutions 
              to complex problems and creating user experiences that delight and inspire.
            </p> */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated full-stack developer with over 6 months of experience creating innovative web applications. 
              I specialize in React, Node.js, ASP.NET, and modern web technologies. My passion lies in crafting elegant solutions 
              to complex problems and creating user experiences that delight and inspire.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge through technical writing and mentoring.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600">6+ Months</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
                <p className="text-gray-600">Open to opportunities</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                <p className="text-gray-600">English, Bangla</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;