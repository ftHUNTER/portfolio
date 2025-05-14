'use client';
import Image from 'next/image';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#31473A' }}>
                Hi, I'm <span className="inline-block">Reda Chmouk</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium" style={{ color: '#7C8363' }}>
                Software Engineer
              </h2>
              <p className="text-lg md:text-xl" style={{ color: '#31473A' }}>
                I craft elegant solutions to complex problems, specializing in system architecture and efficient software development.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#contact"
                  style={{ backgroundColor: '#31473A', color: '#EDF4F2' }}
                  className="px-8 py-3 rounded-full font-medium hover:bg-[#7C8363] transition-colors"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  style={{ backgroundColor: '#EDF4F2', color: '#31473A', border: '2px solid #31473A' }}
                  className="px-8 py-3 rounded-full font-medium hover:bg-[#7C8363] hover:border-[#7C8363] hover:text-[#EDF4F2] transition-colors"
                >
                  View Work
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-6">
                <a 
                  href="https://github.com/ftHUNTER" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#31473A' }}
                  className="hover:text-[#7C8363] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/reda-chmouk-9b383a2a1/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#31473A' }}
                  className="hover:text-[#7C8363] transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Image/Illustration */}
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] mx-auto rounded-full overflow-hidden border-4 border-[#31473A] shadow-xl">
              <Image
                src="/me.jpeg"
                alt="Reda Chmouk"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="rounded-full hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 bg-[#EDF4F2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#31473A' }}>
            Featured Projects
          </h2>
          <p className="text-lg mb-12" style={{ color: '#7C8363' }}>
            Here are some of my recent works that showcase my skills and experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
                style={{ borderColor: '#31473A' }}
              >
                <div className="relative h-48 w-full bg-[#31473A]/10">
                  {index === 0 ? (
                    <Image
                      src="/webserv.jpg"
                      alt="Webserv Project"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="hover:scale-105 transition-transform duration-500"
                    />
                  ) : index === 1 ? (
                    <Image
                      src="/ponggame.webp"
                      alt="Pong Game Project"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="hover:scale-105 transition-transform duration-500"
                    />
                  ) : index === 2 ? (
                    <Image
                      src="/inception.jpg"
                      alt="Inception Project"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="hover:scale-105 transition-transform duration-500"
                    />
                  ) : index === 3 ? (
                    <Image
                      src="/game3d.jpeg"
                      alt="Cub3D Game Project"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      className="hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  ) : index === 4 ? (
                    <Image
                      src="/minishell.jpeg"
                      alt="Minishell Project"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      className="hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  ) : (
                    <div className="relative h-48 w-full bg-[#31473A]/10">
                      <Image
                        src="/here.png"
                        alt="Portfolio Website"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        className="hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#31473A' }}>
                    {index === 0 ? 'WebServ - HTTP Server' : 
                     index === 1 ? 'Real-Time Multiplayer Pong' :
                     index === 2 ? 'Inception - Docker Infrastructure' :
                     index === 3 ? 'Cub3D - 3D Raycasting Game' :
                     index === 4 ? 'Minishell - Unix Shell Implementation' :
                     'Modern Portfolio Website'}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#7C8363' }}>
                    {index === 0 ? 
                      'A custom HTTP server built from scratch in C++. Implements core HTTP/1.1 protocol features, handling multiple client connections, request parsing, and serving static content. Demonstrates deep understanding of network programming and server architecture.' 
                    : index === 1 ?
                      'A real-time multiplayer gaming platform featuring a modern Pong game with remote gameplay capabilities. Includes user authentication with OAuth 2.0 and JWT, integrated live chat system, and comprehensive user profiles. Built with Django and JavaScript, using WebSocket for real-time communication and PostgreSQL for data persistence.'
                    : index === 2 ?
                      'A containerized web infrastructure project using Docker Compose to orchestrate multiple services. Features WordPress CMS with MongoDB for data storage, and Nginx as a reverse proxy. Implements secure configurations, custom Docker images, and automated deployment with volume management and network isolation.'
                    : index === 3 ?
                      'A 3D maze game engine built from scratch in C using raycasting techniques inspired by Wolfenstein 3D. Features textured walls, dynamic rendering, player movement physics, and collision detection. Implements efficient ray-casting algorithms for rendering, custom map parsing, and smooth player controls.'
                    : index === 4 ?
                      'A Unix shell implementation in C that replicates core bash functionality. Features command execution, pipeline handling, environment variable management, and signal handling. Implements lexical analysis, parsing, and execution of shell commands with built-in functions.'
                    : 'A responsive and modern portfolio website built with Next.js and Tailwind CSS. Features a clean design, smooth animations, project showcases, and mobile-first approach. Implements modern web development practices including component reusability, responsive design, and optimized performance.'}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {index === 0 ? 
                      ['C++', 'HTTP Protocol', 'Socket Programming', 'Network Programming'].map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{ 
                            backgroundColor: '#EDF4F2',
                            color: '#31473A',
                            border: '1px solid #31473A'
                          }}
                        >
                          {tech}
                        </span>
                      ))
                    : index === 1 ?
                      ['Django', 'JavaScript', 'WebSocket', 'PostgreSQL', 'OAuth 2.0', 'JWT'].map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{ 
                            backgroundColor: '#EDF4F2',
                            color: '#31473A',
                            border: '1px solid #31473A'
                          }}
                        >
                          {tech}
                        </span>
                      ))
                    : index === 2 ?
                      ['Docker', 'WordPress', 'MongoDB', 'Nginx', 'Docker Compose'].map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{ 
                            backgroundColor: '#EDF4F2',
                            color: '#31473A',
                            border: '1px solid #31473A'
                          }}
                        >
                          {tech}
                        </span>
                      ))
                    : index === 3 ?
                      ['C', 'Raycasting', 'Computer Graphics', 'Game Physics', 'MinilibX'].map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{ 
                            backgroundColor: '#EDF4F2',
                            color: '#31473A',
                            border: '1px solid #31473A'
                          }}
                        >
                          {tech}
                        </span>
                      ))
                    : index === 4 ?
                      ['C', 'Unix', 'Shell Scripting', 'Process Management', 'System Calls'].map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{ 
                            backgroundColor: '#EDF4F2',
                            color: '#31473A',
                            border: '1px solid #31473A'
                          }}
                        >
                          {tech}
                        </span>
                      ))
                    : ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Responsive Design'].map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{ 
                            backgroundColor: '#EDF4F2',
                            color: '#31473A',
                            border: '1px solid #31473A'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {index === 0 ? (
                      <>
                        <a
                          href="https://github.com/ynafiss/webServ.git"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 rounded-full text-sm font-medium transition-colors"
                          style={{ 
                            backgroundColor: '#31473A',
                            color: '#EDF4F2'
                          }}
                        >
                          View Code
                        </a>
                      </>
                    ) : index === 1 ? (
                      <>
                        <a
                          href="https://github.com/Mvrouvne/TableRally.git"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 rounded-full text-sm font-medium transition-colors"
                          style={{ 
                            backgroundColor: '#31473A',
                            color: '#EDF4F2'
                          }}
                        >
                          View Code
                        </a>
                      </>
                    ) : index === 2 ? (
                      <>
                        <a
                          href="https://github.com/ftHUNTER/inception.git"
          target="_blank"
          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 rounded-full text-sm font-medium transition-colors"
                          style={{ 
                            backgroundColor: '#31473A',
                            color: '#EDF4F2'
                          }}
                        >
                          View Code
                        </a>
                      </>
                    ) : index === 3 ? (
                      <>
                        <a
                          href="https://github.com/ynafiss/cub3d.git"
          target="_blank"
          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 rounded-full text-sm font-medium transition-colors"
                          style={{ 
                            backgroundColor: '#31473A',
                            color: '#EDF4F2'
                          }}
                        >
                          View Code
                        </a>
                      </>
                    ) : index === 4 ? (
                      <>
                        <a
                          href="https://github.com/ftHUNTER/minishell_v3.git"
          target="_blank"
          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 rounded-full text-sm font-medium transition-colors"
                          style={{ 
                            backgroundColor: '#31473A',
                            color: '#EDF4F2'
                          }}
                        >
                          View Code
                        </a>
                      </>
                    ) : (
                      <div className="flex gap-4 w-full">
                        <a
                          onClick={() => alert('What are you doing? 🤔')}
                          className="flex-1 text-center px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                          style={{ 
                            backgroundColor: '#31473A',
                            color: '#EDF4F2'
                          }}
                        >
                          View Code
        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#31473A' }}>
            Get in Touch
          </h2>
          <p className="text-lg mb-12" style={{ color: '#7C8363' }}>
            Feel free to reach out for collaborations or just a friendly hello
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EDF4F2' }}>
                  <svg className="w-6 h-6" style={{ color: '#31473A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium" style={{ color: '#31473A' }}>Phone</h3>
                  <a href="tel:+212651155986" className="text-base hover:text-[#7C8363] transition-colors" style={{ color: '#7C8363' }}>
                    +212 651 155 986
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EDF4F2' }}>
                  <svg className="w-6 h-6" style={{ color: '#31473A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium" style={{ color: '#31473A' }}>Email</h3>
                  <a href="mailto:reda.chmouk@gmail.com" className="text-base hover:text-[#7C8363] transition-colors" style={{ color: '#7C8363' }}>
                    reda.chmouk@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EDF4F2' }}>
                  <svg className="w-6 h-6" style={{ color: '#31473A' }} fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium" style={{ color: '#31473A' }}>GitHub</h3>
                  <a 
                    href="https://github.com/ftHUNTER" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base hover:text-[#7C8363] transition-colors"
                    style={{ color: '#7C8363' }}
                  >
                    github.com/ftHUNTER
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg" style={{ borderColor: '#31473A' }}>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                
                // Create mailto link with form data
                const mailtoLink = `mailto:reda.chmouk@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                
                // Open email client
                window.location.href = mailtoLink;
              }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium" style={{ color: '#31473A' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-2 px-3 py-2 focus:outline-none focus:ring-2"
                    style={{ borderColor: '#7C8363', backgroundColor: '#EDF4F2' }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium" style={{ color: '#31473A' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-2 px-3 py-2 focus:outline-none focus:ring-2"
                    style={{ borderColor: '#7C8363', backgroundColor: '#EDF4F2' }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium" style={{ color: '#31473A' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-2 px-3 py-2 focus:outline-none focus:ring-2"
                    style={{ borderColor: '#7C8363', backgroundColor: '#EDF4F2' }}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full font-medium transition-colors"
                  style={{ backgroundColor: '#31473A', color: '#EDF4F2' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
