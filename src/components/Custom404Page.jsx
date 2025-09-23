import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  Github, 
  ExternalLink, 
  ArrowLeft, 
  Mail, 
  MessageCircle,
  Code,
  Globe,
  FileText,
  CheckCircle,
  XCircle,
  Info
} from 'lucide-react';

const Custom404Page = ({ 
  linkType = 'unknown', // 'github', 'demo', or 'unknown'
  projectName = 'Project',
  onGoBack 
}) => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hrmasum67@gmail.com');
    setCopiedToClipboard('email');
    setTimeout(() => setCopiedToClipboard(''), 2000);
  };

  const getPageContent = () => {
    switch (linkType) {
      case 'github':
        return {
          title: 'GitHub Repository Not Available',
          subtitle: 'The source code for this project is currently unavailable',
          icon: <Github className="w-16 h-16 text-gray-400" />,
          reasons: [
            'The repository might be private or under review',
            'Code is being refactored or updated',
            'Project is under NDA or confidentiality agreement',
            'Repository has been temporarily moved or archived'
          ],
          alternatives: [
            {
              icon: <ExternalLink className="w-5 h-5" />,
              title: 'View Live Demo',
              description: 'Experience the project in action with the live demonstration',
              action: 'Try Live Demo'
            },
            {
              icon: <FileText className="w-5 h-5" />,
              title: 'Request Code Samples',
              description: 'Contact me for specific code snippets or technical details',
              action: 'Request Samples'
            },
            {
              icon: <MessageCircle className="w-5 h-5" />,
              title: 'Technical Discussion',
              description: 'Schedule a call to discuss the technical implementation',
              action: 'Schedule Call'
            }
          ]
        };
      
      case 'demo':
        return {
          title: 'Live Demo Not Available',
          subtitle: 'The live demonstration for this project is currently unavailable',
          icon: <ExternalLink className="w-16 h-16 text-gray-400" />,
          reasons: [
            'Server maintenance or hosting issues',
            'Project is being deployed to a new platform',
            'Demo environment is being updated',
            'Temporary hosting service interruption'
          ],
          alternatives: [
            {
              icon: <Github className="w-5 h-5" />,
              title: 'View Source Code',
              description: 'Explore the complete codebase and technical implementation',
              action: 'Browse Code'
            },
            {
              icon: <FileText className="w-5 h-5" />,
              title: 'View Screenshots',
              description: 'See visual previews and interface screenshots of the project',
              action: 'View Gallery'
            },
            {
              icon: <Code className="w-5 h-5" />,
              title: 'Run Locally',
              description: 'Get instructions to clone and run the project on your machine',
              action: 'Setup Guide'
            }
          ]
        };
      
      default:
        return {
          title: '404 - Page Not Found',
          subtitle: 'The page you are looking for does not exist or has been moved.',
          icon: <AlertTriangle className="w-16 h-16 text-gray-400" />,
          reasons: [
            'The URL may be incorrect or mistyped.',
            'The page may have been moved or deleted.',
            'You may have followed a broken or outdated link.',
            'There might be a temporary issue with the server.'
          ],
          alternatives: [
            {
              icon: <Mail className="w-5 h-5" />,
              title: 'Contact Developer',
              description: 'Reach out directly for project access or information',
              action: 'Send Message'
            },
            {
              icon: <FileText className="w-5 h-5" />,
              title: 'Project Details',
              description: 'Learn more about the project through detailed documentation',
              action: 'Read More'
            },
            {
              icon: <Globe className="w-5 h-5" />,
              title: 'Portfolio Home',
              description: 'Return to the main portfolio to explore other projects',
              action: 'Go Home'
            }
          ]
        };
    }
  };

  const content = getPageContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Main Error Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              {content.icon}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {content.title}
            </h1>
            <p className="text-gray-600 text-lg">
              {content.subtitle}
            </p>
            <div className="mt-4 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg inline-block">
              <strong>Project:</strong> {projectName}
            </div>
          </div>

          {/* Possible Reasons */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2 text-blue-500" />
              Possible Reasons
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {content.reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alternative Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
              What You Can Do Instead
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {content.alternatives.map((alternative, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      {alternative.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900">{alternative.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{alternative.description}</p>
                  <button className="w-full px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm">
                    {alternative.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions Toggle */}
          <div className="border-t pt-6">
            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className="w-full md:w-auto mx-auto flex items-center justify-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span>
                {showInstructions ? 'Hide' : 'Show'} Setup Instructions
              </span>
            </button>
          </div>
        </div>

        {/* Detailed Instructions */}
        {showInstructions && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Developer Instructions & Alternatives
            </h2>

            <div className="space-y-8">
              {/* GitHub Alternatives */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Github className="w-5 h-5 mr-2" />
                  When GitHub Repository is Unavailable
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Alternative Ways to Access Code:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 font-bold">1.</span>
                      <span><strong>Request Private Access:</strong> Contact me directly for repository access if it's private due to security or NDA reasons.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 font-bold">2.</span>
                      <span><strong>Code Snippets:</strong> I can share specific code examples or implementation details via email.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 font-bold">3.</span>
                      <span><strong>Technical Documentation:</strong> Detailed architecture diagrams and technical specifications are available upon request.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 font-bold">4.</span>
                      <span><strong>Screen Share Demo:</strong> Schedule a video call for a live code walkthrough and explanation.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Demo Alternatives */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  When Live Demo is Unavailable
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Alternative Ways to Experience the Project:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 font-bold">1.</span>
                      <span><strong>Local Setup:</strong> Clone the repository and run it locally with provided setup instructions.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 font-bold">2.</span>
                      <span><strong>Video Demonstration:</strong> Watch a recorded video walkthrough of all features and functionality.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 font-bold">3.</span>
                      <span><strong>Screenshots & Gallery:</strong> Browse high-quality screenshots showcasing the user interface and features.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-600 font-bold">4.</span>
                      <span><strong>Interactive Prototype:</strong> View a Figma or similar prototype showing the user flow and design.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Direct Access
                </h3>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    For immediate access to project resources or to discuss technical details, contact me directly:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleCopyEmail}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{copiedToClipboard === 'email' ? 'Copied!' : 'hrmasum67@gmail.com'}</span>
                    </button>
                    <a
                      href="mailto:hrmasum67@gmail.com?subject=Project Access Request&body=Hi! I'd like to access the project: [Project Name]. Please let me know how to proceed."
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="text-center">
          <button
            onClick={onGoBack || (() => window.history.back())}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back to Portfolio</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Usage examples for different scenarios
export const GitHubNotFound = ({ projectName, onGoBack }) => (
  <Custom404Page linkType="github" projectName={projectName} onGoBack={onGoBack} />
);

export const DemoNotFound = ({ projectName, onGoBack }) => (
  <Custom404Page linkType="demo" projectName={projectName} onGoBack={onGoBack} />
);

export const GeneralNotFound = ({ projectName, onGoBack }) => (
  <Custom404Page linkType="unknown" projectName={projectName} onGoBack={onGoBack} />
);

export default Custom404Page;