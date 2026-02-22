'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function About() {
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const target = 2;
    let step = 0;
    const steps = 30;
    const timer = setInterval(() => {
      step++;
      setProjectCount(Math.floor(target * (step / steps)));
      if (step === steps) clearInterval(timer);
    }, 1500 / 30);
    return () => clearInterval(timer);
  }, []);

  const techStack = [
    { name: "Next.js", category: "Frontend", projects: ["Keyat", "PolicyBridge"] },
    { name: "TypeScript", category: "Language", projects: ["Keyat", "PolicyBridge"] },
    { name: "PostgreSQL", category: "Database", projects: ["Keyat", "PolicyBridge"] },
    { name: "Supabase", category: "Backend", projects: ["Keyat", "PolicyBridge"] },
    { name: "React Native", category: "Mobile", projects: ["Learning"] },
    { name: "Tailwind", category: "Styling", projects: ["Keyat", "PolicyBridge"] },
    { name: "Vercel", category: "Infrastructure", projects: ["Keyat", "PolicyBridge"] },
    { name: "Firebase", category: "Services", projects: ["PolicyBridge"] }
  ];

  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const expertise = [
    {
      title: "What I build",
      items: [
        { label: "Full-stack web apps", desc: "End-to-end development" },
        { label: "Real estate platforms", desc: "Property search and listings" },
        { label: "Business automation", desc: "Workflow management tools" },
        { label: "Mobile-first design", desc: "Responsive applications" }
      ]
    },
    {
      title: "How I work",
      items: [
        { label: "Production-focused", desc: "Building for real users" },
        { label: "Self-taught approach", desc: "Learning by building" },
        { label: "Modern tech stack", desc: "Next.js, TypeScript, PostgreSQL" },
        { label: "Remote-first mindset", desc: "Global collaboration" }
      ]
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: 'var(--cream-dark)' }}>
      {/* Top rule */}
      <div className="rule-ornate" />

      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32 max-w-7xl">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20"
        >
          <div>
            <div className="section-label mb-5">
              <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
              About
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight" style={{ color: 'var(--ink)' }}>
              Building{' '}
              <em style={{ color: 'var(--terra)' }}>production</em><br />
              software that scales
            </h2>
          </div>

          {/* Live projects counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="px-8 py-6 rounded-sm text-center" style={{ background: 'var(--terra)', color: 'var(--cream)' }}>
              <div className="font-display text-5xl font-bold mb-1">{projectCount}</div>
              <div className="text-sm font-body tracking-wide opacity-80">Live Projects</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-lg leading-relaxed max-w-2xl mb-20"
          style={{ color: 'var(--ink-muted)' }}
        >
          Software engineering graduate with hands-on experience building and deploying full-stack platforms. Learning through real-world projects and production deployments.
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-20"
        >
          <div className="section-label mb-6">
            <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
            Tech Stack
          </div>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -3 }}
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
                className="relative cursor-default"
              >
                <div
                  className="px-4 py-2.5 rounded-sm transition-all duration-200"
                  style={{
                    background: hoveredTech === tech.name ? 'var(--terra)' : 'var(--cream)',
                    color: hoveredTech === tech.name ? 'var(--cream)' : 'var(--ink)',
                    border: '1px solid rgba(26,23,20,0.1)'
                  }}
                >
                  <div className="font-body text-sm font-medium">{tech.name}</div>
                  <div className="font-body text-xs mt-0.5" style={{ opacity: 0.65 }}>{tech.category}</div>
                </div>

                {hoveredTech === tech.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
                  >
                    <div className="px-3 py-2 rounded-sm whitespace-nowrap text-xs font-body shadow-lg"
                      style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
                      <div className="mb-1 font-medium" style={{ color: 'var(--terra-light)' }}>Used in:</div>
                      <div className="flex gap-1">
                        {tech.projects.map(p => (
                          <span key={p} className="px-1.5 py-0.5 rounded-sm" style={{ background: 'rgba(255,255,255,0.08)' }}>{p}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="rule-ornate mb-20" />

        {/* What I build / How I work */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {expertise.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: si * 0.1 }}
            >
              <div className="section-label mb-6">
                <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
                {section.title}
              </div>
              <div className="space-y-5">
                {section.items.map((item, ii) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: si * 0.1 + ii * 0.06 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--terra)' }} />
                    <div>
                      <div className="font-body font-medium text-sm mb-0.5" style={{ color: 'var(--ink)' }}>{item.label}</div>
                      <div className="font-body text-sm" style={{ color: 'var(--ink-faint)' }}>{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-sm"
          style={{ background: 'var(--cream)', border: '1px solid rgba(26,23,20,0.1)' }}
        >
          <div className="section-label mb-5">
            <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
            Education
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <div>
              <div className="font-display text-xl font-semibold mb-1" style={{ color: 'var(--ink)' }}>
                BSc Software Engineering with Multimedia
              </div>
              <div className="font-body text-sm" style={{ color: 'var(--ink-muted)' }}>
                Limkokwing University of Creative Technology · 2019–2024
              </div>
            </div>
            <div className="font-body text-sm" style={{ color: 'var(--ink-faint)' }}>
              Gaborone, Botswana
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div className="rule-ornate" />
    </section>
  );
}