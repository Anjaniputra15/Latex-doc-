export function ULogo() {
  return (
    <div className="relative inline-flex items-start">
      <span className="text-[120px] sm:text-[140px] leading-none font-bold text-orange-500 text-shadow relative glossy-u">
        U
        <span className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-50 mix-blend-overlay"></span>
      </span>
      <div className="flex flex-col text-left mt-2 sm:mt-4 ml-1 sm:ml-2 space-y-1">
        <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">nbounded</span>
        <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">nderstandable</span>
        <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">niversal</span>
      </div>
    </div>
  )
}
<style jsx>{`
  @keyframes shine {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  .glossy-u {
    background: linear-gradient(90deg, transparent, rgba(255,165,0,0.5), transparent);
    background-size: 200% 100%;
    animation: shine 3s infinite;
  }
`}</style>

