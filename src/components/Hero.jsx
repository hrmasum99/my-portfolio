import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import HeroImage from '../assets/Hero.JPG';

const Hero = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const fullText = "Software Engineer | Full Stack Developer | Researcher";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const handleDownload = () => {
    setLoading(true);

    const link = document.createElement("a");
    link.href = "/My_CV.pdf";
    link.download = "Habibur_Rahman_Masum_CV.pdf";

    // Clean up loader quickly (since browser handles download natively)
    link.onclick = () => setLoading(false);
    setTimeout(() => setLoading(false), 1200);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <AnimatedBackground />
      
      <div className="relative z-10 text-center text-white px-4 py-10 mt-10">
        <div className='max-w-[96rem] mx-auto'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-10 px-6'>
            <div className="sm:my-10 transition-all duration-300 transform hover:scale-105">
              <div className="w-48 h-48 2xl:w-120 2xl:h-120 xl:w-96 xl:h-96 md:h-72 md:w-72 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                <img src={HeroImage} alt="Hero image" className="w-full h-full rounded-full"/>
              </div>
           </div>
            <div className='w-full md:w-3/4 text-start '>
              <h3 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 animate-fade-in">
                Hi There! It's 
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 animate-fade-in text-purple-400">Habibur Rahman Masum</h2>
              
              <p className="text-xl md:text-2xl mb-4">
                I'm a <span className='text-purple-400'>{' '+text}<span className="animate-pulse"></span></span>
              </p>
              <p className='text-sm md:text-base xl:text-xl mb-8'>Aspiring Software Engineer with internship experience in front-end and full-stack development. Skilled in Next.js, NestJS, Redux Toolkit, PostgreSQL, and ASP.NET, with strong foundations in programming, problem-solving, and scalable application development.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105" onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                  View My Work
                </button>
                <button
                  onClick={handleDownload}
                  className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 rounded-full font-semibold transition-all duration-300 text-center"
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-6 h-6 text-white rotate-90" />
      </div> */}
    </section>
  );
};

export default Hero;
