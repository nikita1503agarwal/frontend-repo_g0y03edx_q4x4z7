import { useEffect, useState } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="text-xl font-bold tracking-tight">Event Storyboard</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#story" className="hover:text-blue-600 transition-colors">Storyboard</a>
          <a href="#details" className="hover:text-blue-600 transition-colors">Details</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <a href="#story" className="inline-flex items-center rounded-md bg-blue-600 text-white text-sm font-medium px-4 py-2 shadow hover:bg-blue-700 transition-colors">Explore</a>
      </div>
    </header>
  )
}

export default Navbar
