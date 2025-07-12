import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-neutral-900 dark:to-primary-950">
      {/* Header */}
      <header className="w-full bg-white/90 backdrop-blur-sm border-b border-neutral-200 dark:bg-neutral-800/90 dark:border-neutral-700 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">RC</span>
              </div>
              <h1 className="text-3xl font-display font-bold text-neutral-900 dark:text-white">Roderick's Portfolio</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/aboutMe" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors font-medium">
                About
              </Link>
              <Link href="/codingProject" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors font-medium">
                Projects
              </Link>
              <Link href="/art" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors font-medium">
                Art
              </Link>
              <Link href="/login" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors font-medium">
                Login
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-neutral-900 dark:text-white mb-6 leading-extra-tight">
              Welcome to My
              <span className="block text-gradient bg-gradient-to-r from-primary-600 to-secondary-600 animate-gradient-x">
                Digital Portfolio
              </span>
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Exploring the intersection of technology, creativity, and innovation. 
              Discover my coding projects, artistic endeavors, and professional journey.
            </p>
          </div>
          
          {/* Binary code decoration */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <code className="text-sm text-neutral-500 dark:text-neutral-400 font-mono tracking-wide">
              <span className="group-hover:hidden">
                01010111 01100101 01101100 01100011 01101111 01101101 01100101 00100000 01110100 01101111 00100000 01110100 01101000 01100101 00100000 01101110 01100101 01110111 00100000 01100001 01100111 01100101
              </span>
              <span className="hidden group-hover:inline text-gradient bg-gradient-to-r from-primary-600 to-secondary-600 font-semibold">
                Welcome to the new age
              </span>
            </code>
          </div>
        </div>
      </section>

      {/* Main Navigation Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Art Page Link */}
            <Link
              href="/art"
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-800 p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-neutral-200 dark:border-neutral-700 animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 shadow-glow-purple group-hover:shadow-glow transition-shadow duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
                  Art Gallery
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-2 duration-300">
                    →
                  </span>
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Explore my creative works including paintings, digital designs, photography, and artistic expressions.
                </p>
              </div>
            </Link>

            {/* Coding Projects Link */}
            <Link
              href="/codingProject"
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-800 p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-neutral-200 dark:border-neutral-700 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:shadow-glow-green transition-shadow duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Coding Projects
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-2 duration-300">
                    →
                  </span>
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Discover my software development projects, web applications, and technical solutions.
                </p>
              </div>
            </Link>

            {/* Login Page Link */}
            <Link
              href="/login"
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-800 p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-neutral-200 dark:border-neutral-700 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center mb-6 shadow-glow-green group-hover:shadow-glow transition-shadow duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  Login
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-2 duration-300">
                    →
                  </span>
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Access your account to view personalized content and manage your portfolio settings.
                </p>
              </div>
            </Link>

            {/* About Me Link */}
            <Link
              href="/aboutMe"
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-800 p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-neutral-200 dark:border-neutral-700 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-warning-500/10 to-error-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-warning-500 to-error-500 rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:shadow-glow-purple transition-shadow duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-warning-600 dark:group-hover:text-warning-400 transition-colors">
                  About Me
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-2 duration-300">
                    →
                  </span>
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Learn about my background, skills, interests, and professional journey.
                </p>
              </div>
            </Link>

            {/* News/AI Link */}
            <Link
              href="/newsAi"
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-800 p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-neutral-200 dark:border-neutral-700 animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl flex items-center justify-center mb-6 shadow-glow-purple group-hover:shadow-glow transition-shadow duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
                  News & AI
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-2 duration-300">
                    →
                  </span>
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Stay updated with the latest news and explore AI-powered intelligent content.
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t border-neutral-200 dark:bg-neutral-800/90 dark:border-neutral-700 mt-20 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-neutral-600 dark:text-neutral-300 font-medium">
              © 2024 Roderick's Portfolio. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
