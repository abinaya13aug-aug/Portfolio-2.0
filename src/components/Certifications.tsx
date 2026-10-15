import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink, Calendar, Building } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const certifications = [
  {
    title: 'Python for Everybody Specialization',
    provider: 'University of Michigan',
    platform: 'Coursera',
    description:
      'Comprehensive specialization covering Python programming fundamentals, data structures, web scraping, databases, and web application development.',
    topics: ['Python Basics', 'Data Structures', 'Web Scraping', 'Databases', 'Web Development'],
    link: 'https://www.coursera.org/specializations/python',
    gradient: 'from-blue-500/20 to-primary-500/20',
  },
]

const Certifications = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Professional certifications that validate my technical expertise."
    >
      <div ref={ref} className="max-w-2xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass-card overflow-hidden"
          >
            {/* Gradient Header */}
            <div className={`h-1.5 bg-gradient-to-r ${cert.gradient}`} />

            <div className="p-7">
              {/* Badge */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/10 flex items-center justify-center shrink-0">
                  <Award size={28} className="text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-slate-100 mb-1">{cert.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Building size={13} className="text-primary-400" />
                      {cert.provider}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {cert.platform}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed mb-5">{cert.description}</p>

              {/* Topics */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Topics Covered</p>
                <div className="flex flex-wrap gap-2">
                  {cert.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/10"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors group"
              >
                View Specialization
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Certifications
