'use client'

import { useState } from 'react'
import { NavBar } from '../components/nav-bar'
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { Atom, Brain, Share, FileText } from 'lucide-react'
import { ULogo } from '../components/u-logo'
import { Footer } from '../components/footer'
import Background from '../components/Background'
import { CurvedLines } from '../components/curved-lines'
import { SubscribeModal } from '../components/subscribe-modal'
import { UseCases } from '../components/use-cases'
import { motion, useScroll, useTransform } from 'framer-motion'
import KnowledgeGraph from '../components/KnowledgeGraph'

export default function Page() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="min-h-screen text-white relative overflow-hidden bg-gradient-to-b from-black via-purple-900/20 to-black">
      <Background />
      <CurvedLines />
      <NavBar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center px-4 py-24 sm:py-32 mt-16 sm:mt-20 min-h-[calc(100vh-4rem)] bg-cover bg-center"
        style={{
          backgroundImage: "url('/path-to-your-background.gif')", // Replace with your GIF path
        }}
      >
              {/* Main Heading */}
              
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.6] drop-shadow-lg text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Revolutionizing <br />
          <span
            className="block bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Scientific Discoveries
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-[2] text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Explore insights, collaborate globally, and accelerate research with AI-powered tools.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button
            size="lg"
            onClick={() => setIsSubscribeOpen(true)}
            className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-400 text-white px-12 py-6 text-xl sm:text-2xl font-bold rounded-full shadow-md ring-2 ring-blue-300 transition-all duration-300 hover:scale-105 hover:ring-4 hover:shadow-lg"
          >
            Join ScInter
          </Button>
        </motion.div>
      </section>


      {/* What is ScInter? Section */}
      <section id="about" className="relative py-16 md:py-24 px-4">
        <motion.div
          className="text-center w-full max-w-5xl mx-auto backdrop-blur-xl bg-white/5 rounded-lg p-8 sm:p-12 border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Unifying <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Science, Technology, and Collaboration</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            ScInter is a global platform bridging researchers, professionals, and enthusiasts worldwide. Our AI-driven tools enable:
          </p>
          <ul className="text-left space-y-4 max-w-3xl mx-auto mb-6">
            <li className="flex items-center text-lg md:text-xl text-gray-300">
              <span className="mr-4 text-purple-400">•</span>
              Exploring complex research with ease
            </li>
            <li className="flex items-center text-lg md:text-xl text-gray-300">
              <span className="mr-4 text-purple-400">•</span>
              Finding global collaborators
            </li>
            <li className="flex items-center text-lg md:text-xl text-gray-300">
              <span className="mr-4 text-purple-400">•</span>
              Making science accessible to all
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="relative py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-80 text-shadow">Key Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              icon={Atom}
              title="Large Concept Model (LCM)"
              description="Discover interdisciplinary connections between scientific concepts and emerging research trends."
            />
            <FeatureCard
              icon={Brain}
              title="Dynamic Knowledge Graphs"
              description="Visualize relationships between concepts, publications, and experts using AI algorithms."
            />
            <FeatureCard
              icon={Share}
              title="Collaborative Ecosystem"
              description="Engage with a global network through real-time collaboration and discussion forums."
            />
            <FeatureCard
              icon={FileText}
              title="Simplified Knowledge Sharing"
              description="Access complex scientific research in easy-to-understand formats."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-80 text-shadow">How It Works</span>
          </h2>
          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "Build Your Profile",
                description: "Customize your experience with your research interests and expertise."
              },
              {
                step: 2,
                title: "Explore the Knowledge Graph",
                description: "Navigate interconnected topics and identify potential collaborators."
              },
              {
                step: 3,
                title: "Collaborate in Real-Time",
                description: "Use AI-assisted tools for seamless global collaboration."
              },
              {
                step: 4,
                title: "Gain Actionable Insights",
                description: "Leverage AI capabilities to identify research gaps and trends."
              }
            ].map((item) => (
              <StepCard key={item.step} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Graph Section */}
      <section id="knowledge-graph" className="relative py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-80 text-shadow">Interactive Knowledge Graph</span>
          </h2>
          <div className="mb-8 text-center">
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the interconnected world of scientific knowledge. Each node represents a concept, and connections show relationships between different areas of research.
            </p>
          </div>
          <div className="backdrop-blur-xl bg-black/30 rounded-lg border border-white/10 p-4">
            <KnowledgeGraph />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="relative py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-80 text-shadow">Use Cases</span>
          </h2>
          <UseCases />
        </div>
      </section>

      {/* Join ScInter Section */}
      <section id="join" className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-black to-purple-900/30">
        <motion.div
          className="max-w-5xl mx-auto text-center backdrop-blur-xl bg-white/5 rounded-lg p-8 sm:p-12 border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Join ScInter to Transform STEM
          </h2>
          <div className="mb-8">
            <ULogo />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Discover new connections, collaborate globally, and accelerate scientific breakthroughs.
          </p>
          <Button
            size="lg"
            onClick={() => setIsSubscribeOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-xl rounded-lg transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Subscribe Now
          </Button>
        </motion.div>
      </section>

      <Toaster />
      <Footer />
      <SubscribeModal isOpen={isSubscribeOpen} setIsOpen={setIsSubscribeOpen} />
    </main>
  )
}

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="backdrop-blur-xl bg-white/5 rounded-lg p-6 border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="w-12 h-12 text-purple-400 mb-4" />
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
  </motion.div>
)

const StepCard = ({ step, title, description }) => (
  <motion.div
    className="backdrop-blur-xl bg-white/5 rounded-lg p-6 border border-white/10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: step * 0.1 }}
  >
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
        <span className="text-white font-bold text-lg">{step}</span>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  </motion.div>
)

