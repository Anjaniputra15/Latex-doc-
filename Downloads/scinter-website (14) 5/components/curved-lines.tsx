'use client'

export function CurvedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full opacity-20"
        viewBox="0 0 1200 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 800C200 800 400 600 600 600C800 600 1000 800 1200 800"
          stroke="url(#paint0_linear)"
          strokeWidth="2"
        />
        <path
          d="M0 600C200 600 400 800 600 800C800 800 1000 600 1200 600"
          stroke="url(#paint1_linear)"
          strokeWidth="2"
        />
        <path
          d="M0 400C200 400 400 200 600 200C800 200 1000 400 1200 400"
          stroke="url(#paint2_linear)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="700"
            x2="1200"
            y2="700"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5" stopOpacity="0" />
            <stop offset="0.5" stopColor="#4F46E5" />
            <stop offset="1" stopColor="#4F46E5" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="0"
            y1="700"
            x2="1200"
            y2="700"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9333EA" stopOpacity="0" />
            <stop offset="0.5" stopColor="#9333EA" />
            <stop offset="1" stopColor="#9333EA" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="0"
            y1="300"
            x2="1200"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4F46E5" stopOpacity="0" />
            <stop offset="0.5" stopColor="#4F46E5" />
            <stop offset="1" stopColor="#4F46E5" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

