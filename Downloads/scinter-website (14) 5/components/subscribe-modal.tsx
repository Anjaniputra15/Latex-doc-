'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { subscribeUser } from '@/app/actions/subscribe'
import { ThankYouMessage } from './ThankYouMessage'
import { AnimatePresence } from 'framer-motion'

const STEM_FIELDS = [
  "Physics",
  "Chemistry",
  "Biology",
  "Mathematics",
  "Computer Science",
  "Engineering",
  "Environmental Science",
  "Neuroscience",
  "Biotechnology",
  "Data Science",
  "Other"
]

export function SubscribeModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('')
  const [customInterest, setCustomInterest] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('interest', interest === 'other' ? customInterest : interest)

    const result = await subscribeUser(formData)
    
    if (result.success) {
      setShowThankYou(true)
    } else {
      toast({
        title: "Error",
        description: result.error || "Something went wrong. Please try again.",
        variant: "destructive",
      })
    }
    
    setIsLoading(false)
  }

  const handleClose = () => {
    setIsOpen(false)
    setShowThankYou(false)
    setName('')
    setEmail('')
    setInterest('')
    setCustomInterest('')
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-purple-900/80 to-blue-900/80 backdrop-blur-xl border border-white/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white mb-2">
              Subscribe for Updates from ScInter
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Stay informed about the latest developments, research insights, and features of our platform dedicated to advancement of STEM.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder-gray-400"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder-gray-400"
            />
            <Select value={interest} onValueChange={setInterest}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Area of Interest" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                {STEM_FIELDS.map((field) => (
                  <SelectItem key={field} value={field.toLowerCase()}>
                    {field}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {interest === 'other' && (
              <Input
                placeholder="Specify your area of interest"
                value={customInterest}
                onChange={(e) => setCustomInterest(e.target.value)}
                className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
            )}
            <Button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <AnimatePresence>
        {showThankYou && <ThankYouMessage onClose={handleClose} />}
      </AnimatePresence>
    </>
  )
}

