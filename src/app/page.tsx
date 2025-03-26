'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMedal, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple scroll spy for highlighting active nav link
      const sections = ['about', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B1120]/80 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-10 w-10"
          >
            <Image
              src="/images/aiml-logo.svg" // Using the AI/ML themed logo
              alt="AI/ML Logo"
              width={40}
              height={40}
              priority
            />
          </motion.div>
          <div className="flex gap-6 items-center">
            <a href="#about" className={`text-white/70 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all ${activeSection === 'about' ? 'text-white after:w-full' : 'after:w-0 hover:after:w-full'}`}>About</a>
            <a href="#projects" className={`text-white/70 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all ${activeSection === 'projects' ? 'text-white after:w-full' : 'after:w-0 hover:after:w-full'}`}>Projects</a>
            <a href="#contact" className={`text-white/70 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all ${activeSection === 'contact' ? 'text-white after:w-full' : 'after:w-0 hover:after:w-full'}`}>Contact</a>
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-[#000000] text-white pt-20">
        {/* Neural Network Background Pattern */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          {/* Glowing Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#041434] to-[#000000] opacity-50"></div>

          {/* Neural Network Grid */}
          <div className="absolute inset-0">
            {/* Create a grid of nodes */}
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i}>
                {/* Neural Node */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: Math.random() * 3 + 2 + 'px',
                    height: Math.random() * 3 + 2 + 'px',
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 200}%`, // Extend beyond viewport
                    backgroundColor: '#0ff',
                    boxShadow: '0 0 10px #0ff',
                    opacity: Math.random() * 0.4 + 0.1,
                    animation: `pulse ${Math.random() * 4 + 3}s infinite`
                  }}
                />
                
                {/* Connection Lines */}
                {Array.from({ length: 2 }).map((_, j) => {
                  const angle = Math.random() * 360;
                  const length = Math.random() * 100 + 50;
                  return (
                    <div
                      key={`${i}-${j}`}
                      className="absolute origin-center"
                      style={{
                        width: `${length}px`,
                        height: '1px',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 200}%`, // Extend beyond viewport
                        background: 'linear-gradient(90deg, transparent, #0ff, transparent)',
                        opacity: Math.random() * 0.15 + 0.05,
                        transform: `rotate(${angle}deg)`,
                        animation: `fadeInOut ${Math.random() * 4 + 4}s infinite`
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Additional Layer of Nodes for Density */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={`extra-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 2 + 1 + 'px',
                  height: Math.random() * 2 + 1 + 'px',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 200}%`, // Extend beyond viewport
                  backgroundColor: '#0ff',
                  opacity: Math.random() * 0.3 + 0.1,
                  animation: `pulse ${Math.random() * 3 + 2}s infinite`
                }}
              />
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          {/* Hero Section */}
          <div className="relative overflow-hidden">
            <div className="container mx-auto px-4 py-20 relative">
              <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Left Column - Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:w-1/2 mb-12 md:mb-0"
                >
                  <div className="mb-8">
                    <p className="text-xl mb-2">
                      <span className="inline-block animate-wave">👋</span> Hello, I'm <span className="font-bold">ANJALI GOUR</span>
                    </p>
                    
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                      <span className="text-white">AI/ML</span><br/>
                      <span className="text-red-600">Engineer</span>
                    </h1>
                    
                    <p className="text-xl text-gray-300 mb-8">
                    Empowering businesses to innovate and grow by harnessing the power of Artificial Intelligence and Machine Learning
                    </p>
                    
                    {/* Social Media Icons */}
                    <div className="flex gap-4 mb-12">
                      <a href="https://www.linkedin.com/in/anjaligour/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                        <FaLinkedin className="text-white" />
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                        <FaInstagram className="text-white" />
                      </a>
                      <a href="https://github.com/ANJALI-009" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                        <FaGithub className="text-white" />
                      </a>
                      <a href="mailto:anjaligour.work@gmail.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                        <FaEnvelope className="text-white" />
                      </a>
                    </div>
                    
                    {/* Stats Section */}
                    <div className="flex gap-16">
                      <div>
                        <h2 className="text-5xl font-bold text-white">10+</h2>
                        <p className="text-gray-400">projects completed</p>
                      </div>
                      <div>
                        <h2 className="text-5xl font-bold text-white">1+</h2>
                        <p className="text-gray-400">years experience</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Right Column - Image with Arrow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="md:w-1/2 relative flex justify-center items-center"
                >
                  {/* Profile Image in Circle */}
                  <div className="w-[280px] h-[280px] relative overflow-hidden rounded-full border-4 border-blue-500/30 shadow-lg shadow-blue-500/20">
                    <Image
                      src="/images/anjali-profile.jpg"
                      alt="Anjali Gour"
                      fill
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'center 30%'  // Adjusted to better frame the face
                      }}
                      className="rounded-full scale-[1.2]"  // Increased scale for better framing
                      priority
                    />
                    {/* Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 text-center pb-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <p className="text-white font-bold text-lg">Anjali Gour</p>
                      <p className="text-gray-300 text-sm">AI/ML Engineer</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Section Container Styles */}
          <style jsx global>{`
            .section-container {
              @apply container mx-auto px-4 py-16 my-8 relative;
            }
            .section-container::before {
              content: '';
              @apply absolute inset-0 bg-black/60 backdrop-blur-sm rounded-3xl border border-blue-500/10;
              z-index: -1;
            }
            .card-container {
              @apply bg-black/60 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300;
            }
            @keyframes pulse {
              0%, 100% { 
                opacity: 0.2;
                transform: scale(1);
              }
              50% { 
                opacity: 0.5;
                transform: scale(1.1);
              }
            }
            @keyframes fadeInOut {
              0%, 100% { opacity: 0.05; }
              50% { opacity: 0.15; }
            }
          `}</style>

          {/* Experience Section */}
          <div className="section-container">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Professional Experience
            </motion.h3>
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-container"
              >
                <div className="flex items-center gap-4 mb-4">
                  <FaBriefcase className="text-2xl text-purple-400" />
                  <div>
                    <h4 className="text-xl font-bold">AI / ML Intern</h4>
                    <p className="text-gray-400">
                      <span className="flex items-center gap-2">
                        Bizfy Solutions, Indore | Sep 2024 - Present
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-container"
              >
                <div className="flex items-center gap-4 mb-4">
                  <FaBriefcase className="text-2xl text-purple-400" />
                  <div>
                    <h4 className="text-xl font-bold">Data Science Trainee</h4>
                    <p className="text-gray-400">
                      <span className="flex items-center gap-2">
                        <Image 
                          src="/images/debugshala.svg"
                          alt="Debugshala Logo"
                          width={20}
                          height={20}
                        />
                        Debugshala, Indore | Feb 2024 - July 2024
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="container mx-auto px-4 py-20 my-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Skills & Expertise
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'Python',
                'SQL',
                'NumPy',
                'Pandas',
                'Matplotlib',
                'Scikit-learn',
                'Streamlit',
                'Data Manipulation',
                'Machine Learning',
                'Data Visualization',
                'Natural Language Processing (NLP)',
                'Power BI',
                'Advanced Excel',
                'GitHub',
                'Phind',
                'VS Code',
                'Cursor'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-xl text-center border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  <p className="text-gray-300">{skill}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div id="about" className="section-container">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <FaGraduationCap className="text-3xl text-purple-400" />
                  <div>
                    <h4 className="text-xl font-bold">Master of Business Administration</h4>
                    <p className="text-gray-400">Oriental University, Indore</p>
                    <p className="text-gray-400">Specialization: Data Analytics & AI</p>
                    <p className="text-gray-500">2023-2025</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] rounded-xl p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <FaGraduationCap className="text-3xl text-purple-400" />
                  <div>
                    <h4 className="text-xl font-bold">Bachelor of Science</h4>
                    <p className="text-gray-400">DAVV University</p>
                    <p className="text-gray-500">2021-2023</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Detailed Projects Section */}
          <div id="projects" className="container mx-auto px-4 py-20 my-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Featured Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] rounded-xl p-8"
              >
                <h4 className="text-xl font-bold mb-4">Financial Data Analysis and Visualization</h4>
                <p className="text-gray-300 mb-4">
                  Analyzed a personal finance dataset using Python, Excel, and Power BI to identify income and expense trends and provide actionable financial insights. Created visualizations to highlight spending patterns and deviations, enabling better financial planning.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Excel</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Power BI</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Data Analysis</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] rounded-xl p-8"
              >
                <h4 className="text-xl font-bold mb-4">Logistic Regression Model</h4>
                <p className="text-gray-300 mb-4">
                  Built a logistic regression model to classify iris species with high accuracy, using data normalization and train-test splitting. Evaluated performance with accuracy, precision, recall, F1 score, and analyzed key features through model coefficients.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Scikit-learn</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Classification</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Machine Learning</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] rounded-xl p-8"
              >
                <h4 className="text-xl font-bold mb-4">Mushroom Classification App using ML</h4>
                <p className="text-gray-300 mb-4">
                  Built a Streamlit app for mushroom classification using CatBoost and RandomForest models. Applied data preprocessing, feature selection, and model training for accurate predictions. Provided user-friendly input options and displayed prediction results with probabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Streamlit</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">CatBoost</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">RandomForest</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] rounded-xl p-8"
              >
                <h4 className="text-xl font-bold mb-4">NLP-Powered Chatbot for UI/UX Academy Support</h4>
                <p className="text-gray-300 mb-4">
                  Developed an NLP-driven chatbot for a UI/UX academy using Python, Streamlit, and spaCy, incorporating custom intent recognition and similarity-based matching to provide relevant, contextually accurate responses. Created an interactive UI with real-time conversation history, ensuring a seamless user experience for course, enrollment, and mentorship queries.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Streamlit</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">spaCy</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">NLP</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="container mx-auto px-4 py-20 my-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Achievements
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] rounded-xl p-6 text-center"
              >
                <FaMedal className="text-4xl text-purple-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">National Level Judo</h4>
                <p className="text-gray-400">Inter-University Tournament, Punjab (2023)</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] rounded-xl p-6 text-center"
              >
                <FaMedal className="text-4xl text-purple-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">State Level Karate</h4>
                <p className="text-gray-400">SGFI Tournament (2020)</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] rounded-xl p-6 text-center"
              >
                <FaMedal className="text-4xl text-purple-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">NCC Cadet</h4>
                <p className="text-gray-400">District Level Camp</p>
              </motion.div>
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact" className="container mx-auto px-4 py-20 my-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Get In Touch
            </motion.h3>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <motion.a
                href="tel:8817768949"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-xl text-gray-300 hover:text-white transition-colors"
              >
                <FaPhone className="text-purple-400" />
                <span>8817768949</span>
              </motion.a>
              <motion.a
                href="mailto:anjaligour.work@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-xl text-gray-300 hover:text-white transition-colors"
              >
                <FaEnvelope className="text-purple-400" />
                <span>anjaligour.work@gmail.com</span>
              </motion.a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 