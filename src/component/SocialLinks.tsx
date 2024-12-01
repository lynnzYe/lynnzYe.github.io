import React from 'react';

interface SocialLinksProps {
  twitterUrl: string;
  githubUrl: string;
  emailAddress: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  twitterUrl, 
  githubUrl, 
  emailAddress 
}) => {
  return (
    <div className="flex space-x-4 items-center justify-center my-4">
      <a 
        href={twitterUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative z-10 text-blue-500 hover:text-blue-600 transition-colors transform hover:scale-110 active:scale-95"
        aria-label="Twitter Profile"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zm-1.473 19.347h2.034L5.657 3.227H3.474L17.428 20.5z"/>
        </svg>
      </a>
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative z-10 text-gray-800 hover:text-gray-700 transition-colors transform hover:scale-110 active:scale-95"
        aria-label="GitHub Profile"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <a 
        href={`mailto:${emailAddress}`} 
        className="relative z-10 text-red-500 hover:text-red-600 transition-colors transform hover:scale-110 active:scale-95"
        aria-label="Email"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.833-3.1 5.682 6.812h-19.169l5.83-6.811zm9.412-1.189l4.646-3.778v9.342l-4.646-5.564z"/>
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;