import React from 'react';
import HeroSection from './components/HeroSection';
// import Header from './components/Header'; // eslint-disable-next-line // Navbar removed
import Background from './components/Background';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
//import Section from './components/Section';
import profilePicture from './assets/images/ash-edmonds-Koxa-GX_5zs-unsplash.jpg';



// for project images
import project1Image from './assets/images/horizontravels4portfolio.jpg';
import project2Image from './assets/images/watchmanapp.jpg';
import project3Image from './assets/images/Mockup.jpg'; 
import project4Image from './assets/images/cityexplorer-thumb.jpg';
import project5Image from './assets/images/Mockup4portfolioitself.jpg';
import project6Image from './assets/images/arduinomockup1.jpg';

import projectAImage from './assets/images/NuroAnalytics.jpg'; 
import NuroFitLanding from './assets/images/NF-PIC.jpg'
import WatchEmail from './assets/images/WatchEmail.png';
import GlowSearch from './assets/images/GlowSearch.jpeg';
import GlowCDash from './assets/images/GlowCDash.jpeg';



import './styles.css';


const App = () => {
  return (
    <>
      <div className="overflow-x-hidden w-full max-w-full">
        <div className="custom-hero-bg">
          {/* <Header /> */} 
          <HeroSection />
        </div>
      </div>
      <main className="overflow-x-hidden w-full max-w-full">
      <AboutMe />
      <Experience />
      <Projects />

        <div className="w-full max-w-full custom-project-bg text-white py-8 overflow-x-hidden" style={{ display: 'none' }}>
          <section id="old-projects-hidden" className="py-8 mt-8 w-full max-w-full overflow-x-hidden">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold mb-4"> My Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">



                <div className="relative project-card">
                  <img src={projectAImage} alt="Phishing Detection App" className="project-image" />
                  <div className="project-content">
                    <h3 className="project-title">NuroFit - AI-Powered Fitness and Nutrition App</h3>
                    <p className="project-description">
                    Awarded a First-Class Dissertation:
                    Developed an AI-powered Fitness App using React, Flask, and MongoDB. It delivers personalised workouts and meal plans via OpenAI, with secure authentication, profile tracking, and a dynamic dashboard built with Tailwind CSS and Recharts to visualise user progress and activity trends.
                    </p>
                   
                    <div className="tech-badges">
                      <span className="badge badge-tailwind">Python</span>
                      <span className="badge badge-html">React JS</span>
                      <span className="badge badge-css">TailwindCSS</span>
                      <span className="badge badge-js">OpenAI</span>
                      <span className="badge badge-tailwind">MongoDB</span>
                      <span className="badge badge-css">ReCharts</span>
                    </div>
                  </div>
                </div>



                <div className="relative project-card project-card">
                  <img src={project1Image} alt="Travel Website" className="project-image" />
                  <div className="project-content">
                    <h3 className="project-title">Travel Website</h3>
                    <p className="project-description">
                    Created a travel website with destination search, travel guides, and booking options. Implemented secure user authentication and used technologies like HTML, CSS, JavaScript and Bootstrap for a responsive design. Enhancing the overall aesthetic and user experience.
                    </p>
                   
                    <div className="tech-badges">
                    <span className="badge badge-tailwind">Python Flask</span>
                    <span className="badge badge-html">HTML</span>
                    <span className="badge badge-css">Bootstrap</span>
                    <span className="badge badge-js">JavaScript</span>
                   </div>
                  </div>
                </div>

                <div className="relative project-card">
                  <img src={project2Image} alt="Phishing Detection App" className="project-image" />
                  <div className="project-content">
                    <h3 className="project-title">Phishing Scanner</h3>
                    <p className="project-description">
                    Developed a Phishing Detection App using Python, Flask, and Tailwind CSS. It scans emails and URLs for threats, producing detailed reports with scores and verification from multiple cyber-intelligence sources, utilizing APIs like Hunter API and Google Safe Browsing for comprehensive analysis.
                    </p>
                   
                    <div className="tech-badges">
                    <span className="badge badge-tailwind">Python</span>
                    <span className="badge badge-html">JS</span>
                    <span className="badge badge-css">TailwindCSS</span>
                    <span className="badge badge-js">HTML</span>
                    <span className="badge badge-tailwind">Hunter.IO API</span>
                    <span className="badge badge-css">VirusTotal API</span>
                   </div>
                  </div>
                </div>

                <div className="relative project-card">
                  <img src={project3Image} alt="Third Project" className="project-image" />
                  <div className="project-content">
                    <h3 className="project-title">Front End Development</h3>
                    <p className="project-description">
                    Developed an interactive travel guide featuring major UK destinations like London and more. Utilized HTML, CSS, and JavaScript to create a responsive and user-friendly interface with detailed information and vibrant visuals.
                    </p>
                   
                    <div className="tech-badges">
                    <span className="badge badge-tailwind">JavaScript</span>
                    <span className="badge badge-html">HTML</span>
                    <span className="badge badge-css">CSS</span>
                   </div>
                  </div>
                </div>

                <div className="relative project-card">
                 <img src={project4Image} alt="Fourth Project" className="project-image" />
                 <div className="project-content">
                  <h3 className="project-title">Twin City Explorer</h3>
                  <p className="project-description">
                  Collaborated in a group project developing a City Explorer web application using JS and PHP, integrating Google Maps API and OpenWeather API to provide weather forecasts and POI data for twin-cities like Chicago and Birmingham. The app features interactive map markers, real-time weather updates, and comprehensive POI details that users can explore with a click. 
                 </p>
                 
                 <div className="tech-badges">
                    <span className="badge badge-tailwind">PHP</span>
                    <span className="badge badge-html">OpenWeather API</span>
                    <span className="badge badge-css">GoogleMaps API</span>
                    <span className="badge badge-js">Flickr API</span>
                   </div>
               </div>
              </div>


              <div className="relative project-card">
                 <img src={project5Image} alt="Fifth Project" className="project-image" />
                 <div className="project-content">
                  <h3 className="project-title"> React Portfolio</h3>
                  <p className="project-description">
                  Developed a personal portfolio website showcasing my skills, projects, and experiences as a software developer. The site features a responsive, modern design, built with React and Tailwind CSS for efficient styling and performance. Key features include interactive sections, animated components, and an intuitive navigation bar.
                 </p>

                 <div className="tech-badges">
                    <span className="badge badge-tailwind">React</span>
                    <span className="badge badge-html">Tailwind CSS</span>
                    <span className="badge badge-css">CSS</span>
                   </div>
               </div>
              </div>
              

              <div className="relative project-card">
                 <img src={project6Image} alt="Sixth Project" className="project-image" />
                 <div className="project-content">
                  <h3 className="project-title"> Arduino -  Ultrasonic Sensor Monitoring System</h3>
                  <p className="project-description">
                  Developed an Arduino-based system using an ultrasonic sensor to measure object distance. Programmed in Arduino (C), it featured real-time feedback displayed on an LCD and auditory alerts via a buzzer.
                 </p>
                 
                 <div className="tech-badges">
                    <span className="badge badge-tailwind">ARDUINO</span>
                    <span className="badge badge-html">C</span>
                    
                   </div>
               </div>
              </div>

              </div>
            </div>
          </section>

          <section id="technologies-education" className="py-16 w-full max-w-full overflow-x-hidden">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4 text-white">Technologies & Education</h2>
  </div>

  <div className="flex flex-col justify-center items-center gap-12">
    {/* Education Section */}
    <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-8 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Education</h3>
      </div>
      <ul className="text-gray-300 space-y-4">
        <li>
          <strong className="font-extrabold text-gray-200">Degree:</strong>
          <span className=" text-md text-gray-200 font-semibold bg-purple-900 py-1 px-2 rounded-lg mt-2 inline-block">
            BSc in Software Engineering for Business
          </span>
          <p className="text-md text-gray-200 font-semibold">University of the West of England</p>
        </li>
        <li>
          <strong className="font-extrabold text-gray-200">Grade:</strong>
          <span className=" text-md text-gray-200 font-semibold bg-purple-900 py-1 px-2 rounded-lg mt-2 inline-block">
            First Class Honours
          </span>
          <ul className="list-disc list-inside text-gray-200 mt-2">
            <li className="font-semibold">Achieved a First Class Grade in both 2nd and 3rd years, averaging 74% and 72%</li>
            <li className="font-semibold">Awarded a First Class Grade of 71% for dissertation</li>
          </ul>
        </li>
        <li>
          <strong className="font-extrabold text-gray-200">Key Modules:</strong>
          <ul className="list-disc list-inside text-gray-200 mt-2">
            <li className="font-semibold">Object Oriented Systems Development</li>
            <li className="font-semibold">Data Structures and Algorithms</li>
            <li className="font-semibold">Advanced Databases</li>
            <li className="font-semibold">IT Practice: Consultancy Project</li>
            <li className="font-semibold">Data, Schemas, and Applications</li>
            <li className="font-semibold">Software Development Project</li>
          </ul>
        </li>
      </ul>
    </div>

    {/* Technologies Section */}
    <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-8 rounded-lg shadow-lg"
      style={{ maxWidth: '500px' }}>
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Technologies and Skills</h3>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <span className="text-white font-bold bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-500 transition-colors">Python</span>
        <span className="text-white font-bold bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-500 transition-colors">TypeScript</span>
        <span className="text-white font-bold bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-500 transition-colors">JavaScript</span>
        <span className="text-white font-bold bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-500 transition-colors">React Native</span>
        <span className="text-white font-bold bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-500 transition-colors">MongoDB</span>
        <span className="text-white font-bold bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-500 transition-colors">PostgreSQL</span>
        <span className="text-white font-bold bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-500 transition-colors">Mobile App Development</span>
        <span className="text-white font-bold bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-500 transition-colors">Web Development</span>
      </div>
    </div>
  </div>
</section>

<section id="contact" className="py-16 pb-0 w-full max-w-full overflow-x-hidden custom-project-bg">
  <div className="contact-form">
    <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
    <p className="text-lg text-center mb-6">Feel free to send me an email! Or message me on LinkedIn.</p>
    <p className="text-lg text-center mb-6">Raiyanabedinn@gmail.com | @RaiyanAbedin</p>

    <div className="flex justify-center">
    <a href="mailto:raiyanabedinn@gmail.com" className="contact-button position-center">
      Send Email
    </a>
    </div>
  </div>
</section>


        </div>
      </main>
      <footer className="w-full max-w-full py-8 pt-12 text-center text-white custom-project-bg overflow-x-hidden" style={{ marginTop: 0 }}>
        <p className="text-lg mb-2">Thanks for stopping by!</p>
        <p className="text-sm text-gray-400">&copy; 2024 Raiyan Abedin | Raiyanabedin.com</p>
      </footer>
    </>
  );
};

export default App;
