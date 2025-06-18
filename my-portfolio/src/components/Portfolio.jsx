import React from 'react';
import { Github, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-14 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Chandra Shekhara Prasad</h1>
          <p className="text-xl text-gray-400">Full Stack Web Developer & UI/UX Enthusiast</p>
        </header>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-3">🚀 Projects</h2>
         <div className="grid md:grid-cols-2 gap-8">
  {[
    {
      title: 'Student Counselling System',
      desc: 'Dynamic platform connecting students with counselors for personalized guidance.',
      link: 'https://github.com/CSPEDITOR/student-counselling-system',
    },
    {
      title: 'Smart Hen Farming',
      desc: 'IoT-powered poultry dashboard with real-time data monitoring.',
      link: 'https://github.com/CSPEDITOR/smart-hen-farming',
    },
  ].map((proj, i) => (
    <div
      key={i}
      className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/10 hover:shadow-lg transition"
    >
      <h3 className="text-2xl font-bold mb-2">{proj.title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{proj.desc}</p>
      <a
        href={proj.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <button className="px-4 py-2 rounded-full border border-white text-sm text-white hover:bg-white hover:text-black transition">
          View Project
        </button>
      </a>
    </div>
  ))}
</div>

        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-3">🧠 Skills</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            {['React', 'Node.js', 'MongoDB', 'PHP', 'Tailwind CSS', 'MySQL','Java','Express',].map((skill, i) => (
              <span key={i} className="bg-white/10 px-4 py-1 rounded-full text-white/80 hover:bg-white/20">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-3">📬 Contact</h2>
          <div className="flex gap-6">
            <a href="mailto:chandrashekharaprasad@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="w-6 h-6 text-white hover:text-blue-400 transition" />
            </a>
            <a href="https://github.com/Cspeditor" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-white hover:text-blue-400 transition" />
            </a>
            <a href="https://linkedin.com/in/cspeditor" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-white hover:text-blue-400 transition" />
            </a>
            <a href="https://instagram.com/csp_editor" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-white hover:text-blue-400 transition" />
            </a>
            <a href="https://facebook.com/chandrashekhara.prasad.3" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 text-white hover:text-blue-400 transition" />
            </a>
          </div>
        </section>

        <footer className="text-center text-xs text-gray-500 mt-12">
          &copy; {new Date().getFullYear()} Chandra Shekhara Prasad. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
