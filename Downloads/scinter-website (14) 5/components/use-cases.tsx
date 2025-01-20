import { Network, BookOpen, TrendingUp, Lightbulb, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export function UseCases() {
  const cases = [
    {
      icon: Network,
      title: "Researcher Collaboration",
      description: "Foster global collaboration with ease. ScInter connects researchers worldwide, enabling them to share ideas, co-author groundbreaking studies, and collaborate seamlessly, no matter the distance."
    },
    {
      icon: BookOpen,
      title: "Accessible Knowledge for All",
      description: "Simplifying complex research for a wider audience. ScInter distills scientific papers into clear, digestible insights, making knowledge accessible to students, professionals, and anyone with a thirst for learning."
    },
    {
      icon: TrendingUp,
      title: "Trend Prediction in Research",
      description: "Stay ahead of the curve with data-driven predictions. ScInter helps researchers anticipate emerging trends and interdisciplinary opportunities, positioning them at the forefront of their fields."
    },
    {
      icon: Lightbulb,
      title: "Real-World Impact",
      description: "Turning research into reality. ScInter connects scientific breakthroughs to practical solutions, driving innovation and impact in industries, communities, and global challenges."
    },
    {
      icon: Users,
      title: "Interactive Learning & Mentorship",
      description: "Facilitating meaningful learning experiences. ScInter enables peer-to-peer engagement, expert mentorship, and collaborative workshops, empowering users to grow and share knowledge in a dynamic environment."
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cases.map((useCase, index) => (
        <motion.div 
          key={index} 
          className="p-6 backdrop-blur-xl bg-white/5 rounded-xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <useCase.icon className="w-12 h-12 text-purple-400 mb-4" />
          <h3 className="text-lg font-bold mb-2 text-white">{useCase.title}</h3>
          <p className="text-sm text-gray-300">{useCase.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

