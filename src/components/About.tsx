import Image from 'next/image';

const About = () => {
  const skills = {
    languages: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
    systems: ['System Design', 'Socket Programming', 'Multi-threading', 'Memory Management'],
    backend: ['Django', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'WebSockets'],
    databases: ['PostgreSQL', 'MariaDB', 'MySQL', 'SQLite', 'MongoDB', 'Mongoose'],
    tools: ['Git', 'GitHub', 'Docker', 'NGINX', 'Linux CLI', 'VS Code', 'Postman'],
    other: ['SSL/TLS', 'Agile Methodology', 'Debugging', 'System Architecture']
  };

  const education = [
    {
      degree: 'Software Engineering',
      school: '1337 Coding School • Benguerir',
      period: '2022 - Present',
      description: 'Full-time immersive program focused on real-world problem-solving and system design.',
    },
    {
      degree: 'Baccalaureate in Physical Science',
      school: 'Abdelkrim El Khattabi High School',
      period: '2019 - 2020',
      description: 'Foundation in analytical thinking and problem-solving.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#31473A' }}>
          About Me
        </h2>
        <p className="text-lg mb-12" style={{ color: '#7C8363' }}>
          Software Engineer specializing in system development and backend architecture. Currently at 1337 Coding School, focusing on building efficient, scalable systems and solving complex engineering challenges. Experienced in developing robust server applications and implementing clean, maintainable solutions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#31473A' }}>
                Technical Skills
              </h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-lg font-medium mb-2 capitalize" style={{ color: '#7C8363' }}>
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{
                            backgroundColor: '#EDF4F2',
                            color: '#31473A',
                            border: '1px solid #31473A',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#31473A' }}>
                Soft Skills
              </h3>
              <ul className="list-disc list-inside space-y-2" style={{ color: '#7C8363' }}>
                <li>Analytical Thinking - Strong problem-solving and system design capabilities</li>
                <li>Technical Communication - Ability to explain complex concepts clearly</li>
                <li>Teamwork - Experienced in collaborative development environments</li>
                <li>Continuous Learning - Committed to mastering new technologies</li>
                <li>Detail-Oriented - Focus on code quality and system reliability</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Education & Experience */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#31473A' }}>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 pl-4" style={{ borderColor: '#7C8363' }}>
                    <h4 className="text-lg font-medium" style={{ color: '#31473A' }}>
                      {edu.degree}
                    </h4>
                    <p className="text-base" style={{ color: '#7C8363' }}>
                      {edu.school}
                    </p>
                    <p className="text-sm" style={{ color: '#7C8363' }}>
                      {edu.period}
                    </p>
                    <p className="text-sm mt-2" style={{ color: '#7C8363' }}>
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#31473A' }}>
                Professional Summary
              </h3>
              <div className="prose prose-sm max-w-none" style={{ color: '#7C8363' }}>
                <p>
                  Focused on developing robust system architectures and efficient backend solutions. My technical expertise includes:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Developing custom HTTP servers from scratch in C++</li>
                  <li>Implementing concurrent systems with multi-threading</li>
                  <li>Building scalable backend architectures</li>
                  <li>Creating secure authentication and authorization systems</li>
                  <li>Containerizing applications with Docker and orchestrating with Docker Compose</li>
                  <li>Configuring and optimizing NGINX servers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 