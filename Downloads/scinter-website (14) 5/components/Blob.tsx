import React from "react"

interface BlobProps {
  className?: string
  state: "one" | "two" | "three"
}

export const Blob: React.FC<BlobProps> = ({ className = "", state }) => {
  const baseClasses = "absolute rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob"
  const stateClasses = {
    one: "bg-purple-300 top-0 left-0 w-72 h-72",
    two: "bg-yellow-300 top-0 right-0 w-72 h-72",
    three: "bg-pink-300 bottom-0 left-1/2 w-72 h-72"
  }

  return (
    <div 
      className={`${baseClasses} ${stateClasses[state]} ${className}`}
    />
  )
}

