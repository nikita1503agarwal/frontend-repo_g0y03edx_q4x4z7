import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function About() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} className="text-3xl sm:text-4xl font-semibold">
          Build moments worth remembering
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} className="mt-4 text-gray-600 max-w-2xl">
          A clean, modern canvas for mapping your event story: scenes, timelines, assets, and roles — all animated with delightful motion.
        </motion.p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Scene blocks', desc: 'Compose your event from modular scenes and transitions.' },
            { title: 'Timeline view', desc: 'Zoomable timeline to pace keynote, breaks, and reveals.' },
            { title: 'Asset library', desc: 'Centralize decks, media, stage cues, and contacts.' },
            { title: 'Collaboration', desc: 'Share live previews and gather feedback instantly.' },
            { title: '3D hero', desc: 'Inspire stakeholders with an interactive 3D hero moment.' },
            { title: 'Export', desc: 'One-click PDF and run-of-show exports for crews.' },
          ].map((f, i) => (
            <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={fadeUp} className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-medium text-lg">{f.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Storyboard() {
  return (
    <section id="story" className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-start justify-between gap-8 flex-col lg:flex-row">
          <div className="w-full lg:w-2/5">
            <h2 className="text-3xl sm:text-4xl font-semibold">Storyboard your event</h2>
            <p className="mt-4 text-gray-600">Drag blocks to outline your event flow. Each block represents a scene — opening, keynote, demo, break, awards, finale.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>• Quick-add scenes with presets</li>
              <li>• Color-code tracks (main stage, backstage, lobby)</li>
              <li>• Add duration, owner, and assets</li>
            </ul>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full lg:w-3/5">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="grid grid-cols-12 gap-2">
                {[
                  { name: 'Welcome', color: 'bg-blue-100 text-blue-800' },
                  { name: 'Keynote', color: 'bg-purple-100 text-purple-800' },
                  { name: 'Demo', color: 'bg-emerald-100 text-emerald-800' },
                  { name: 'Break', color: 'bg-orange-100 text-orange-800' },
                  { name: 'Awards', color: 'bg-pink-100 text-pink-800' },
                  { name: 'Finale', color: 'bg-slate-100 text-slate-800' },
                ].map((b, i) => (
                  <div key={i} className={`col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 ${b.color} rounded-lg px-3 py-2 text-sm font-medium`}>{b.name}</div>
                ))}
              </div>
              <div className="mt-4 h-2 w-full rounded bg-gray-100">
                <div className="h-2 w-1/2 rounded bg-gradient-to-r from-blue-500 to-purple-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function Details() {
  return (
    <section id="details" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold">Details that delight</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Motion-first', desc: 'Smooth transitions guide attention without distraction.' },
            { title: 'Minimal UI', desc: 'A sparse, calm interface that lets content shine.' },
            { title: 'Dark-ready', desc: 'Colors and contrast tuned for all lighting conditions.' },
          ].map((f, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-6">
              <h3 className="font-medium text-lg">{f.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-t from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold">Ready to craft your event story?</h2>
          <p className="mt-3 text-gray-600">Get a tailored walkthrough and template for your next show.</p>
          <form className="mt-6 grid sm:grid-cols-2 gap-4">
            <input className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" />
            <input className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
            <textarea className="sm:col-span-2 w-full rounded-md border border-gray-300 px-4 py-2 text-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your event" />
            <button className="sm:col-span-2 inline-flex items-center rounded-md bg-blue-600 text-white text-sm font-medium px-5 py-2.5 shadow hover:bg-blue-700 transition-colors">Request Demo</button>
          </form>
        </div>
      </div>
    </section>
  )
}
