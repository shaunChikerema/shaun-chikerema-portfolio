'use client';
import { ArrowLeft, Download, Headphones, BookOpen, Bookmark, Moon, Zap, Music, Clock, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const project = {
  title: 'Yonder',
  apkUrl: '#', // update once EAS build is done
  techStack: {
    'Mobile': ['React Native', 'Expo SDK 54', 'expo-router'],
    'Audio': ['expo-av', 'Background Audio', 'AVPlaybackStatus'],
    'Storage': ['AsyncStorage', 'Persistent Progress'],
    'Build': ['EAS Build', 'Android APK', 'TypeScript'],
  },
};

const ACCENT = '#f5a623';
const ACCENT_PALE = 'rgba(245,166,35,0.1)';
const ACCENT_BORDER = 'rgba(245,166,35,0.2)';

export default function YonderPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50"
        style={{ background: 'rgba(245,240,232,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(26,23,20,0.1)' }}
      >
        <div className="container mx-auto px-6 lg:px-12 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link
              href="/#work"
              className="group flex items-center gap-2 font-body text-sm font-medium transition-colors"
              style={{ color: 'var(--ink-muted)' }}
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            <a
              href={project.apkUrl}
              className="group flex items-center gap-2 px-4 py-2 rounded-sm font-body text-sm font-medium text-white transition-all"
              style={{ background: ACCENT, color: '#000' }}
            >
              <Download size={14} />
              Download APK
            </a>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'var(--cream-dark)', borderBottom: '1px solid rgba(26,23,20,0.08)' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 60% 60% at 30% 50%, ${ACCENT_PALE} 0%, transparent 65%)` }}
        />
        <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="section-label mb-5">
              <Headphones size={13} />
              Audiobook Player · Android
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6" style={{ color: 'var(--ink)' }}>
              Yonder —{' '}
              <em style={{ color: ACCENT }}>Public Domain</em><br />
              Audiobooks
            </h1>

            <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--ink-muted)' }}>
              A React Native audiobook player that streams real public domain recordings from LibriVox and archive.org.
              Eight classic books pre-loaded — from Napoleon Hill to Marcus Aurelius — with chapter navigation,
              sleep timer, bookmarks, and background audio.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: Smartphone, text: 'Android App' },
                { icon: Zap,        text: 'Expo SDK 54' },
                { icon: BookOpen,   text: '8 Books Pre-loaded' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-sm font-body text-sm font-medium"
                    style={{ background: ACCENT_PALE, color: ACCENT, border: `1px solid ${ACCENT_BORDER}` }}
                  >
                    <Icon size={13} />
                    {item.text}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="relative" style={{ background: 'var(--cream)' }}>
        <div className="rule-ornate" />
        <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-5">
              <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
              What I Built
            </div>
            <h2 className="font-display text-4xl font-bold mb-16" style={{ color: 'var(--ink)' }}>Core Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Music,    title: 'Real Audio',    desc: 'Streams MP3s directly from archive.org — no fake data, no placeholder tracks.' },
                { icon: BookOpen, title: 'Chapter Nav',   desc: 'Full chapter list per book, auto-advance, skip forward/back 15–30 seconds.' },
                { icon: Bookmark, title: 'Bookmarks',     desc: 'Save any moment with a timestamp. Resume from exactly where you saved.' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="card-warm p-8 text-center"
                  >
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center mx-auto mb-5"
                      style={{ background: ACCENT_PALE }}
                    >
                      <Icon className="w-6 h-6" style={{ color: ACCENT }} />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--ink)' }}>{item.title}</h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-faint)' }}>{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Feature detail */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-sm"
              style={{ background: 'var(--cream-dark)', border: '1px solid rgba(26,23,20,0.1)' }}
            >
              <h3 className="font-display text-2xl font-bold mb-8" style={{ color: 'var(--ink)' }}>Full Feature Set</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-body font-semibold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--ink-muted)' }}>Player</h4>
                  <ul className="space-y-2.5">
                    {[
                      'Spinning vinyl cover with live rotation animation',
                      'Progress bar — tap anywhere to seek',
                      'Skip back 15s / forward 30s',
                      'Playback speed: 0.5× to 2.0×',
                      'Sleep timer: 5 to 60 minutes with countdown',
                      'Auto-advance to next chapter on finish',
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                        <span className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-body font-semibold text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--ink-muted)' }}>Library & UX</h4>
                  <ul className="space-y-2.5">
                    {[
                      'Discover tab with genre filter and search',
                      'My Library — bookmark books, track progress',
                      'Bookmarks tab with timestamp and resume',
                      'MiniPlayer persistent across all tabs',
                      'Reading progress saved with AsyncStorage',
                      'Gradient book covers — no images required',
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                        <span className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content catalog */}
      <section className="relative" style={{ background: 'var(--cream-dark)' }}>
        <div className="rule-ornate" />
        <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-5">
              <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
              Catalog
            </div>
            <h2 className="font-display text-4xl font-bold mb-4" style={{ color: 'var(--ink)' }}>8 Books Pre-loaded</h2>
            <p className="font-body text-sm mb-12" style={{ color: 'var(--ink-muted)' }}>
              All recordings sourced from LibriVox — 100% public domain, legally free to distribute.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'The Power of Concentration', author: 'Theron Q. Dumont',  genre: 'Self-Help',  time: '3h 42m' },
                { title: 'As a Man Thinketh',          author: 'James Allen',        genre: 'Self-Help',  time: '1h 08m' },
                { title: 'Think and Grow Rich',        author: 'Napoleon Hill',      genre: 'Self-Help',  time: '9h 20m' },
                { title: 'Meditations',                author: 'Marcus Aurelius',    genre: 'Philosophy', time: '5h 30m' },
                { title: 'The Art of War',             author: 'Sun Tzu',            genre: 'Philosophy', time: '1h 02m' },
                { title: 'Adventures of Sherlock Holmes', author: 'Arthur C. Doyle', genre: 'Mystery',    time: '8h 44m' },
                { title: 'Pride and Prejudice',        author: 'Jane Austen',        genre: 'Fiction',    time: '11h 35m' },
                { title: 'The Science of Getting Rich',author: 'Wallace D. Wattles', genre: 'Self-Help',  time: '2h 18m' },
              ].map((book, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: i * 0.06 }}
                  className="p-5 rounded-sm"
                  style={{ background: 'var(--cream)', border: '1px solid rgba(26,23,20,0.1)' }}
                >
                  <div
                    className="inline-block px-2 py-0.5 rounded-full font-body font-semibold mb-3"
                    style={{ fontSize: '0.6rem', background: ACCENT_PALE, color: ACCENT, letterSpacing: '0.08em' }}
                  >
                    {book.genre.toUpperCase()}
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-1 leading-snug" style={{ color: 'var(--ink)' }}>{book.title}</h3>
                  <p className="font-body text-xs mb-2" style={{ color: 'var(--ink-muted)' }}>{book.author}</p>
                  <div className="flex items-center gap-1">
                    <Clock size={10} style={{ color: 'var(--ink-faint)' }} />
                    <span className="font-body text-xs" style={{ color: 'var(--ink-faint)' }}>{book.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical challenges */}
      <section className="relative" style={{ background: 'var(--cream)' }}>
        <div className="rule-ornate" />
        <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-5">
              <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
              Challenges
            </div>
            <h2 className="font-display text-4xl font-bold mb-16" style={{ color: 'var(--ink)' }}>Technical Challenges</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-sm" style={{ background: 'var(--cream-dark)', border: '1px solid rgba(26,23,20,0.1)' }}>
                <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--ink)' }}>Architecture Decisions</h3>
                <div className="space-y-4">
                  {[
                    { icon: Moon,     title: 'Background Audio',    desc: 'Configured AVAudioSession on iOS and staysActiveInBackground on Android so audio keeps playing when the screen locks.' },
                    { icon: Zap,      title: 'Real-time Progress',  desc: 'Position polling every 5 seconds via AVPlaybackStatus callback, persisted to AsyncStorage so resuming works across app restarts.' },
                    { icon: Bookmark, title: 'Context Architecture', desc: 'Single AudioContext manages playback state, bookmarks, library, and progress — all screens share one source of truth.' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_PALE }}>
                          <Icon className="w-4 h-4" style={{ color: ACCENT }} />
                        </div>
                        <div>
                          <div className="font-body font-medium text-sm mb-0.5" style={{ color: 'var(--ink)' }}>{item.title}</div>
                          <div className="font-body text-xs leading-relaxed" style={{ color: 'var(--ink-faint)' }}>{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-8 rounded-sm" style={{ background: 'var(--cream-dark)', border: '1px solid rgba(26,23,20,0.1)' }}>
                <h4 className="font-display font-semibold mb-4" style={{ color: 'var(--ink)' }}>Tech Stack</h4>
                <ul className="space-y-3">
                  {[
                    'React Native 0.74 with Expo SDK 54',
                    'expo-router v3 for file-based navigation',
                    'expo-av for audio playback & rate control',
                    'expo-linear-gradient for book cover art',
                    'AsyncStorage for progress & bookmarks',
                    'EAS Build for Android APK generation',
                    'LibriVox + archive.org for audio content',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                      <span className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6 max-w-3xl">
              {[
                { title: 'No embedded artwork — generative covers', desc: 'LibriVox recordings have no album art. Instead of leaving covers blank, I built a BookCover component that generates a unique linear gradient per genre with the author initials and title rendered on top. Every book looks polished without a single image file.' },
                { title: 'Spinning record synced to playback state', desc: 'The player screen shows a rotating circular cover that spins when playing and freezes when paused. Achieved with Animated.loop + a ref that tracks current rotation to prevent jumping when resuming.' },
                { title: 'Sleep timer with second-level countdown', desc: 'Implemented a setInterval that decrements the remaining seconds, displaying a live countdown in the UI. When it hits zero it calls pauseAsync() and clears itself — no extra libraries needed.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-6 p-6 rounded-sm"
                  style={{ background: 'var(--cream-dark)', border: '1px solid rgba(26,23,20,0.08)' }}
                >
                  <div className="w-px flex-shrink-0 rounded-full self-stretch" style={{ background: ACCENT, minHeight: '100%' }} />
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--ink)' }}>{item.title}</h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Complete tech stack */}
      <section className="relative" style={{ background: 'var(--cream-dark)' }}>
        <div className="rule-ornate" />
        <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-5">
              <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
              Stack
            </div>
            <h2 className="font-display text-4xl font-bold mb-12" style={{ color: 'var(--ink)' }}>Complete Tech Stack</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(project.techStack).map(([category, technologies]) => (
                <div key={category} className="card-warm p-5">
                  <h3 className="section-label mb-3">{category}</h3>
                  <ul className="space-y-2">
                    {technologies.map((tech: string, i: number) => (
                      <li key={i} className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative" style={{ background: 'var(--ink)' }}>
        <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <div className="section-label justify-center mb-6" style={{ color: ACCENT }}>
              <span className="w-4 h-px inline-block" style={{ background: ACCENT }} />
              Android App
            </div>
            <h2 className="font-display text-4xl font-bold mb-4" style={{ color: 'var(--cream)' }}>Listen anywhere, for free</h2>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'rgba(245,240,232,0.65)' }}>
              Download the APK and install it on any Android device. Eight classic audiobooks ready to play — no account, no subscription, no ads.
            </p>
            <a
              href={project.apkUrl}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-sm font-body font-semibold text-sm transition-all"
              style={{ background: ACCENT, color: '#000' }}
            >
              <Download size={15} />
              Download Yonder APK
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}