import React, { useState } from 'react';
import { Code, Database, Server, Layers, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const skills = {
    frontend: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'React Router'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Middleware'],
    database: ['MongoDB', 'Mongoose', 'Database Design', 'Aggregation'],
    tools: ['Git', 'npm/yarn', 'Postman', 'VS Code', 'Webpack']
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      features: ['User Authentication', 'Payment Gateway', 'Admin Dashboard', 'Real-time Updates']
    },
    {
      title: 'Social Media Dashboard',
      description: 'Real-time social media analytics dashboard with user profiles, post management, and engagement tracking.',
      tech: ['React', 'Express', 'MongoDB', 'Socket.io'],
      features: ['Real-time Chat', 'Image Upload', 'User Profiles', 'Activity Feed']
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management tool with team features, deadline tracking, and progress monitoring.',
      tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
      features: ['Drag & Drop', 'Team Collaboration', 'Email Notifications', 'Analytics']
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {'<Dev />'}
          </div>
          <div className="flex gap-6">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize hover:text-purple-400 transition-colors ${
                  activeSection === section ? 'text-purple-400' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              MERN Stack Developer
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Building Full-Stack Web Applications with MongoDB, Express, React & Node.js
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                View Projects
              </button>
              <button className="border-2 border-purple-500 hover:bg-purple-500/20 px-8 py-3 rounded-full font-semibold transition-all">
                Contact Me
              </button>
            </div>
            <div className="flex gap-6 justify-center">
              <Github className="w-6 h-6 hover:text-purple-400 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 hover:text-purple-400 cursor-pointer transition-colors" />
              <Mail className="w-6 h-6 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-4">
                I'm a passionate MERN stack developer with expertise in building modern, scalable web applications. 
                I specialize in creating seamless user experiences with React on the frontend and robust APIs with Node.js and Express on the backend.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                With a strong foundation in MongoDB database design and management, I deliver end-to-end solutions 
                that are efficient, maintainable, and user-friendly.
              </p>
              <p className="text-lg text-gray-300">
                I'm constantly learning new technologies and best practices to stay at the forefront of web development.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
                <Code className="w-12 h-12 mx-auto mb-2" />
                <div className="text-2xl font-bold">React.js</div>
                <div className="text-sm">Frontend</div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-teal-600 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
                <Server className="w-12 h-12 mx-auto mb-2" />
                <div className="text-2xl font-bold">Node.js</div>
                <div className="text-sm">Backend</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
                <Layers className="w-12 h-12 mx-auto mb-2" />
                <div className="text-2xl font-bold">Express</div>
                <div className="text-sm">Framework</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-600 to-green-600 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
                <Database className="w-12 h-12 mx-auto mb-2" />
                <div className="text-2xl font-bold">MongoDB</div>
                <div className="text-sm">Database</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Frontend</h3>
              <ul className="space-y-2">
                {skills.frontend.map((skill) => (
                  <li key={skill} className="text-gray-300">• {skill}</li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-green-400">Backend</h3>
              <ul className="space-y-2">
                {skills.backend.map((skill) => (
                  <li key={skill} className="text-gray-300">• {skill}</li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Database</h3>
              <ul className="space-y-2">
                {skills.database.map((skill) => (
                  <li key={skill} className="text-gray-300">• {skill}</li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4 text-pink-400">Tools</h3>
              <ul className="space-y-2">
                {skills.tools.map((skill) => (
                  <li key={skill} className="text-gray-300">• {skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-purple-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2 mb-4">
                    {project.features.map((feature) => (
                      <div key={feature} className="text-sm text-gray-400">✓ {feature}</div>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-2" />
                <div className="font-semibold">Email</div>
                <div className="text-gray-400">dev@example.com</div>
              </div>
              <div className="flex flex-col items-center">
                <Github className="w-8 h-8 text-purple-400 mb-2" />
                <div className="font-semibold">GitHub</div>
                <div className="text-gray-400">github.com/devname</div>
              </div>
              <div className="flex flex-col items-center">
                <Linkedin className="w-8 h-8 text-purple-400 mb-2" />
                <div className="font-semibold">LinkedIn</div>
                <div className="text-gray-400">linkedin.com/in/devname</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 MERN Stack Developer. Built with React.js</p>
        </div>
      </footer>
    </div>
  );
}
