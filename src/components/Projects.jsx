import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Github, ExternalLink } from 'lucide-react';
import EventBuddyImg from '../assets/event-buddy.png';
import EISPImg from '../assets/eisp.png';
import TaskManagerImg from '../assets/task-manager.png';
import CharityImg from '../assets/charity.jpg';
import EventMGTImg from '../assets/event-management.jpg';
import DeptStoreImg from '../assets/departmental-store.jpg';
import { GitHubNotFound, DemoNotFound } from './Custom404Page';

const Projects = () => {
  const navigate = useNavigate();
   const [showError, setShowError] = useState({ type: null, project: null });
   const [loading, setLoading] = useState(false);

    const handleLinkClick = (url, type, projectName) => {
    if (url === "#" || !url) {
    // Redirect to error route
    navigate(`/not-available/${type}/${encodeURIComponent(projectName)}`);
    return;
  }

    setLoading(true);

    try {
      const newTab = window.open(url, "_blank");

      if (!newTab) {
        setLoading(false);
        alert("Please allow popups to open project links.");
        return;
      }

      // Fallback: hide loader after ~1.5s (since cross-origin links can’t be tracked)
      setTimeout(() => setLoading(false), 1500);
    } catch (err) {
      setLoading(false);
      console.error("Error opening link:", err);
    }
  };


  if (showError.type) {
    return showError.type === "github" ? (
      <GitHubNotFound
        projectName={showError.project}
        onGoBack={() => setShowError({ type: null, project: null })}
      />
    ) : (
      <DemoNotFound
        projectName={showError.project}
        onGoBack={() => setShowError({ type: null, project: null })}
      />
    );
  }

  const projects = [
    {
      title: "Event-buddy",
      description: "Full-stack event-management solution with NestJs, Next.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard. It enables users to search for events, check upcoming events and history, purchase tickets using the SSLCommerz payment gateway, generate pdf and send invoices and tickets via mail. ",
      image: EventBuddyImg,
      technologies: ["NestJs", "Next.js", "PostgreSQL", "JWT", "Redux"],
      github: "https://github.com/hrmasum99/event-buddy",
      live: "https://event-buddy-bd.vercel.app"
    },
    {
      title: "Entrepreneurial Idea Showcase Platform",
      description: "Full-stack idea showcase and investment solution with NestJs, Next.js, and PostgreSQL. This platform enabling entrepreneurs to submit, evaluate, and secure Investments in their business ideas. It supports multiple user roles, including entrepreneurs, judge-sponsors, event coordinators, and admins, ensuring seamless idea management, event coordination, feedback, and investment tracking.",
      image: EISPImg,
      technologies: ["NestJs", "Next.js", "PostgreSQL", "JWT"],
      github: "https://github.com/hrmasum99/event-buddy",
      live: "https://eisp-com.app"
    },
    // {
    //   title: "E-Commerce Platform",
    //   description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    //   image: "🛒",
    //   technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    //   github: "#",
    //   live: "#"
    // },
    // {
    //   title: "E-Commerce Platform",
    //   description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    //   image: "🛒",
    //   technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    //   github: "#",
    //   live: "#"
    // },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: TaskManagerImg,
      technologies: ["Next.js", "Socket.io", "Go", "MySQL"],
      github: "https://github.com/hrmasum99/task-manager",
      live: "https://task-manager-com.netlify.app/"
    },
    {
      title: "Public Fund and Welfare Management System",
      description: "A desktop based charity platform with .NET Framework. This desktop application allows users to donate funds for social events and contribute as volunteers. The platform acts as a centralized system for efficiently managing events, donations, sponsors, and volunteers.",
      image: CharityImg,
      technologies: ["C#", ".NET Framework", "Winforms", "SQL Server"],
      github: "https://github.com/hrmasum99/Public-Fund-And-Welfare-Management-System",
      live: "#"
    },
    {
      title: "Event Management System",
      description: "A Web platform allows users to register, create, view, and manage events, send RSVP reminders via email, and integrate Google Maps for event locations using a .NET Web API backend.",
      image: EventMGTImg,
      technologies: ["ASP.NET MVC", "Web API", "SQL Server", "SOLID", "n-tier architecture"],
      github: "https://github.com/hrmasum99/Dot-NET/tree/master/Event%20Management",
      live: "#"
    },
    {
      title: "Departmental Store Management System",
      description: "The Departmental Store Management System is a Java-based application that manages products, employees, and categories like Dairy, Bakery, Fruits, Vegetables, and Home Care, ensuring efficient store operations and inventory tracking. ",
      image: DeptStoreImg,
      technologies: ["Java", "OOP Concept"],
      github: "https://github.com/hrmasum99/Departmental-Store-Management-System",
      live: "#"
    },
    // {
    //   title: "Weather Dashboard",
    //   description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    //   image: "../assets/weather.png",
    //   technologies: ["React", "API Integration", "Chart.js", "Geolocation"],
    //   github: "#",
    //   live: "#"
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-h-[430px] bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              {/* Card body as flex column */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold mb-3 truncate">{project.title}</h3>
                <p className="mb-4 line-clamp-5 text-gray-600">{project.description}</p>

                {/* Always sticks to bottom */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-sm rounded bg-purple-100 text-purple-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={() =>
                        handleLinkClick(project.github, "github", project.title)
                      }
                      className="flex items-center hover:text-purple-600"
                    >
                      <Github className="w-4 h-4 mr-1" /> Code
                    </button>
                    <button
                      onClick={() =>
                        handleLinkClick(project.live, "demo", project.title)
                      }
                      className="flex items-center hover:text-purple-600"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;