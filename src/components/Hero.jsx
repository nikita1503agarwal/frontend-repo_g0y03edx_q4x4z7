import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="top" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white/80 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600/90">Interactive • Tech • Futuristic • Minimal</p>
            <h1 className="mt-4 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
              Event Storyboard
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Design the narrative of your next event with an immersive 3D canvas, modern UI, and smooth motion.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#story" className="inline-flex items-center rounded-md bg-blue-600 text-white text-sm font-medium px-5 py-2.5 shadow hover:bg-blue-700 transition-colors">Start Storyboarding</a>
              <a href="#about" className="inline-flex items-center rounded-md border border-gray-300 text-gray-800 text-sm font-medium px-5 py-2.5 hover:bg-gray-50 transition-colors">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
