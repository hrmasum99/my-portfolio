import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Coffee, 
  Cpu, 
  Download, 
  Globe, 
  Loader, 
  RefreshCw,
  Server,
  Wifi,
  Database,
  GitBranch,
  Terminal,
  Zap,
  Clock
} from 'lucide-react';

// Animated Dots Component
const AnimatedDots = ({ size = "w-2 h-2", color = "bg-purple-600" }) => (
  <div className="flex space-x-1">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className={`${size} ${color} rounded-full animate-bounce`}
        style={{ animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);

// Pulse Ring Animation
const PulseRing = () => (
  <div className="relative">
    <div className="w-20 h-20 bg-purple-600 rounded-full animate-ping absolute"></div>
    <div className="w-20 h-20 bg-purple-600 rounded-full animate-pulse"></div>
  </div>
);

// Spinning Gradient Circle
const SpinningCircle = () => (
  <div className="relative w-16 h-16">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-spin">
      <div className="absolute inset-2 bg-white rounded-full"></div>
    </div>
  </div>
);

// Progress Bar Component
const ProgressBar = ({ progress = 0, showPercentage = true }) => (
  <div className="w-full max-w-md">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm text-gray-600">Loading...</span>
      {showPercentage && (
        <span className="text-sm font-semibold text-purple-600">{Math.round(progress)}%</span>
      )}
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

// Loading Messages Component
const LoadingMessages = ({ messages, currentIndex }) => (
  <div className="text-center min-h-[3rem] flex items-center justify-center">
    <div className="transition-all duration-500 ease-in-out">
      <p className="text-gray-600 text-lg animate-fade-in">
        {messages[currentIndex]}
      </p>
    </div>
  </div>
);

// Tech Stack Animation
const TechStackAnimation = () => {
  const techIcons = [Code, Database, Server, GitBranch, Terminal, Globe, Cpu, Zap];
  
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {techIcons.map((Icon, index) => (
        <div
          key={index}
          className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center animate-pulse"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
      ))}
    </div>
  );
};

// Main Loading Component
const CustomLoadingPage = ({ 
  type = 'default',
  message = 'Loading...',
  showProgress = false,
  duration = 3000,
  onComplete,
  customMessages = []
}) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [dots, setDots] = useState('');

  const defaultMessages = [
    'Initializing portfolio components...',
    'Loading project data...',
    'Preparing user interface...',
    'Optimizing performance...',
    'Almost ready!',
    'Welcome to my portfolio!'
  ];

  const messages = customMessages.length > 0 ? customMessages : defaultMessages;

  useEffect(() => {
    if (showProgress) {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            onComplete && onComplete();
            return 100;
          }
          return prev + (100 / (duration / 100));
        });
      }, 100);

      return () => clearInterval(progressInterval);
    }
  }, [showProgress, duration, onComplete]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % messages.length);
    }, 800);

    return () => clearInterval(messageInterval);
  }, [messages.length]);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  const renderLoadingAnimation = () => {
    switch (type) {
      case 'spinner':
        return (
          <div className="flex justify-center mb-8">
            <RefreshCw className="w-12 h-12 text-purple-600 animate-spin" />
          </div>
        );

      case 'pulse':
        return (
          <div className="flex justify-center mb-8">
            <PulseRing />
          </div>
        );

      case 'circle':
        return (
          <div className="flex justify-center mb-8">
            <SpinningCircle />
          </div>
        );

      case 'dots':
        return (
          <div className="flex justify-center mb-8">
            <AnimatedDots size="w-4 h-4" />
          </div>
        );

      case 'tech':
        return <TechStackAnimation />;

      case 'minimal':
        return (
          <div className="flex justify-center items-center mb-8">
            <Loader className="w-8 h-8 text-purple-600 animate-spin mr-3" />
            <span className="text-gray-600">Loading{dots}</span>
          </div>
        );

      case 'coffee':
        return (
          <div className="flex flex-col items-center mb-8">
            <Coffee className="w-16 h-16 text-purple-600 mb-4 animate-bounce" />
            <p className="text-gray-600">Brewing something awesome...</p>
          </div>
        );

      case 'download':
        return (
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <Download className="w-16 h-16 text-purple-600 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <p className="text-gray-600 mt-4">Downloading resources...</p>
          </div>
        );

      case 'network':
        return (
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center space-x-4">
              <Wifi className="w-8 h-8 text-purple-600 animate-pulse" />
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-purple-600 rounded animate-pulse"
                    style={{ 
                      height: `${(i + 1) * 8}px`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
              <Server className="w-8 h-8 text-purple-600 animate-pulse" />
            </div>
            <p className="text-gray-600 mt-4">Establishing connection...</p>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="text-center max-w-lg w-full">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Portfolio</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded"></div>
        </div>

        {/* Loading Animation */}
        {renderLoadingAnimation()}

        {/* Dynamic Messages */}
        <LoadingMessages messages={messages} currentIndex={messageIndex} />

        {/* Progress Bar */}
        {showProgress && (
          <div className="mt-8">
            <ProgressBar progress={progress} />
          </div>
        )}

        {/* Static Message */}
        {!showProgress && type !== 'minimal' && (
          <div className="mt-6">
            <p className="text-gray-500 text-sm">{message}</p>
          </div>
        )}

        {/* Loading Stats (Optional) */}
        {type === 'detailed' && (
          <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Components</span>
                <span className="text-purple-600 font-semibold">Loading...</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Assets</span>
                <span className="text-purple-600 font-semibold">Processing...</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Scripts</span>
                <span className="text-green-600 font-semibold">Ready</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Styles</span>
                <span className="text-green-600 font-semibold">Loaded</span>
              </div>
            </div>
          </div>
        )}

        {/* Time Estimate */}
        {duration > 2000 && (
          <div className="mt-6 flex items-center justify-center text-gray-400 text-xs">
            <Clock className="w-3 h-3 mr-1" />
            <span>Estimated time: {Math.ceil(duration / 1000)} seconds</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Preset Loading Components for specific use cases
export const PortfolioLoader = ({ onComplete }) => (
  <CustomLoadingPage
    type="default"
    showProgress={true}
    duration={3000}
    onComplete={onComplete}
    customMessages={[
      'Welcome to my digital portfolio...',
      'Loading my latest projects...',
      'Preparing interactive elements...',
      'Optimizing your experience...',
      'Ready to explore!'
    ]}
  />
);

// export const ProjectLoader = ({ projectName, onComplete }) => (
//   <CustomLoadingPage
//     type="tech"
//     message={`Loading ${projectName}...`}
//     duration={2000}
//     onComplete={onComplete}
//     customMessages={[
//       `Initializing ${projectName}...`,
//       'Loading project assets...',
//       'Preparing demonstrations...',
//       'Almost ready to showcase!'
//     ]}
//   />
// );

// export const ContactFormLoader = ({ onComplete }) => (
//   <CustomLoadingPage
//     type="network"
//     showProgress={true}
//     duration={1500}
//     onComplete={onComplete}
//     customMessages={[
//       'Connecting to email service...',
//       'Preparing your message...',
//       'Sending...'
//     ]}
//   />
// );

export const DownloadLoader = ({ fileName, onComplete }) => (
  <CustomLoadingPage
    type="download"
    showProgress={true}
    duration={2000}
    onComplete={onComplete}
    customMessages={[
      `Preparing ${fileName}...`,
      'Compressing files...',
      'Starting download...'
    ]}
  />
);

export const LinkOpenLoader = ({ linkName, onComplete }) => (
  <CustomLoadingPage
    type="minimal"
    message={`Opening ${linkName}...`}
    duration={2000}
    onComplete={() => {
      if (onComplete) onComplete();
    }}
    customMessages={[
      `Fetching ${linkName}...`,
      "Connecting to server...",
      "Launching..."
    ]}
  />
);

// export const MinimalLoader = ({ message = 'Please wait' }) => (
//   <CustomLoadingPage
//     type="minimal"
//     message={message}
//   />
// );

// Usage Hook for Loading States
export const useLoading = (initialState = false) => {
  const [isLoading, setIsLoading] = useState(initialState);
  const [loadingType, setLoadingType] = useState('default');
  const [loadingMessage, setLoadingMessage] = useState('Loading...');

  const startLoading = (type = 'default', message = 'Loading...') => {
    setLoadingType(type);
    setLoadingMessage(message);
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const LoadingComponent = () => {
    if (!isLoading) return null;
    
    return (
      <CustomLoadingPage
        type={loadingType}
        message={loadingMessage}
        onComplete={stopLoading}
      />
    );
  };

  return {
    isLoading,
    startLoading,
    stopLoading,
    LoadingComponent
  };
};

export default CustomLoadingPage;