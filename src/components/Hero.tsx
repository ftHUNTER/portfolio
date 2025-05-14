'use client';

import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTheme } from '@/context/ThemeContext'
import { useEffect, useState } from 'react'

export default function Hero() {
  const { isDarkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const textColor = isDarkMode ? '#EDF4F2' : '#31473A';
  const accentColor = '#7C8363';

  if (!mounted) {
    return null;
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4" style={{ borderColor: accentColor }}>
            <Image
              src="/me.jpeg"
              alt="Reda Chmouk"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: textColor }}>
            Hi, I'm <span style={{ color: accentColor }}>Reda Chmouk</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: accentColor }}>
            Software Engineer
          </h2>
          <p className="text-xl md:text-2xl mb-12" style={{ color: textColor }}>
            I craft elegant solutions to complex problems, specializing in
            system architecture and efficient software development.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full transition-colors"
              style={{ 
                backgroundColor: isDarkMode ? '#EDF4F2' : '#31473A',
                color: isDarkMode ? '#31473A' : '#EDF4F2'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = accentColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = isDarkMode ? '#EDF4F2' : '#31473A'}
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full transition-colors"
              style={{ 
                backgroundColor: 'transparent',
                color: textColor,
                border: `2px solid ${textColor}`
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = isDarkMode ? '#EDF4F2' : '#31473A';
                e.currentTarget.style.color = isDarkMode ? '#31473A' : '#EDF4F2';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = textColor;
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
              style={{ color: textColor }}
              onMouseOver={(e) => e.currentTarget.style.color = accentColor}
              onMouseOut={(e) => e.currentTarget.style.color = textColor}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/reda-chmouk-9b383a2a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors"
              style={{ color: textColor }}
              onMouseOver={(e) => e.currentTarget.style.color = accentColor}
              onMouseOut={(e) => e.currentTarget.style.color = textColor}
            >
              <FaLinkedin />
            </a>

          </div>
        </div>
      </div>
    </section>
  )
} 