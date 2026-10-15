import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, GraduationCap, Target, Lightbulb, Rocket, Heart } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const highlights = [
  { icon: Code2, label: 'Python & Django', description: 'Building backend systems and REST APIs' },
  { icon: GraduationCap, label: 'Continuous Learner', description: 'Coursera certified, always upskilling' },
  { icon: Target, label: 'Career Focused', description: 'Targeting Python Developer roles' },
  { icon: Lightbulb, label: 'Problem Solver', description: 'Strong OOP and data structures' },
  { icon: Rocket, label: 'Fast Learner', description: 'Eager to contribute from day one' },
  { icon: Heart, label: 'Passionate Coder', description: 'Clean, efficient, maintainable code' },
]

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Passionate about building reliable backend systems and writing elegant Python code."
    >
      <div ref={ref} className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left — Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <div className="glass-card p-6 space-y-4">
            <p className="text-slate-300 leading-relaxed">
              I'm <span className="text-primary-300 font-semibold">Abinaya</span>, a motivated fresher from{' '}
              <span className="text-accent-400">Chennai, Tamil Nadu</span> with hands-on experience building
              web applications and automation scripts using Python. I hold a B.Sc. in Dialysis Technology from
              GVMCH affiliated to The Tamil Nadu Dr. M.G.R. Medical University.
            </p>
            <p className="text-slate-300 leading-relaxed">
              My journey into programming started with curiosity and grew into a deep passion. I've completed
              the <span className="text-primary-300">Python for Everybody Specialization</span> from the
              University of Michigan on Coursera, mastering core Python concepts, web scraping, databases,
              and web development.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I'm proficient in <span className="text-accent-400">Django</span>,{' '}
              <span className="text-accent-400">REST Framework</span>, and relational databases like
              MySQL and PostgreSQL. I'm passionate about writing clean, efficient code and eager to
              contribute to a fast-paced development team as a Python Developer.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: '1', label: 'Certification' },
              { value: '92.6%', label: '12th Grade' },
              { value: '76.3%', label: 'B.Sc. Degree' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card p-4 text-center"
              >
                <p className="text-2xl font-heading font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-3"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="glass-card p-5 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mb-3 group-hover:bg-primary-500/20 transition-colors">
                <item.icon size={20} className="text-primary-400" />
              </div>
              <h3 className="text-sm font-semibold text-slate-200 mb-1">{item.label}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default About
