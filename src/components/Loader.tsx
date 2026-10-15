import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      className="loader-container"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="loader-ring" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary-400 font-mono text-sm font-bold">&lt;/&gt;</span>
          </div>
        </div>
        <motion.p
          className="text-primary-300 font-heading text-lg tracking-widest uppercase"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading Portfolio
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loader
