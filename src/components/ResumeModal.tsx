import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Printer, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-surface-900 border border-primary-500/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-primary-500/10 bg-surface-800/80">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-accent-400" />
                <h3 className="text-lg font-heading font-bold text-slate-100">Abinaya's Resume</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary-500/10 text-primary-300 font-medium">ATS-Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  title="Print / Save as PDF"
                >
                  <Printer size={14} />
                  <span>Print / Save PDF</span>
                </button>
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-600 text-xs font-semibold text-white hover:bg-primary-500 transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>Full View</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-surface-700 transition-colors ml-2"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body - Printable Resume Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-surface-900/90 text-slate-200 font-sans space-y-6">
              {/* Header */}
              <div className="border-b border-primary-500/20 pb-6 text-center">
                <h1 className="text-3xl font-heading font-extrabold text-white tracking-wide">ABINAYA</h1>
                <p className="text-primary-400 font-semibold tracking-wider text-sm mt-1 uppercase">Python Developer</p>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-300 mt-3">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-primary-400" />
                    Chennai, Tamil Nadu, India
                  </span>
                  <span>•</span>
                  <a href="tel:+919344822055" className="flex items-center gap-1 hover:text-primary-300">
                    <Phone size={12} className="text-primary-400" />
                    +91-9344822055
                  </a>
                  <span>•</span>
                  <a href="mailto:abinaya13aug@gmail.com" className="flex items-center gap-1 hover:text-primary-300">
                    <Mail size={12} className="text-primary-400" />
                    abinaya13aug@gmail.com
                  </a>
                  <span>•</span>
                  <a href="https://linkedin.com/in/abinaya-a-8541a540b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary-300">
                    <FaLinkedin size={12} className="text-primary-400" />
                    LinkedIn
                  </a>
                  <span>•</span>
                  <a href="https://github.com/abinaya13aug-aug" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary-300">
                    <FaGithub size={12} className="text-primary-400" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h2 className="text-sm font-heading font-bold text-primary-300 uppercase tracking-widest border-b border-primary-500/20 pb-1 mb-2">
                  Professional Summary
                </h2>
                <p className="text-xs leading-relaxed text-slate-300">
                  Motivated fresher with hands-on experience building web applications and automation scripts using Python.
                  Proficient in Django/Flask, REST APIs, and relational databases, with a solid grasp of object-oriented programming
                  and data structures. Passionate about writing clean, efficient code and eager to contribute to a fast-paced development team as a Python Developer.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-sm font-heading font-bold text-primary-300 uppercase tracking-widest border-b border-primary-500/20 pb-1 mb-2">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-slate-200">Languages: </span>
                    <span className="text-slate-400">Python, SQL, basics of JavaScript</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200">Frameworks: </span>
                    <span className="text-slate-400">Django, REST Framework</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200">Databases: </span>
                    <span className="text-slate-400">MySQL, PostgreSQL</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200">Concepts: </span>
                    <span className="text-slate-400">OOPs (Object-Oriented Programming), Data Structures</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-semibold text-slate-200">Tools & Platforms: </span>
                    <span className="text-slate-400">Git/GitHub, VS Code</span>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-sm font-heading font-bold text-primary-300 uppercase tracking-widest border-b border-primary-500/20 pb-1 mb-2">
                  Projects
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-xs font-bold text-white">Blog Web Application</h3>
                      <span className="text-[11px] text-primary-300">Python • Django • PostgreSQL</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-300 mt-1 space-y-0.5">
                      <li>Designed and developed a complete responsive blogging application with secure user authentication (MVT architecture).</li>
                      <li>Implemented full CRUD capabilities for articles, comments, categories, and database queries.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-xs font-bold text-white">RESTful API Service</h3>
                      <span className="text-[11px] text-primary-300">Django REST Framework • MySQL</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-300 mt-1 space-y-0.5">
                      <li>Engineered scalable REST API endpoints featuring token-based authentication and pagination.</li>
                      <li>Tested API endpoints using Postman and implemented data serialization for JSON request/response formats.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-xs font-bold text-white">Python Automation & Scripting Suite</h3>
                      <span className="text-[11px] text-primary-300">Python • OS • Requests</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-300 mt-1 space-y-0.5">
                      <li>Automated repetitive file management, data extraction, and scheduled tasks using standard Python libraries.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-sm font-heading font-bold text-primary-300 uppercase tracking-widest border-b border-primary-500/20 pb-1 mb-2">
                  Education
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between items-start text-xs">
                    <div>
                      <p className="font-bold text-white">B.Sc. Dialysis Technology</p>
                      <p className="text-slate-400">GVMCH / The Tamil Nadu Dr. M.G.R. Medical University</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary-300">76.3%</p>
                      <p className="text-slate-400">2021 – 2026</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start text-xs">
                    <div>
                      <p className="font-bold text-white">Higher Secondary Certificate (12th Grade)</p>
                      <p className="text-slate-400">Sri Krishna Matric Hr. Sec School</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary-300">92.6%</p>
                      <p className="text-slate-400">2020 – 2021</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-sm font-heading font-bold text-primary-300 uppercase tracking-widest border-b border-primary-500/20 pb-1 mb-2">
                  Certifications
                </h2>
                <div className="text-xs flex justify-between items-center">
                  <div>
                    <p className="font-bold text-white">Python for Everybody Specialization</p>
                    <p className="text-slate-400">University of Michigan (Coursera)</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-accent-500/10 text-accent-400 text-[11px] font-semibold">Completed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ResumeModal
