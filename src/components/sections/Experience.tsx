'use client';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experience = [
  {
    position: 'Independent Developer',
    company: 'BITROOT',
    period: '2024 – Present',
    type: 'Self-Employed',
    built: [
      'Keyat — full-stack real estate marketplace, deployed and live',
      'PolicyBridge — insurance workflow automation SaaS',
      'Multi-tenant database architecture with complete data isolation',
      'Production deployments on Vercel with monitoring and CI/CD',
    ],
    highlights: [
      'First comprehensive property search platform in the Botswana market',
      'Optimised database query performance for fast property search',
      'Implemented secure auth, role-based access, and audit logging',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--cream)' }}>
      <div className="rule-thin" />

      <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-28 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <div className="section-label mb-4">
            <span style={{ width: 20, height: 1, background: 'var(--terra)', display: 'inline-block' }} />
            Experience
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-6">
              <h2
                className="font-display font-bold leading-tight"
                style={{ color: 'var(--ink)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
              >
                From <em style={{ color: 'var(--terra)' }}>student</em><br />to shipping
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="font-body text-base" style={{ color: 'var(--ink-muted)' }}>
                Self-taught developer who builds working software and ships it.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-2 bottom-2 w-px"
              style={{ background: 'linear-gradient(to bottom, var(--terra), rgba(192,87,46,0.08))' }}
            />

            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14"
              >
                {/* Dot */}
                <div className="absolute left-[14px] top-1.5 z-10">
                  <div
                    className="w-[11px] h-[11px] rounded-full border-2"
                    style={{ background: 'var(--terra)', borderColor: 'var(--cream)' }}
                  />
                </div>

                <div className="card p-7">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-3">
                    <div>
                      <h3
                        className="font-display font-bold text-xl mb-0.5"
                        style={{ color: 'var(--ink)' }}
                      >
                        {exp.position}
                      </h3>
                      <p className="font-body font-semibold text-sm mb-2" style={{ color: 'var(--terra)' }}>
                        {exp.company}
                      </p>
                      <span
                        className="tag"
                        style={{ fontSize: '0.7rem' }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 font-body text-sm flex-shrink-0" style={{ color: 'var(--ink-faint)' }}>
                      <Calendar className="w-3.5 h-3.5" style={{ color: 'var(--terra)' }} />
                      {exp.period}
                    </div>
                  </div>

                  {/* What I built */}
                  <div className="mb-5">
                    <p className="section-label mb-3">What I Built</p>
                    <ul className="space-y-2">
                      {exp.built.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--terra)' }} />
                          <span className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div>
                    <p className="section-label mb-3">Highlights</p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((a, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--gold)' }} />
                          <span className="font-body text-xs leading-relaxed" style={{ color: 'var(--ink-faint)' }}>{a}</span>
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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-8 max-w-3xl card-dark p-7"
        >
          <p className="font-display font-semibold text-lg mb-2" style={{ color: 'var(--cream)' }}>
            Looking for the next challenge
          </p>
          <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(247,243,236,0.6)' }}>
            Started building during university with React Native prototypes. After graduating in 2024, rebuilt both platforms from scratch with a production-grade stack and shipped them. Now looking to bring that energy to a team.
          </p>
        </motion.div>
      </div>
      <div className="rule-thin" />
    </section>
  );
}