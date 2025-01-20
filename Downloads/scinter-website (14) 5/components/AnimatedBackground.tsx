
import { useState, useEffect } from "react"
import Link from "next/link"


import Logo from './Logo'
import { motion, AnimatePresence } from 'framer-motion'
const AnimatedLogo = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  const atomVariants = {
    idle: { scale: 1 },
    animate: { scale: [1, 1.2, 1], transition: { duration: 0.5 } }
  }

  const electronVariants = {
    idle: { rotate: 0 },
    animate: { rotate: 360, transition: { duration: 2, ease: "linear", repeat: Infinity } }
  }

  return (
    <Link href="/" className="flex items-center gap-2">
      <motion.div
        className="relative"
        onHoverStart={() => setIsAnimating(true)}
        onHoverEnd={() => setIsAnimating(false)}
        onClick={() => setIsAnimating(true)}
      >
        <motion.div
          variants={atomVariants}
          animate={isAnimating ? "animate" : "idle"}
        >
                  {/* <Logo className="text-white hover:text-purple-400 transition-colors" /> */}
              <Logo/>
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full border-2 border-purple-400 rounded-full"
          variants={electronVariants}
          animate="animate"
        />
      </motion.div>
      <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        ScInter
      </span>
    </Link>
  )
}
export default AnimatedLogo;