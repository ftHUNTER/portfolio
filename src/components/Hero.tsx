import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20" style={{ backgroundColor: '#EDF4F2' }}>
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4" style={{ borderColor: '#7C8363' }}>
            <Image
              src="/me.jpeg"
              alt="Reda Chmouk"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: '#31473A' }}>
            Hi, I'm <span style={{ color: '#7C8363' }}>Reda Chmouk</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: '#7C8363' }}>
            Software Engineer
          </h2>
          <p className="text-xl md:text-2xl mb-12" style={{ color: '#31473A' }}>
            I craft elegant solutions to complex problems, specializing in
            system architecture and efficient software development.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full transition-colors"
              style={{ 
                backgroundColor: '#31473A',
                color: '#EDF4F2'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#7C8363'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#31473A'}
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full transition-colors"
              style={{ 
                backgroundColor: '#EDF4F2',
                color: '#31473A',
                border: '2px solid #31473A'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#31473A';
                e.currentTarget.style.color = '#EDF4F2';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#EDF4F2';
                e.currentTarget.style.color = '#31473A';
              }}
            >
              View Work
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/ftHUNTER"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors"
              style={{ color: '#31473A' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#7C8363'}
              onMouseOut={(e) => e.currentTarget.style.color = '#31473A'}
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/reda-chmouk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors"
              style={{ color: '#31473A' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#7C8363'}
              onMouseOut={(e) => e.currentTarget.style.color = '#31473A'}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/redachmouk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors"
              style={{ color: '#31473A' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#7C8363'}
              onMouseOut={(e) => e.currentTarget.style.color = '#31473A'}
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 