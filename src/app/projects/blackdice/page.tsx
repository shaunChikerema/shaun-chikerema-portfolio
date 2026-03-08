'use client';
import {
  ArrowLeft, Download, Music2, Smartphone, Folder, Radio,
  ListMusic, Shuffle, Cpu, Battery, HardDrive, Layers
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ACCENT       = '#e63946';
const ACCENT_PALE  = 'rgba(230,57,70,0.08)';
const ACCENT_BORDER = 'rgba(230,57,70,0.2)';

const APK_URL = 'https://expo.dev/artifacts/eas/eca90fc4-8707-470e-b804-4ae59e23edb1.apk';

const project = {
  title: 'BlackDice',
  version: '1.0.0',
  built: 'Mar 8, 2026',
  sdk: 'Expo SDK 54',
  techStack: {
    Core: ['React Native 0.81', 'TypeScript', 'Expo SDK 54'],
    Audio: ['expo-av', 'expo-media-library', 'Background Audio'],
    Navigation: ['expo-router', 'React Navigation'],
    Storage: ['AsyncStorage', 'expo-linear-gradient'],
  },
};

export default function BlackDicePage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50"
        style={{
          background: 'rgba(245,240,232,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(26,23,20,0.1)',
        }}
      >
        <div className="container mx-auto px-6 lg:px-12 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="group flex items-center gap-2 font-body text-sm font-medium transition-colors"
              style={{ color: 'var(--ink-muted)' }}
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            <a
              href={APK_URL}
              download
              className="group flex items-center gap-2 px-4 py-2 rounded-sm font-body text-sm font-medium text-white transition-all"
              style={{ background: ACCENT }}
            >
              <Download size={14} />
              Download APK
            </a>
          </div>
        </div>
      </motion.header>

      {/* Hero — dark, sharp, BlackDice red */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#0a0a0a', borderBottom: `1px solid rgba(230,57,70,0.15)` }}
      >
        {/* Red radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 55% 60% at 75% 40%, rgba(230,57,70,0.12) 0%, transparent 65%)`,
          }}
        />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-6 lg:px-12 py-28 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm font-body font-medium mb-6"
              style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: ACCENT_PALE, color: ACCENT, border: `1px solid ${ACCENT_BORDER}` }}
            >
              <Music2 size={12} />
              Android Music Player
            </div>

            <h1
              className="font-display font-bold leading-[0.93] tracking-tight mb-6"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 6.5rem)', color: '#ffffff' }}
            >
              Black<em style={{ color: ACCENT, fontStyle: 'italic' }}>Dice</em> —<br />
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.75em' }}>Local Music Player</span>
            </h1>

            <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              A native Android music player built with React Native & Expo. Scans your device audio library, plays tracks in the background, filters by folder, and delivers a full-screen now-playing experience — no streaming, no accounts, no internet. Just your music.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: Smartphone, text: 'Android Native' },
                { icon: HardDrive, text: 'Offline Only' },
                { icon: Radio,      text: 'Background Audio' },
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

            {/* Build meta */}
            <div
              className="inline-flex flex-wrap gap-6 px-6 py-4 rounded-sm"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {[
                { label: 'Version',  value: project.version },
                { label: 'SDK',      value: project.sdk },
                { label: 'Built',    value: project.built },
                { label: 'Platform', value: 'Android APK' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-body text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</p>
                  <p className="font-body text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Built */}
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
                { icon: HardDrive,  title: 'Device Library Scan',   desc: 'Scans all audio files on the device using expo-media-library, batched in pages of 200 for performance.' },
                { icon: Radio,      title: 'Background Playback',    desc: 'Audio continues playing when the screen is locked or the app is backgrounded, with full Android audio focus handling.' },
                { icon: Folder,     title: 'Folder Filtering',       desc: 'Include or exclude specific folders from the library. Preferences persist across sessions with AsyncStorage.' },
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

            {/* Full feature breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 rounded-sm"
              style={{ background: 'var(--cream-dark)', border: '1px solid rgba(26,23,20,0.1)' }}
            >
              <h3 className="font-display text-2xl font-bold mb-8" style={{ color: 'var(--ink)' }}>Player Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-display font-semibold mb-3" style={{ color: 'var(--ink)' }}>Playback Controls</h4>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-muted)' }}>
                    Full-screen now-playing screen with seek bar, track metadata, shuffle and repeat modes, and a persistent mini player visible across all screens.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Seek Bar', 'Shuffle', 'Repeat Modes', 'Mini Player'].map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-sm text-xs font-body font-medium"
                        style={{ background: 'var(--cream)', color: 'var(--ink-muted)', border: '1px solid rgba(26,23,20,0.1)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-3" style={{ color: 'var(--ink)' }}>Library Management</h4>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-muted)' }}>
                    Browse by songs, albums, and artists. Folder-level include/exclude controls. Queue management with next/previous track navigation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Songs View', 'Albums', 'Artists', 'Queue'].map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-sm text-xs font-body font-medium"
                        style={{ background: 'var(--cream)', color: 'var(--ink-muted)', border: '1px solid rgba(26,23,20,0.1)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technical Architecture */}
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
              Architecture
            </div>
            <h2 className="font-display text-4xl font-bold mb-16" style={{ color: 'var(--ink)' }}>Technical Architecture</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-sm" style={{ background: 'var(--cream)', border: '1px solid rgba(26,23,20,0.1)' }}>
                <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--ink)' }}>Key Decisions</h3>
                <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'var(--ink-muted)' }}>
                  All audio state — current track, queue, position, playback — lives in a single React Context backed by expo-av. No Redux, no external state library. The context owns the Sound object ref and polls status every second for position updates.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Cpu,       title: 'Single Context Architecture',  desc: 'LocalMusicContext owns all playback, library, and folder state' },
                    { icon: Battery,   title: 'Background Audio Mode',         desc: 'expo-av Audio.setAudioModeAsync with staysActiveInBackground' },
                    { icon: Layers,    title: 'File-based Routing',            desc: 'expo-router Stack + Tabs with MiniPlayer overlaid absolutely' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0"
                          style={{ background: ACCENT_PALE }}
                        >
                          <Icon className="w-4 h-4" style={{ color: ACCENT }} />
                        </div>
                        <div>
                          <div className="font-body font-medium text-sm mb-0.5" style={{ color: 'var(--ink)' }}>{item.title}</div>
                          <div className="font-body text-xs" style={{ color: 'var(--ink-faint)' }}>{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-8 rounded-sm" style={{ background: 'var(--cream)', border: '1px solid rgba(26,23,20,0.1)' }}>
                <h4 className="font-display font-semibold mb-4" style={{ color: 'var(--ink)' }}>Tech Stack</h4>
                <ul className="space-y-3">
                  {[
                    'React Native 0.81 with Expo SDK 54',
                    'expo-av for audio playback and background mode',
                    'expo-media-library for device audio scanning',
                    'expo-router for file-based navigation',
                    'AsyncStorage for folder preference persistence',
                    'EAS Build for Android APK distribution',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                      <span className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Challenges */}
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

            <div className="space-y-6 max-w-3xl">
              {[
                {
                  title: 'Background Audio on Android',
                  desc: 'Android aggressively kills background processes. Getting audio to survive app backgrounding required configuring expo-av with staysActiveInBackground, declaring FOREGROUND_SERVICE and FOREGROUND_SERVICE_MEDIA_PLAYBACK permissions in app.json, and setting UIBackgroundModes for iOS simultaneously.',
                },
                {
                  title: 'Large Library Scan Performance',
                  desc: 'Scanning hundreds of audio files in one call blocked the UI. Solved by batching getAssetsAsync in pages of 200 with pagination cursors, updating a scanProgress value per batch so the UI stays responsive and shows real progress.',
                },
                {
                  title: 'MiniPlayer Overlay Positioning',
                  desc: 'The persistent mini player needed to sit above the tab bar but below screen content on both iOS and Android. Solved with absolute positioning in the root tab layout, accounting for platform-specific safe area insets and tab bar height.',
                },
                {
                  title: 'Audio State Across Navigation',
                  desc: 'expo-av Sound objects are not serializable and cannot be passed through navigation params. The solution was a single Context holding the Sound ref, so any screen can call playTrack, seek, or togglePlayPause without prop drilling or re-creating the audio instance.',
                },
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

      {/* Complete Tech Stack */}
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

      {/* CTA — dark with red, matches the app's vibe */}
      <section className="relative overflow-hidden" style={{ background: '#0a0a0a' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 50% 70% at 50% 100%, rgba(230,57,70,0.15) 0%, transparent 65%)` }}
        />
        <div className="container mx-auto px-6 lg:px-12 py-24 max-w-7xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm font-body font-medium mb-6"
              style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: ACCENT_PALE, color: ACCENT, border: `1px solid ${ACCENT_BORDER}` }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: ACCENT }} />
              v{project.version} · Android APK
            </div>

            <h2 className="font-display text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Get BlackDice
            </h2>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Download the APK directly. No Play Store, no account. Sideload it on any Android device and play your local music library immediately.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={APK_URL}
                download
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-sm font-body font-semibold text-sm transition-all"
                style={{ background: ACCENT, color: '#ffffff' }}
              >
                <Download size={15} />
                Download APK · v{project.version}
              </a>
              <a
                href="https://github.com/shaunChikerema/blackdice"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-medium"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                View source on GitHub →
              </a>
            </div>

            <p className="font-body text-xs mt-6" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Android 8.0+ required · Enable "Install from unknown sources" in device settings
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}