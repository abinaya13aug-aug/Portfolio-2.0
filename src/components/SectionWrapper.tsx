import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectionWrapperProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

const SectionWrapper = ({ id, title, subtitle, children, className = '' }: SectionWrapperProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id={id} ref={ref} className={`section-padding relative z-10 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
        </motion.div>
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper
