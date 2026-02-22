'use client';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Experience() {
  const experience = [
    {
      position: "Independent Developer",
      company: "BITROOT",
      period: "2024 – Present",
      type: "Self-Employed",
      impact: [
        "Built Keyat (real estate platform) — deployed and functional",
        "Built PolicyBridge (insurance automation) for workflow management",
        "Architected multi-tenant database structure for both platforms",
        "Deployed production applications on Vercel with monitoring"
      ],
      achievements: [
        "First comprehensive real estate platform project in Botswana",
        "Optimized database queries for fast search performance",
        "Implemented secure authentication and role-based access"
      ]
    }
  ];

  return (
    <section id="experience" className="relative overflow-hidden" style={{ background: 'var(--cream)' }}>
      <div className="rule-ornate" />

      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="section-label mb-5">
            <span className="w-4 h-px inline-block" style={{ background: 'var(--terra)' }} />
            Journey
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-4" style={{ color: 'var(--ink)' }}>
            From <em style={{ color: 'var(--terra)' }}>Learning</em><br />to Building
          </h2>
          <p className="font-body text-base" style={{ color: 'var(--ink-muted)' }}>
            Self-taught developer who ships working software
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, var(--terra), rgba(196,98,58,0.1))' }}
            />

            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute left-4 top-1.5 z-10">
                  <div className="w-4 h-4 rounded-full border-4" style={{ background: 'var(--terra)', borderColor: 'var(--cream)' }} />
                </div>

                {/* Card */}
                <div className="p-8 rounded-sm" style={{ background: 'var(--cream-dark)', border: '1px solid rgba(26,23,20,0.1)' }}>
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="font-display text-2xl font-bold mb-1" style={{ color: 'var(--ink)' }}>{exp.position}</h3>
                      <p className="font-body font-medium mb-2" style={{ color: 'var(--terra)' }}>{exp.company}</p>
                      <span
                        className="inline-block px-3 py-0.5 rounded-sm text-xs font-body font-medium"
                        style={{ background: 'var(--cream)', color: 'var(--ink-muted)', border: '1px solid rgba(26,23,20,0.1)' }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-3 md:mt-0 font-body text-sm" style={{ color: 'var(--ink-faint)' }}>
                      <Calendar className="w-3.5 h-3.5" style={{ color: 'var(--terra)' }} />
                      {exp.period}
                    </div>
                  </div>

                  {/* What I Built */}
                  <div className="mb-6">
                    <div className="section-label mb-4">What I Built</div>
                    <ul className="space-y-2.5">
                      {exp.impact.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--terra)' }} />
                          <span className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div>
                    <div className="section-label mb-4">Highlights</div>
                    <ul className="space-y-2">
                      {exp.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
                          <span className="font-body text-sm" style={{ color: 'var(--ink-faint)' }}>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-3xl p-8 rounded-sm"
          style={{ background: 'var(--terra)', color: 'var(--cream)' }}
        >
          <h3 className="font-display text-xl font-bold mb-3">Building in Public</h3>
          <p className="font-body text-sm leading-relaxed" style={{ opacity: 0.85 }}>
            Started learning during university with React Native prototypes. After graduating in 2024, rebuilt both platforms from scratch in Next.js and deployed them to production. Now looking for opportunities to build with a team.
          </p>
        </motion.div>
      </div>
      <div className="rule-ornate" />
    </section>
  );
}