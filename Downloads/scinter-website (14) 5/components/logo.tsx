// const Logo = () => {
  
//     return (
//       <svg
//         className={`w-10 h-10 ${className}`}
//         viewBox="0 0 100 100"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />
//         <circle cx="50" cy="50" r="8" fill="currentColor" />
//         <circle cx="50" cy="20" r="6" fill="currentColor" />
//         <circle cx="50" cy="80" r="6" fill="currentColor" />
//         <circle cx="20" cy="50" r="6" fill="currentColor" />
//         <circle cx="80" cy="50" r="6" fill="currentColor" />
//         <circle cx="28" cy="28" r="4" fill="currentColor" />
//         <circle cx="72" cy="28" r="4" fill="currentColor" />
//         <circle cx="28" cy="72" r="4" fill="currentColor" />
//         <circle cx="72" cy="72" r="4" fill="currentColor" />
//         <line x1="50" y1="22" x2="50" y2="78" stroke="currentColor" strokeWidth="2" />
//         <line x1="22" y1="50" x2="78" y2="50" stroke="currentColor" strokeWidth="2" />
//         <line x1="30" y1="30" x2="70" y2="70" stroke="currentColor" strokeWidth="2" />
//         <line x1="30" y1="70" x2="70" y2="30" stroke="currentColor" strokeWidth="2" />
//       </svg>
//     )
//   }



// export default Logo;



import React from 'react'

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      className={`w-10 h-10 ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      <circle cx="50" cy="20" r="6" fill="currentColor" />
      <circle cx="50" cy="80" r="6" fill="currentColor" />
      <circle cx="20" cy="50" r="6" fill="currentColor" />
      <circle cx="80" cy="50" r="6" fill="currentColor" />
      <circle cx="28" cy="28" r="4" fill="currentColor" />
      <circle cx="72" cy="28" r="4" fill="currentColor" />
      <circle cx="28" cy="72" r="4" fill="currentColor" />
      <circle cx="72" cy="72" r="4" fill="currentColor" />
      <line x1="50" y1="22" x2="50" y2="78" stroke="currentColor" strokeWidth="2" />
      <line x1="22" y1="50" x2="78" y2="50" stroke="currentColor" strokeWidth="2" />
      <line x1="30" y1="30" x2="70" y2="70" stroke="currentColor" strokeWidth="2" />
      <line x1="30" y1="70" x2="70" y2="30" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export default Logo