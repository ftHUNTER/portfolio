import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative w-40 h-40 mx-auto rounded-full overflow-hidden">
            <Image
              src="/placeholder-avatar.png"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12">
            A passionate developer crafting beautiful digital experiences
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 