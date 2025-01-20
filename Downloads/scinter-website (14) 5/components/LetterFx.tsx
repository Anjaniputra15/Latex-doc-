'use client'

import React, { useState, useEffect } from 'react'

interface LetterFxProps {
  children: string
  speed?: 'slow' | 'medium' | 'fast'
  trigger?: 'hover' | 'instant'
  charset?: string[]
}

const LetterFx: React.FC<LetterFxProps> = ({ 
  children, 
  speed = 'medium', 
  trigger = 'instant',
  charset = ['X', '@', '$', 'a', 'H', 'z', 'o', '0', 'y', '#', '?', '*', '0', '1', '+']
}) => {
  const [text, setText] = useState(children)
  const [isAnimating, setIsAnimating] = useState(trigger === 'instant')

  const speedMap = {
    slow: 100,
    medium: 50,
    fast: 25
  }

  useEffect(() => {
    if (isAnimating) {
      let iteration = 0
      const interval = setInterval(() => {
        setText(prevText => 
          prevText.split('').map((letter, index) => {
            if (index < iteration) {
              return children[index]
            }
            return charset[Math.floor(Math.random() * charset.length)]
          }).join('')
        )
        
        if (iteration >= children.length) {
          clearInterval(interval)
          setIsAnimating(false)
        }
        iteration += 1/3
      }, speedMap[speed])

      return () => clearInterval(interval)
    }
  }, [isAnimating, children, speed, charset])

  return (
    <span 
      onMouseEnter={() => trigger === 'hover' && setIsAnimating(true)}
      style={{ fontFamily: 'var(--font-family-code)' }}
    >
      {text}
    </span>
  )
}

export default LetterFx

