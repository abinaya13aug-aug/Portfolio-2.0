import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionWrapper from './SectionWrapper'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abinaya13aug@gmail.com',
    href: 'mailto:abinaya13aug@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9344822055',
    href: 'tel:+919344822055',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    href: '#',
  },
]

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/abinaya13aug-aug', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/abinaya-a-8541a540b/', label: 'LinkedIn' },
]

interface ContactProps {
  onOpenResume?: () => void
}

const Contact = ({ onOpenResume }: ContactProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to a backend
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="I'm actively looking for Python Developer opportunities. Let's connect!"
    >
      <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="glass-card p-6 space-y-5">
            <h3 className="text-lg font-heading font-bold text-slate-100">Let's Work Together</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              I'm a fresher actively seeking opportunities as a Python Developer, Backend Developer,
              or Software Engineer. Feel free to reach out for collaborations, opportunities, or just
              a friendly conversation about tech!
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <info.icon size={18} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{info.label}</p>
                    <p className="text-sm text-slate-300 group-hover:text-primary-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Resume */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-primary-300 hover:border-primary-400/30 transition-all"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
            <button
              type="button"
              onClick={onOpenResume ? onOpenResume : () => window.open('/resume.html', '_blank')}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg glass text-sm font-medium text-slate-300 hover:text-primary-300 hover:border-primary-400/30 transition-all cursor-pointer"
            >
              <Download size={16} />
              View Resume
            </button>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-5">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-1.5">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="John Doe"
                required
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-1.5">
                Your Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="john@example.com"
                required
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-1.5">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Hi Abinaya, I'd love to discuss an opportunity..."
                required
                className="form-input resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold text-sm shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-shadow"
            >
              {submitted ? (
                'Message Sent! ✓'
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
