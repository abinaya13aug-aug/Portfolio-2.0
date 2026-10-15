import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiPython, SiJavascript, SiDjango, SiMysql, SiPostgresql,
  SiGit, SiGithub
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { Database, Code2, Server, Wrench, Brain } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

interface Skill {
  name: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  level: number
  color: string
}

interface SkillCategory {
  title: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', icon: SiPython, level: 85, color: 'text-python-yellow' },
      { name: 'SQL', icon: Database, level: 75, color: 'text-blue-400' },
      { name: 'JavaScript (Basics)', icon: SiJavascript, level: 50, color: 'text-yellow-400' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Server,
    skills: [
      { name: 'Django', icon: SiDjango, level: 80, color: 'text-green-400' },
      { name: 'Django REST Framework', icon: SiDjango, level: 75, color: 'text-red-400' },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 75, color: 'text-blue-400' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 70, color: 'text-sky-400' },
    ],
  },
  {
    title: 'Concepts',
    icon: Brain,
    skills: [
      { name: 'Object-Oriented Programming', icon: Code2, level: 80, color: 'text-purple-400' },
      { name: 'Data Structures', icon: Code2, level: 70, color: 'text-indigo-400' },
      { name: 'REST API Design', icon: Server, level: 75, color: 'text-teal-400' },
    ],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: SiGit, level: 75, color: 'text-orange-400' },
      { name: 'GitHub', icon: SiGithub, level: 80, color: 'text-slate-300' },
      { name: 'VS Code', icon: VscVscode, level: 85, color: 'text-blue-500' },
    ],
  },
]

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 shimmer"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
          <category.icon size={20} className="text-primary-400" />
        </div>
        <h3 className="text-base font-heading font-semibold text-slate-200">{category.title}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name} className="group">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <skill.icon size={16} className={skill.color} />
                <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
              </div>
              <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
            </div>
            <div className="skill-progress-bg">
              <motion.div
                className="skill-progress-fill"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <SectionWrapper
      id="skills"
      title="Technical Skills"
      subtitle="Technologies and tools I work with to build robust backend applications."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category, i) => (
          <SkillCard key={category.title} category={category} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Skills
