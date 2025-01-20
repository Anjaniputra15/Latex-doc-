'use client'

import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedTextProps {
  text: string
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  // const containerVariants: Variants = {
  //   hidden: {},
  //   visible: {
  //     transition: {
  //       staggerChildren: 0.1
  //     }
  //   }
  // }

  const lineVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const lines = text.split('. ')

  return (
    <div
      ref={ref}
      className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto text-left"
    >
      {lines.map((line, index) => (
        <motion.p key={index} variants={lineVariants} className="mb-2 md:mb-4">
          {line + (index < lines.length - 1 ? '.' : '')}
        </motion.p>
      ))}
    </div>
  )
}

