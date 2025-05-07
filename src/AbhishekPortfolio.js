import { useState, useEffect } from 'react';
import { ChevronUp, Moon, Sun, Github, Linkedin, Mail, Phone, Calendar, Code, Star, ArrowRight, ExternalLink } from 'lucide-react';

// Main App Component
export default function AbhishekPortfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Handle scroll events for nav visibility and active section
  useEffect(() => {
    const handleScroll = () => {
      // Hide/show navbar on scroll
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
      
      // Set active section
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isNavVisible ? 'top-0' : '-top-20'} ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Abhishek</span> Kumar
          </div>
          
          <div className="hidden md:flex space-x-6">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-2 py-1 transition-colors duration-300 ${activeSection === item.toLowerCase() ? (darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-600 border-b-2 border-blue-600') : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        <div className={`absolute inset-0 opacity-10 ${darkMode ? 'opacity-20' : 'opacity-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform rotate-12 scale-150"></div>
          <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
            {Array(100).fill(0).map((_, i) => (
              <div key={i} className="border border-gray-300 opacity-20"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="md:flex items-center">
            <div className="md:w-3/5 mb-10 md:mb-0 animate-fadeIn">
              <div className="mb-4">
                <span className={`inline-block py-1 px-3 rounded ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                  Hello, I'm
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Abhishek Kumar
              </h1>
              <h2 className={`text-xl lg:text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                React Native Developer | Mobile App Enthusiast
              </h2>
              <p className="text-lg mb-8 max-w-2xl">
                I'm a React Native Developer who specializes in creating smooth, performant, and delightful mobile applications. My passion for mobile development drives me to constantly improve and build apps that make a difference.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <button className={`px-6 py-3 rounded-md flex items-center ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-all duration-300`}>
                  View Resume <ArrowRight size={18} className="ml-2" />
                </button>
                <button className={`px-6 py-3 rounded-md flex items-center ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white transition-all duration-300`}>
                  Contact Me <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://github.com/ABHI24082001" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300`}>
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/abhishek-kumar-201b91195" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300`}>
                  <Linkedin size={20} />
                </a>
                <a href="mailto:sonukr24082001@gmail.com" className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300`}>
                  <Mail size={20} />
                </a>
                <a href="tel:8709138950" className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all duration-300`}>
                  <Phone size={20} />
                </a>
              </div>
            </div>
            
            <div className="md:w-2/5 flex justify-center">
              <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-100'} flex items-center justify-center relative`}>
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img src="/api/placeholder/400/400" alt="Abhishek Kumar" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
            <div className={`w-24 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          </div>
          
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className={`relative w-full max-w-lg mx-auto ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-1 rounded-lg`}>
                <div className={`absolute -inset-1 rounded-lg blur opacity-30 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                {/* Replace with your hosted image in production: 
                    Original source: https://drive.google.com/file/d/1euhP-zL2kXjEpXaSaJyrqBXeRAZpnpRG/view */}
                <img src="/api/placeholder/600/400" alt="Abhishek Kumar Workspace" className="rounded-lg relative z-10 w-full" />
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <p className="text-lg mb-6">
                I'm a cross-platform mobile developer with a focus on sleek UI and performance. I've delivered 15+ apps for clients across India and the Middle East using React Native, Swift, and Kotlin.
              </p>
              <p className="text-lg mb-6">
                My passion lies in solving complex problems and developing innovative solutions with next-gen technologies like AR/VR.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
                    <Code size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <p className="font-bold">15+ Projects</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Completed</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
                    <Calendar size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <p className="font-bold">2+ Years</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Experience</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
                    <Star size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <p className="font-bold">Cross-Platform</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Development</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
                    <Mail size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <p className="font-bold">Contact</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>sonukr24082001@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">My Skills</h2>
            <div className={`w-24 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCategory 
              title="Languages" 
              skills={['JavaScript', 'TypeScript', 'Java', 'Kotlin', 'Swift']}
              darkMode={darkMode}
            />
            
            <SkillCategory 
              title="Mobile Development" 
              skills={['React Native', 'Redux', 'Context API', 'Expo', 'Android Studio', 'iOS', 'React Navigation']}
              darkMode={darkMode}
            />
            
            <SkillCategory 
              title="Backend/Tech" 
              skills={['Firebase', 'Node.js', 'REST APIs', 'MySQL', 'AWS', 'GraphQL']}
              darkMode={darkMode}
            />
            
            <SkillCategory 
              title="Tools" 
              skills={['Git', 'GitHub', 'VS Code', 'Xcode', 'Firebase Console', 'Postman', 'Webpack', 'Figma']}
              darkMode={darkMode}
            />
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Work Experience</h2>
            <div className={`w-24 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          </div>
          
          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
            
            <div className="space-y-20">
              <TimelineItem 
                position="left"
                company="CIYA Technologies"
                role="Junior React Native Developer"
                period="Aug 2024 – Present"
                description="Built QR scanning, UPI, voice chatbot, and ESC/POS features using React Native, TypeScript, Redux-Saga, WebSocket, and AWS."
                darkMode={darkMode}
              />
              
              <TimelineItem 
                position="right"
                company="CloudTree Technologies"
                role="React Native Developer"
                period="Jun 2024 – Present"
                description="Building real-time messaging, push notification, and data-sync features with React Native, Redux, and Firebase."
                darkMode={darkMode}
              />
              
              <TimelineItem 
                position="left"
                company="Searchingyard Software"
                role="Software Developer"
                period="Apr 2023 – Jul 2024"
                description="Delivered e-commerce and healthcare apps, optimized performance via MongoDB and Node.js backend."
                darkMode={darkMode}
              />
              
              <TimelineItem 
                position="right"
                company="Recruit Nxt"
                role="Android Developer Intern"
                period="Oct 2022 – Mar 2023"
                description="Built Kotlin-based apps with Firebase, using the MVVM pattern."
                darkMode={darkMode}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className={`w-24 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Healthcare App"
              tech="React Native + Firebase"
              features={['Patient data management', 'Real-time doctor chat', 'User authentication']}
              darkMode={darkMode}
            />
            
            <ProjectCard 
              title="E-Commerce Platform"
              tech="React Native + Node.js"
              features={['Cart management', 'Secure payments', 'Product listing', 'Admin dashboard']}
              darkMode={darkMode}
            />
            
            <ProjectCard 
              title="Event Management System"
              tech="React Native + Firebase"
              features={['Create and manage events', 'Push notifications', 'Event reminders']}
              darkMode={darkMode}
            />
            
            <ProjectCard 
              title="Food Delivery App"
              tech="React Native + Redux"
              features={['Real-time order tracking', 'Integrated payment gateway', 'Restaurant listings']}
              darkMode={darkMode}
            />
            
            <ProjectCard 
              title="Social Media App"
              tech="React Native + Node.js"
              features={['User authentication', 'Chat features', 'Push notifications', 'Media sharing']}
              darkMode={darkMode}
            />
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certifications</h2>
            <div className={`w-24 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CertificationCard 
              title="React Native"
              issuer="Udemy"
              darkMode={darkMode}
            />
            
            <CertificationCard 
              title="JavaScript DSA"
              issuer="freeCodeCamp"
              darkMode={darkMode}
            />
            
            <CertificationCard 
              title="Web Development Bootcamp"
              issuer="Codecademy"
              darkMode={darkMode}
            />
            
            <CertificationCard 
              title="Firebase & Authentication"
              issuer="Coursera"
              darkMode={darkMode}
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className={`w-24 h-1 mx-auto ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          </div>
          
          <div className="md:flex">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
                    <Mail size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:sonukr24082001@gmail.com" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                      sonukr24082001@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
                    <Phone size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:8709138950" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                      8709138950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
                    <Github size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <a href="https://github.com/ABHI24082001" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                      github.com/ABHI24082001
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}>
                    <Linkedin size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <a href="https://linkedin.com/in/abhishek-kumar-201b91195" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                      linkedin.com/in/abhishek-kumar-201b91195
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">Name</label>
                    <input 
                      type="text" 
                      className={`w-full px-4 py-3 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-600'}`} 
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      className={`w-full px-4 py-3 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-600'}`} 
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    className={`w-full px-4 py-3 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-600'}`} 
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium">Message</label>
                  <textarea 
                    className={`w-full px-4 py-3 rounded-md ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 ${darkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-600'} min-h-32`} 
                    placeholder="Your Message"
                    rows="5"
                  ></textarea>
                </div>
                
                <button className={`px-8 py-3 rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-all duration-300`}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-2">
                <span className="text-blue-400">Abhishek</span> Kumar
              </div>
              <p className="text-gray-400">React Native Developer | Mobile App Enthusiast</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://github.com/ABHI24082001" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/abhishek-kumar-201b91195" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sonukr24082001@gmail.com" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Abhishek Kumar. All rights reserved.</p>
            
            <div className="mt-4 md:mt-0">
              <button 
                onClick={() => scrollToSection('home')} 
                className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-all duration-300"
              >
                <ChevronUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function SkillCategory({ title, skills, darkMode }) {
  return (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg transform transition-all duration-300 hover:-translate-y-2`}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mr-3`}></div>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineItem({ position, company, role, period, description, darkMode }) {
  const isLeft = position === "left";
  
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className={`md:w-1/2 ${isLeft ? 'md:text-right md:pr-8' : 'md:order-1 md:pl-8'}`}>
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg transition-all duration-300 hover:shadow-xl mb-6 md:mb-0`}>
          <h3 className="text-xl font-bold">{company}</h3>
          <p className={`font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>{role}</p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>{period}</p>
          <p>{description}</p>
        </div>
      </div>
      
      <div className="hidden md:flex md:w-12 relative justify-center">
        <div className={`absolute w-4 h-4 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} border-4 ${darkMode ? 'border-gray-700' : 'border-white'}`}></div>
      </div>
      
      <div className={`md:w-1/2 ${isLeft ? 'md:order-1' : ''}`}></div>
    </div>
  );
}

function ProjectCard({ title, tech, features, darkMode }) {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
      <div className="relative overflow-hidden">
        <img src="/api/placeholder/400/250" alt={title} className="w-full transition-transform duration-300 group-hover:scale-110" />
        <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'bg-black/70' : 'bg-white/70'}`}>
          <button className={`px-4 py-2 rounded-md ${darkMode ? 'bg-blue-600' : 'bg-blue-600'} text-white flex items-center`}>
            View Details <ExternalLink size={16} className="ml-2" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>{tech}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mr-3`}></div>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CertificationCard({ title, issuer, darkMode }) {
  return (
    <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg transition-all duration-300 hover:-translate-y-2`}>
      <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-blue-100'} flex items-center justify-center mb-4`}>
        <Star size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
      </div>
      
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Issued by {issuer}</p>
    </div>
  );
}