import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import SectionWrapper from './SectionWrapper'

const profiles = [
  {
    name: 'GitHub',
    icon: SiGithub,
    url: 'https://github.com/abinaya13aug-aug',
    username: '@abinaya13aug-aug',
    description: 'Check out my repositories, projects, and contributions.',
    color: 'hover:border-slate-400/40 hover:shadow-slate-400/10',
    iconColor: 'text-slate-300',
    bgHover: 'group-hover:bg-slate-400/10',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/abinaya-a-8541a540b/',
    username: 'Abinaya A',
    description: 'Connect with me professionally and view my career updates.',
    color: 'hover:border-blue-500/40 hover:shadow-blue-500/10',
    iconColor: 'text-blue-400',
    bgHover: 'group-hover:bg-blue-500/10',
  },
]

const CodingProfiles = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper
      id="profiles"
      title="Coding Profiles"
      subtitle="Find me on these platforms where I code, learn, and grow."
    >
      <div ref={ref} className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
        {profiles.map((profile, index) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className={`glass-card p-6 group cursor-pointer ${profile.color}`}
          >
            <div className={`w-12 h-12 rounded-xl bg-surface-700 flex items-center justify-center mb-4 transition-colors ${profile.bgHover}`}>
              <profile.icon size={24} className={profile.iconColor} />
            </div>
            <h3 className="text-base font-heading font-bold text-slate-100 mb-0.5">{profile.name}</h3>
            <p className="text-sm text-primary-300 font-mono mb-2">{profile.username}</p>
            <p className="text-xs text-slate-400 leading-relaxed">{profile.description}</p>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default CodingProfiles
