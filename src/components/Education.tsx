import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const educationData = [
  {
    degree: 'B.Sc. Dialysis Technology',
    institution: 'GVMCH / The Tamil Nadu Dr. M.G.R. Medical University',
    period: '2021 – 2026',
    score: '76.3%',
    location: 'Tamil Nadu, India',
    description:
      'Pursuing a Bachelor of Science in Dialysis Technology while simultaneously developing strong programming skills in Python and web development.',
    icon: GraduationCap,
    current: true,
  },
  {
    degree: 'Higher Secondary Certificate (12th Grade)',
    institution: 'Sri Krishna Matric Hr. Sec School',
    period: '2020 – 2021',
    score: '92.6%',
    location: 'Tamil Nadu, India',
    description:
      'Completed HSC with distinction, demonstrating strong academic performance and a disciplined approach to learning.',
    icon: Award,
    current: false,
  },
]

const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="My academic journey that has shaped my analytical thinking and learning mindset."
    >
      <div ref={ref} className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 md:-translate-x-1/2" />

        {educationData.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex items-start mb-12 last:mb-0 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-5 md:left-1/2 w-3 h-3 rounded-full bg-primary-400 border-2 border-surface-900 -translate-x-1/2 mt-6 z-10 pulse-glow" />

            {/* Card */}
            <div className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              <div className="glass-card p-6 relative overflow-hidden">
                {edu.current && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-accent-500/15 text-accent-400 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                      Current
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <Calendar size={13} />
                  <span>{edu.period}</span>
                  <span className="mx-1">•</span>
                  <MapPin size={13} />
                  <span>{edu.location}</span>
                </div>

                <h3 className="text-base font-heading font-bold text-slate-100 mb-1">{edu.degree}</h3>
                <p className="text-sm text-primary-300 font-medium mb-3">{edu.institution}</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">{edu.description}</p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-500/10">
                  <Award size={14} className="text-primary-400" />
                  <span className="text-sm font-semibold text-primary-300">{edu.score}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Education
