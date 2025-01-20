import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
import { ContactForm } from './contact-form'

export function Footer() {
  return (
    <footer className="w-full bg-black/90 backdrop-blur-lg py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
        <div className="w-full space-y-8">
          <div className="flex flex-wrap justify-center gap-8 text-base text-gray-300">
            <Link href="/terms" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</Link>
            <span className="text-gray-500 hover:text-purple-400 transition-colors duration-300">
              ©SCINTER.PVT.LTD.
            </span>
            <ContactForm />
          </div>
          <div className="flex justify-center space-x-8">
            <SocialIcon href="#" icon={Facebook} label="Facebook" />
            <SocialIcon href="#" icon={Twitter} label="Twitter" />
            <SocialIcon href="#" icon={Linkedin} label="LinkedIn" />
            <SocialIcon href="#" icon={Github} label="GitHub" />
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
    aria-label={label}
  >
    <Icon size={28} />
  </a>
)

