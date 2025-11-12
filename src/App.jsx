import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Storyboard, Details, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Storyboard />
        <Details />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Event Storyboard</p>
          <a href="#top" className="hover:text-blue-600 transition-colors">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
