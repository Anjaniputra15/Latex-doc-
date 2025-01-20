import { Atom, Rocket, Users, Globe } from 'lucide-react'

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center p-6 backdrop-blur-md bg-slate-900/50 rounded-xl">
        <Atom className="w-12 h-12 text-blue-400 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">STEM Education</h3>
        <p className="text-gray-300">Advancing scientific knowledge through innovative learning approaches</p>
      </div>
      <div className="flex flex-col items-center text-center p-6 backdrop-blur-md bg-slate-900/50 rounded-xl">
        <Rocket className="w-12 h-12 text-blue-400 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
        <p className="text-gray-300">Pushing boundaries with cutting-edge educational technologies</p>
      </div>
      <div className="flex flex-col items-center text-center p-6 backdrop-blur-md bg-slate-900/50 rounded-xl">
        <Users className="w-12 h-12 text-blue-400 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
        <p className="text-gray-300">Building a global network of STEM enthusiasts and educators</p>
      </div>
      <div className="flex flex-col items-center text-center p-6 backdrop-blur-md bg-slate-900/50 rounded-xl">
        <Globe className="w-12 h-12 text-blue-400 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>
        <p className="text-gray-300">Making STEM education accessible worldwide</p>
      </div>
    </div>
  )
}

