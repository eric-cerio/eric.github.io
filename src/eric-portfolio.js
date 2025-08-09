import React, { useState } from 'react';
import { Mail, Phone, Linkedin, ExternalLink, Code, Smartphone, Calendar, Github, FileText } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavClick = (section) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const workExperience = [
    {
      title: "Senior Android Application Developer",
      company: "Appetiser Pty Ltd",
      period: "May 2018 - Present",
      url: "https://appetiser.com.au/",
      responsibilities: [
        "Implemented Agile or Kanban methodology",
        "Android Team Lead on Projects",
        "Created and maintain template project for quick android app generation",
        "Develop and maintain mobile applications",
        "Tech: Kotlin, RxJava2, Dagger2 Injection, Data Binding, MVVM/MVP with Repository pattern"
      ]
    },
    {
      title: "Android App Developer (Freelance)",
      company: "AppTradies",
      period: "Aug 2022 - Dec 2022",
      url: "https://apptradies.com/",
      responsibilities: [
        "Implemented Agile or Kanban methodology",
        "Develop mobile applications for clients",
        "Tech: Kotlin, Coroutines, Hilt, Data Binding, Navigation Component, Clean architecture"
      ]
    },
    {
      title: "Co-Founder/Android Developer",
      company: "Hinulawan Lab",
      period: "Oct 2020 - Nov 2022",
      url: "https://hinulawanlab.com/ourteam",
      responsibilities: [
        "Implemented Agile methodology",
        "Develop and maintain company owned products",
        "Tech: Kotlin, RxJava2, Dagger2 Injection, Data Binding, MVVM/MVP with Repository pattern"
      ]
    },
    {
      title: "Android Application Developer",
      company: "Brainhub Inc.",
      period: "August 2015 - April 2018",
      url: "http://www.thebrainhub.net/",
      responsibilities: [
        "Implemented Agile methodology",
        "Develop and maintain company owned products",
        "Coordinated with C++ backend team to apply native shared library (JNI)",
        "Tech: Java, C++, MVC Architecture"
      ]
    },
    {
      title: "Android Application Developer (Freelance)",
      company: "SkyRockIT",
      period: "Oct 2017 - February 2018",
      url: "https://www.linkedin.com/company/metaversesds/",
      responsibilities: [
        "Design, develop and maintain mobile applications",
        "Tech: Java, MVP architecture, Dagger2, RxJava"
      ]
    },
    {
      title: "Android Application Developer",
      company: "SJCLC IT Services",
      period: "May 2015 - Aug 2016",
      url: "#",
      responsibilities: [
        "Design, develop and maintain mobile applications",
        "Test and Debug applications",
        "Android application development",
        "Tech: Java"
      ]
    },
    {
      title: "Android Application Developer",
      company: "TSY Total Tech Solutions",
      period: "May 2013 - Apr 2015",
      url: "#",
      responsibilities: [
        "Design, develop and maintain web and mobile applications",
        "Implemented web application using Code igniter framework",
        "Full-stack development experience"
      ]
    }
  ];

  const projects = [
    {
      name: "Safe Student",
      description: "Global SOS app connecting users to local emergency services with a single touch, featuring GPS location sharing and emergency contacts notification",
      url: "https://appetiser.com.au/portfolio/safe-student/",
      company: "Appetiser",
      features: ["Emergency Button", "GPS Location Sharing", "Contact Notification", "International Support"]
    },
    {
      name: "Roamni",
      description: "Audio storytelling platform for discovering, listening and sharing local stories from around the world with guided tours and monetization features",
      url: "https://appetiser.com.au/portfolio/roamni/",
      company: "Appetiser",
      features: ["Audio Stories", "Interactive Maps", "Local Guides", "Story Monetization"]
    },
    {
      name: "HiLo",
      description: "Authentic social media platform designed for safe sharing without judgment, creating genuine connections in a supportive environment",
      url: "https://appetiser.com.au/portfolio/hilo/",
      company: "Appetiser",
      features: ["Safe Social Space", "Authentic Sharing", "Community Building", "Privacy-Focused"]
    },
    {
      name: "BarbCare",
      description: "Professional barber and salon management application",
      url: "https://appetiser.com.au/portfolio/barbcare/",
      company: "Appetiser",
      features: ["Appointment Management", "Client Records", "Business Analytics"]
    },
    {
      name: "Hear Mail",
      description: "Innovative communication application",
      url: "https://appetiser.com.au/portfolio/hear-mail-2/",
      company: "Appetiser",
      features: ["Voice Messages", "Audio Communication", "User-Friendly Interface"]
    },
    {
      name: "tindaPH",
      description: "E-commerce marketplace application for Filipino consumers",
      url: "https://appadvice.com/app/tinda-ph/1519557727",
      company: "Hinulawan Lab",
      features: ["E-commerce Platform", "Local Marketplace", "Secure Payments"]
    },
    {
      name: "tindaPH Partner",
      description: "Partner application for sellers on the tindaPH marketplace",
      url: "https://appadvice.com/app/tinda-seller/1519557544",
      company: "Hinulawan Lab",
      features: ["Seller Dashboard", "Inventory Management", "Sales Analytics"]
    },
    {
      name: "Air Navigation Pro",
      description: "Professional aviation navigation app with advanced flight planning and navigation features",
      url: "https://play.google.com/store/apps/details?id=com.xample.airnavigation",
      company: "Brainhub",
      features: ["Flight Planning", "Real-time Navigation", "Aviation Charts"]
    }
  ];

  const skills = {
    "Android Development": [
      "Android SDK", "Kotlin", "Java", "Jetpack Compose", "Coroutines", 
      "RxJava2", "Hilt", "Data Binding", "MVVM", "MVI", "Clean Architecture"
    ],
    "Tools & Libraries": [
      "Git", "Firebase", "Retrofit", "Room Database", "Dagger2/Hilt", 
      "Glide", "PubNub", "Bitrise CI/CD", "Fastlane"
    ],
    "Other Technologies": [
      "React Native", "Expo", "Tailwind CSS", "Kotlin Multi Module", "C++", "JNI", "HTML", "CSS", "Reac", "WordPress", 
      "Ubuntu", "MacOS", "Shell Scripting"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => handleNavClick('about')} className="text-2xl font-bold text-white hover:text-purple-300">
              Eric Cerio
            </button>
            <div className="hidden md:flex space-x-8">
              {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === section 
                      ? 'text-purple-400 border-b-2 border-purple-400' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Code className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Eric Cerio
            </h1>
            <p className="text-xl md:text-2xl text-purple-300 mb-6">
              Innovative Android Developer
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              9 Years of Experience in Creating Advanced Mobile Solutions with expertise in 
              Kotlin, Android SDK, and modern architecture patterns
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="mailto:eric.cerio@gmail.com" 
              className="flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 px-6 py-3 rounded-full text-white transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              eric.cerio@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/eric-cerio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 px-6 py-3 rounded-full text-white transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
            <a 
              href="https://github.com/eric-cerio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-600/20 hover:bg-gray-600/30 border border-gray-500/30 px-6 py-3 rounded-full text-white transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="https://medium.com/@eric.cerio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 px-6 py-3 rounded-full text-white transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-5 h-5" />
              Medium Articles
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex items-center gap-2 text-purple-300">
                      <a 
                        href={job.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-purple-200 transition-colors"
                      >
                        {job.company}
                      </a>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    {job.period}
                  </div>
                </div>
                <ul className="space-y-2 text-white/80">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">{project.name}</h3>
                </div>
                <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                
                {project.features && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIdx) => (
                        <span 
                          key={featureIdx}
                          className="px-2 py-1 bg-purple-600/10 text-purple-300 rounded text-xs border border-purple-500/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-300 font-medium">{project.company}</span>
                  {project.url !== "#" && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group-hover:text-purple-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.url.includes('play.google.com') ? 'Play Store' : 'View Project'}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-purple-600/20 text-white/80 rounded-full text-sm border border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Ready to collaborate on your next Android project? Let's discuss how my 9 years of 
            experience can help bring your mobile app vision to life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a href="mailto:eric.cerio@gmail.com" className="text-white/70 hover:text-purple-300 transition-colors">
                eric.cerio@gmail.com
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-white/70">09771008837</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/eric-cerio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-purple-300 transition-colors"
              >
                /in/eric-cerio
              </a>
            </div>
          </div>
          
          <p className="text-white/60">
            Based in Cebu City, Philippines • Available for remote work
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 Eric Cerio. All rights reserved. • Innovative Android Developer
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;