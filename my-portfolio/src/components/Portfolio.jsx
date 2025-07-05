import React from 'react';
import { Github, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <header className="mb-14 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold mb-4 tracking-tight"
          >
            Chandra Shekhara Prasad
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400"
          >
            Full Stack Web Developer & UI/UX Enthusiast
          </motion.p>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
            Passionate about building seamless digital experiences with clean code, modern tools, and a strong focus on performance & accessibility.
          </p>
        </header>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-3">🚀 Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Student Counselling System',
                desc: 'Dynamic platform connecting students with counselors for personalized guidance and smart slot booking.',
                link: 'https://github.com/CSPEDITOR/student-counselling-system',
              },
              {
                title: 'Smart Hen Farming',
                desc: 'IoT-powered poultry dashboard with sensor-driven real-time monitoring and analysis for farm management.',
                link: 'https://github.com/CSPEDITOR/smart-hen-farming',
              },
            ].map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
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
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-3">🧠 Skills</h2>
          <motion.div 
            className="flex flex-wrap gap-4 text-sm"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.05 }}
          >
            {['React', 'Node.js', 'MongoDB', 'PHP', 'Tailwind CSS', 'MySQL', 'Java', 'Express'].map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 px-4 py-1 rounded-full text-white/80 hover:bg-white/20 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </section>

        {/* Contact */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-3">📬 Contact</h2>
          <div className="flex gap-6 justify-center">
            {[
              { Icon: Mail, link: "mailto:chandrashekharaprasad@gmail.com" },
              { Icon: Github, link: "https://github.com/Cspeditor" },
              { Icon: Linkedin, link: "https://linkedin.com/in/cspeditor" },
              { Icon: Instagram, link: "https://instagram.com/csp_editor" },
              { Icon: Facebook, link: "https://facebook.com/chandrashekhara.prasad.3" },
            ].map(({ Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="transition-all"
              >
                <Icon className="w-6 h-6 text-white hover:text-blue-400 transition" />
              </motion.a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-500 mt-12">
          &copy; {new Date().getFullYear()} Chandra Shekhara Prasad. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
