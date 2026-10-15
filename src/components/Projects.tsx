import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Code2, BookOpen, Zap } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import SectionWrapper from './SectionWrapper'

const projects = [
  {
    title: 'Blog Application',
    description:
      'A full-featured blog platform built with Django, featuring user authentication, CRUD operations for posts, comment system, and responsive design.',
    tech: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS'],
    features: ['User registration & login', 'Create, edit, delete posts', 'Comment system', 'Search functionality'],
    learning: 'Deepened understanding of Django MVT architecture and user authentication flows.',
    icon: BookOpen,
    gradient: 'from-primary-500/20 to-accent-500/10',
  },
  {
    title: 'REST API Service',
    description:
      'A RESTful API built with Django REST Framework, implementing CRUD endpoints with authentication, pagination, and proper error handling.',
    tech: ['Python', 'Django REST Framework', 'MySQL', 'Postman'],
    features: ['Token authentication', 'CRUD endpoints', 'Pagination & filtering', 'API documentation'],
    learning: 'Gained practical experience in RESTful design principles and API serialization.',
    icon: Code2,
    gradient: 'from-accent-500/20 to-primary-500/10',
  },
  {
    title: 'Python Automation Scripts',
    description:
      'A collection of Python automation scripts for common tasks like file organization, data processing, and web scraping to boost productivity.',
    tech: ['Python', 'OS Module', 'Requests', 'CSV'],
    features: ['File organizer', 'Data cleaning scripts', 'Automated reports', 'Task scheduling'],
    learning: 'Strengthened Python scripting skills and learned to automate repetitive tasks efficiently.',
    icon: Zap,
    gradient: 'from-yellow-500/20 to-primary-500/10',
  },
]

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card overflow-hidden group"
    >
      {/* Header Gradient */}
      <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6">
        {/* Title */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
              <project.icon size={22} className="text-primary-400" />
            </div>
            <h3 className="text-lg font-heading font-bold text-slate-100">{project.title}</h3>
          </div>
          <div className="flex gap-2">
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-surface-700 flex items-center justify-center text-slate-400 hover:text-primary-300 hover:bg-primary-500/10 transition-all"
              aria-label="View source on GitHub"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-surface-700 flex items-center justify-center text-slate-400 hover:text-accent-400 hover:bg-accent-500/10 transition-all"
              aria-label="View live demo"
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

        {/* Features */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Features</p>
          <ul className="grid grid-cols-2 gap-1.5">
            {project.features.map((f) => (
              <li key={f} className="text-xs text-slate-400 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-accent-400 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Learning */}
        <p className="text-xs text-primary-300/70 italic mb-4">💡 {project.learning}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-primary-500/10 text-primary-300 border border-primary-500/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Hands-on projects showcasing my Python and Django development skills."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <motion.p
        className="text-center mt-8 text-sm text-slate-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        More projects coming soon — actively building and learning! 🚀
      </motion.p>
    </SectionWrapper>
  )
}

export default Projects
