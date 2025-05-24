// import logo from './logo4.svg';
// import React from 'react';
// import heroImage from './hero-image.png';

// const ComingSoon = () => {
//     return (
//         <div className="coming-soon-page">
//             <header className="header">
//                 <img src={logo} className="app-logo" alt="The Brillovate Clinic Logo" />
//                 <h1>The Brillovate Clinic</h1>
//                 <p>Coming Soon</p>
//             </header>
//             <main className="main">
//                 <img src={heroImage} alt="Hero Image" />
//                 <h2>We're almost ready!</h2>
//                 <p>Stay tuned for our grand opening.</p>
//             </main>
//             <footer className="footer">
//                 <p>Follow us on:</p>
//                 <ul>
//                     <li><a href="https://www.facebook.com/yourclinic">Facebook</a></li>
//                     <li><a href="https://www.instagram.com/yourclinic">Instagram</a></li>
//                     <li><a href="https://www.twitter.com/yourclinic">Twitter</a></li>
//                 </ul>
//                 <p>The Brillovate Clinic. Your health, our priority.</p>
//             </footer>
//         </div>
//     );
// };

// export default ComingSoon;

/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import barner from '/logo/first_banner.png';

// Define styled components for better organization and reusability
const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1a202c; /* bg-gray-800 */
  color: #e2e8f0; /* text-gray-100 */
  padding: 1rem; /* p-4 */
  font-family: 'Inter', sans-serif;
`;

const LogoContainer = styled.div`

`

const ContentContainer = styled.div`
  text-align: center;
  background-color: #2d3748; /* bg-gray-700 */
  padding: 2rem; /* p-8 */
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
  max-width: 70vw;
  width: 100%;
  min-height: 50vh;
`;

const Heading = styled.h1`
  font-size: 3rem; /* text-5xl */
  @media (min-width: 768px) { /* md:text-6xl */
    font-size: 3.75rem;
  }
  font-weight: 800; /* font-extrabold */
  margin-bottom: 15rem; /* mb-4 */
  color: #90cdf4; /* text-blue-300 */
`;

const SubHeading = styled.p`
  font-size: 2.125rem; /* text-lg */
  @media (min-width: 768px) { /* md:text-xl */
    font-size: 3.25rem;
  }
  margin-bottom: 2.5rem; /* mb-6 */
  color: #cbd5e0; /* text-gray-300 */
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #4a5568; /* bg-gray-600 */
  border-radius: 9999px; /* rounded-full */
  height: 1.25rem; /* h-5 */
  margin-bottom: 1rem; /* mb-4 */
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ progress: number }>`
  background-color: #63b3ed; /* bg-blue-400 */
  height: 100%;
  border-radius: 9999px; /* rounded-full */
  transition: width 0.1s linear; /* transition-all duration-100 ease-linear */
  width: ${(props) => props.progress}%;
`;

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.875rem; /* text-sm */
  color: #a0aec0; /* text-gray-400 */
  margin-bottom: 5rem; /* mb-8 */
`;

const NotifyButton = styled.button`
  background-color: #4299e1; /* bg-blue-500 */
  &:hover {
    background-color: #3182ce; /* hover:bg-blue-600 */
  }
  color: white;
  font-weight: bold;
  padding: 1.25rem 2rem; /* py-3 px-8 */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
  transition: all 0.3s ease; /* transition-colors duration-300 transform */
  &:hover {
    transform: scale(1.05); /* hover:scale-105 */
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5); /* focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 */
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5.5rem; /* mt-10 */
  gap: 3rem; /* space-x-4 */
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem; /* w-12 */
  height: 5rem; /* h-12 */
  border-radius: 9999px; /* rounded-full */
  border: 2px solid #a0aec0; /* border-2 border-gray-400 */
  color: #a0aec0; /* text-gray-400 */
  transition: all 0.3s ease; /* transition-all duration-300 */
  &:hover {
    color: white;
    border-color: white;
  }
`;

const CopyrightText = styled.p`
  margin-top: 7rem; /* mt-12 */
  font-size: 1.875rem; /* text-sm */
  color: #a0aec0; /* text-gray-500 */
