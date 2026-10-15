import { Heart } from 'lucide-react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-primary-500/10">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {year} <span className="text-primary-400 font-medium">Abinaya</span>. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            Built with <Heart size={14} className="text-red-400 fill-red-400" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
