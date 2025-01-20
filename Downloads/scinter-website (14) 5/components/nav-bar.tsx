'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { SubscribeModal } from './subscribe-modal'
// import Logo from './Logo'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedLogo from "./AnimatedBackground"


export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  return (
     <motion.nav 
      className="fixed w-full z-40 top-0 transition-all duration-300 bg-black/90 backdrop-blur-lg shadow-lg"
      >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <AnimatedLogo />
        <div className="hidden md:flex items-center space-x-2">
          <NavButton href="#features">Key Features</NavButton>
          <NavButton href="#how-it-works">How It Works</NavButton>
          <NavButton href="#use-cases">Use Cases</NavButton>
          <NavButton href="#join" onClick={() => setIsSubscribeOpen(true)}>Subscribe</NavButton>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-gray-300" /> : <Menu className="h-6 w-6 text-gray-300" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden border-t border-white/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2 sm:px-6 bg-black/90 backdrop-blur-xl">
              <NavButton mobile href="#features">Key Features</NavButton>
              <NavButton mobile href="#how-it-works">How It Works</NavButton>
              <NavButton mobile href="#use-cases">Use Cases</NavButton>
              <NavButton mobile href="#join" onClick={() => setIsSubscribeOpen(true)}>Subscribe</NavButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <SubscribeModal isOpen={isSubscribeOpen} setIsOpen={setIsSubscribeOpen} />
    </motion.nav>
  )
}

const NavButton = ({ children, onClick, mobile = false, href }) => (
  <Button 
    variant="ghost" 
    className={`text-base md:text-lg text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300 ${mobile ? 'w-full text-left justify-start' : ''}`}
    asChild
  >
    <Link 
      href={href} 
      onClick={(e) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (onClick) onClick();
      }}
    >
      {children}
    </Link>
  </Button>
)

