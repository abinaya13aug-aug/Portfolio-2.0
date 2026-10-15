import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Download, Mail, ArrowDown } from 'lucide-react'
import { SiPython, SiDjango, SiPostgresql } from 'react-icons/si'

const floatingIcons = [
  { Icon: SiPython, x: '10%', y: '20%', size: 32, delay: 0, className: 'floating text-python-yellow/20' },
  { Icon: SiDjango, x: '85%', y: '15%', size: 28, delay: 1, className: 'floating-delayed text-accent-400/15' },
  { Icon: SiPostgresql, x: '75%', y: '70%', size: 26, delay: 2, className: 'floating-slow text-primary-400/15' },
  { Icon: SiPython, x: '15%', y: '75%', size: 24, delay: 0.5, className: 'floating-delayed text-python-blue/15' },
  { Icon: SiDjango, x: '90%', y: '55%', size: 22, delay: 1.5, className: 'floating text-primary-300/10' },
]

interface HeroProps {
  onOpenResume?: () => void
}

const Hero = ({ onOpenResume }: HeroProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
      {/* Floating Icons */}
      {floatingIcons.map((icon, i) => (
        <div
          key={i}
          className={`absolute hidden md:block ${icon.className}`}
          style={{ left: icon.x, top: icon.y }}
        >
          <icon.Icon size={icon.size} />
        </div>
      ))}

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-accent-400 font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
          Open to Work
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 text-lg md:text-xl font-medium mb-3"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-4 text-glow"
        >
          <span className="gradient-text">Abinaya</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl font-heading font-medium text-primary-300 mb-6 h-9"
        >
          <TypeAnimation
            sequence={[
              'Python Developer', 2000,
              'Backend Developer', 2000,
              'Django Enthusiast', 2000,
              'Problem Solver', 2000,
            ]}
            speed={40}
            repeat={Infinity}
            cursor={true}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Motivated fresher passionate about building web applications and automation scripts using Python.
          Proficient in Django, REST APIs, and relational databases.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-ripple group flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold text-sm shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300"
          >
            <Mail size={18} />
            Contact Me
          </a>
          <button
            type="button"
            onClick={onOpenResume ? onOpenResume : () => window.open('/resume.html', '_blank')}
            className="btn-ripple group flex items-center gap-2 px-7 py-3 rounded-xl glass text-slate-200 font-semibold text-sm hover:border-primary-400/40 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Download size={18} />
            View / Download Resume
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-slate-500 hover:text-primary-400 transition-colors">
          <ArrowDown size={22} />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
