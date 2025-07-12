import Image from "next/image";
import Link from "next/link";

const codingProjects = [
  {
    title: "AI-Powered Art Generator",
    description:
      "A web app that uses a custom-trained neural network to generate unique pieces of art from user prompts. Features real-time image synthesis, prompt engineering, and GPU-accelerated backend.",
    highlights: [
      "Custom TensorFlow.js model for browser-side inference",
      "Dynamic prompt-to-image pipeline with error handling",
      "Optimized for both desktop and mobile devices",
    ],
    codeSnippet: `const response = await fetch('/api/generate', {
  method: 'POST',
  body: JSON.stringify({ prompt }),
  headers: { 'Content-Type': 'application/json' }
});
const { image } = await response.json();
setImageSrc(image);`,
    image: "/ai-art-demo.png",
    github: "https://github.com/yourusername/ai-art-generator",
  },
  {
    title: "Real-Time Chat App",
    description:
      "A full-stack chat application with end-to-end encryption, built using Next.js, WebSockets, and AWS DynamoDB. Supports group chats, emoji reactions, and file sharing.",
    highlights: [
      "WebSocket server for instant message delivery",
      "AES-256 encryption for secure communication",
      "Scalable NoSQL backend with DynamoDB",
    ],
    codeSnippet: `socket.on('message', (msg) => {
  const decrypted = decrypt(msg.data, userKey);
  setMessages((prev) => [...prev, decrypted]);
});`,
    image: "/chat-app-demo.png",
    github: "https://github.com/yourusername/realtime-chat-app",
  },
  {
    title: "Portfolio Website (This Site!)",
    description:
      "A modern, responsive portfolio built with Next.js, Tailwind CSS, and AWS. Features dynamic routing, dark mode, and a custom design system.",
    highlights: [
      "Server-side rendering for SEO and performance",
      "Reusable UI components with Tailwind CSS",
      "Deployed on Vercel with CI/CD integration",
    ],
    codeSnippet: `<main className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-neutral-900 dark:to-primary-950">
  {/* ... */}
</main>`,
    image: "/portfolio-demo.png",
    github: "https://github.com/yourusername/portfolio",
  },
];

export default function CodingProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50 dark:from-neutral-900 dark:to-primary-950">
      {/* Navigation Bar */}
      <header className="w-full bg-white/90 backdrop-blur-sm border-b border-neutral-200 dark:bg-neutral-800/90 dark:border-neutral-700 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">RC</span>
              </div>
              <h1 className="text-3xl font-display font-bold text-neutral-900 dark:text-white">Coding Projects</h1>
            </div>
            <nav className="flex space-x-8">
              <Link href="/" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors font-medium">
                Home
              </Link>
              <Link href="/art" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors font-medium">
                Art
              </Link>
              <Link href="/login" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors font-medium">
                Login
              </Link>
              <Link href="/aboutMe" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors font-medium">
                About Me
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 dark:text-white mb-4">
            Explore My Cool Coding Projects
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
            Dive into a showcase of complex code, creative solutions, and technical challenges. Each project highlights unique features and advanced programming concepts.
          </p>
          <code className="text-sm text-neutral-500 dark:text-neutral-400 font-mono tracking-wide">
            01000011 01101111 01100100 01100101 00100000 01001001 01110011 00100000 01000001 01110010 01110100
          </code>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {codingProjects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-200 dark:border-neutral-700 flex flex-col"
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative h-48 w-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={320}
                    height={192}
                    className="object-contain h-32 w-auto rounded-lg shadow-md"
                  />
                </div>
              )}

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 mb-3">{project.description}</p>
                <ul className="mb-4 list-disc list-inside text-neutral-600 dark:text-neutral-400 text-sm">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="bg-black dark:bg-white rounded-lg p-3 mb-4 font-mono text-xs text-left overflow-x-auto">
                  <pre>
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
                <div className="mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