`;

// Main App component for the "Under Construction" page
const ComingSoon: React.FC = () => {
  // State to manage the progress bar percentage
  const [progress, setProgress] = useState<number>(0);

  // Effect hook to simulate the progress bar animation
  useEffect(() => {
    // Set up an interval to update the progress every 50 milliseconds
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // If progress reaches 100, clear the interval
        if (prevProgress >= 50) {
          clearInterval(interval);
          return 50; // Cap progress at 100%
        }
        // Increment progress by 1%
        return prevProgress + 1;
      });
    }, 50); // Update every 50ms

    // Cleanup function: clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  // Handler for the "Notify Me" button click
  const handleNotifyMeClick = () => {
    // In a real application, you would integrate with a backend service
    // to handle notifications (e.g., collecting emails).
    // For this example, we'll use a simple alert.
    // NOTE: In a production web app, consider a custom modal instead of alert()
    // for better user experience and styling control.
    alert('You will be notified when the site is ready!');
  };

  return (
    <PageContainer>
      <LogoContainer>
        <img src={barner} alt="Brillovate Banner" />
      </LogoContainer>
      <ContentContainer>
        {/* Main heading for the under construction page */}
        <Heading>
          UNDER CONSTRUCTION
        </Heading>
        {/* Subheading indicating site readiness */}
        <SubHeading>
          SITE NEARLY READY
        </SubHeading>

        {/* Progress bar container */}
        <ProgressBarContainer>
          {/* Actual progress bar, width controlled by state */}
          <ProgressBarFill
            progress={progress}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </ProgressBarContainer>

        {/* Progress text displaying start and end percentages */}
        <ProgressText>
          <span>0%</span>
          <span>100%</span>
        </ProgressText>

        {/* Notify Me button */}
        <NotifyButton onClick={handleNotifyMeClick}>
          Notify Me
        </NotifyButton>

        {/* Social media links */}
        <SocialLinksContainer>
          {/* Each social link is a circular button with an SVG icon */}
          <SocialLink href="#" target="_blank" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" css={css`width: 1.5rem; height: 1.5rem;`}>
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v2.127h2.787l-.45 2.89h-2.337v6.987C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </SocialLink>
          <SocialLink href="#" target="_blank" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" css={css`width: 1.5rem; height: 1.5rem;`}>
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-8 16h-2v-6h2v6zm-1-8c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm8 8h-2v-3.5c0-.861-.347-1.458-1.13-1.458-1.11 0-1.87.792-1.87 2.583V19h-2V5h2v3.18c.75-.58 1.97-.58 2.77 0V5h2v14z" />
            </svg>
          </SocialLink>
          <SocialLink href="#" target="_blank" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor" css={css`width: 1.5rem; height: 1.5rem;`}>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.252-1.691 4.771-4.919 4.919-1.265.058-1.645-.069-4.849-.069-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.205.012-3.584.069-4.849.148-3.252 1.691-4.771 4.919-4.919 1.265-.058 1.645-.069 4.849-.069m0 2.16c-3.259 0-3.668.014-4.948.072-4.358.2-6.78.882-8.892 2.995-2.112 2.112-2.794 4.534-2.995 8.892-.058 1.28-.072 1.689-.072 4.948 0 3.259.014 3.668.072 4.948.2 4.358.882 6.78 2.995 8.892 2.112 2.112 4.534 2.794 8.892 2.995 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.358-.2 6.78-.882 8.892-2.995 2.112-2.112 4.534-2.794 8.892-2.995-1.28-.058-1.689-.072-4.948-.072"></path><path d="M12 7.795a4.205 4.205 0 1 1 0 8.41 4.205 4.205 0 0 1 0-8.41m0 1.13a3.075 3.075 0 1 0 0 6.15 3.075 3.075 0 0 0 0-6.15"></path><path d="M22.004 3.857a.814.814 0 0 0-.3-.58.804.804 0 0 0-.58-.3.819.819 0 0 0-.586.3.814.814 0 0 0 .3.58.804.804 0 0 0 .58.3.819.819 0 0 0 .586-.3"></path>
            </svg>
          </SocialLink>
          <SocialLink href="#" target="_blank" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor" css={css`width: 1.5rem; height: 1.5rem;`}>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.68.734a4.856 4.856 0 0 0 2.168-2.68c-.951.564-2.005.978-3.137 1.203a4.821 4.821 0 0 0-8.172 4.334 1.397 1.397 0 0 1-2.407-1.298 4.797 4.797 0 0 0-4.076 2.074c-.387.661-.617 1.39-.617 2.157 0 1.648.834 3.094 2.107 3.952a8.558 8.558 0 0 1-1.45-.08c-.264-.015-.517-.04-.764-.077a4.73 4.73 0 0 0 3.277 3.905 9.482 9.482 0 0 1-5.573 2.32 9.422 9.422 0 0 1-1.801-.08c1.664 1.068 3.66 1.685 5.829 1.685 7.002 0 10.827-5.783 10.827-10.827 0-.164-.002-.327-.013-.487a7.68 7.68 0 0 0 2.373-2.48c.32-.08.644-.12 1.002-.12" />
            </svg>
          </SocialLink>
        </SocialLinksContainer>

        {/* Copyright information */}
        <CopyrightText>
          &copy; 2025 Brillovate. All Rights Reserved.
        </CopyrightText>
      </ContentContainer>
    </PageContainer>
  );
};

export default ComingSoon;