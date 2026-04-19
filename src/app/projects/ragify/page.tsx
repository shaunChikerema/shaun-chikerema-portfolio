'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from 'lucide-react';

/* ── Palette ── */
const G       = '#3ECF8E';
const G_DARK  = '#1a7a52';
const G_DIM   = 'rgba(62,207,142,0.12)';
const G_BORD  = 'rgba(62,207,142,0.25)';
const INK     = '#0f172a';
const INK_MID = '#475569';
const INK_MUT = '#94a3b8';
const MONO: React.CSSProperties = { fontFamily: "'IBM Plex Mono', 'Fira Code', monospace" };
const SANS: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif" };
const SERIF: React.CSSProperties = { fontFamily: "'Playfair Display', Georgia, serif" };

/* ── Sub-components ── */
function Tag({ children, accent = G }: { children: React.ReactNode; accent?: string }) {
  return (
    <span style={{
      display: 'inline-block', padding: '3px 10px', borderRadius: 6,
      fontSize: '0.68rem', fontWeight: 600, ...SANS, letterSpacing: '0.02em',
      background: `${accent}14`, border: `1px solid ${accent}30`, color: accent,
    }}>{children}</span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: G, ...MONO, letterSpacing: '-0.04em', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '0.7rem', color: INK_MUT, ...SANS, marginTop: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: G, ...SANS, fontWeight: 700, marginBottom: '1rem' }}>
      {children}
    </p>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      margin: '2rem 0', padding: '1.2rem 1.5rem',
      borderLeft: `3px solid ${G}`, background: G_DIM, borderRadius: '0 8px 8px 0',
    }}>
      <p style={{ ...SANS, fontSize: '0.9rem', color: INK, lineHeight: 1.75, margin: 0 }}>{children}</p>
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code style={{
      ...MONO, fontSize: '0.78rem', background: 'rgba(15,23,42,0.06)',
      border: '1px solid rgba(15,23,42,0.1)', borderRadius: 4,
      padding: '2px 6px', color: INK,
    }}>{children}</code>
  );
}

function DecisionCard({
  number, title, option_a, option_b, chosen, why,
}: {
  number: string; title: string; option_a: string; option_b: string; chosen: 'a' | 'b'; why: string;
}) {
  return (
    <div style={{
      background: '#f8fafc', border: '1px solid rgba(15,23,42,0.1)',
      borderRadius: 12, overflow: 'hidden',
    }}>
      <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(15,23,42,0.08)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ ...MONO, fontSize: '0.65rem', color: G, fontWeight: 700 }}>{number}</span>
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: INK, ...SANS }}>{title}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
        {(['a', 'b'] as const).map(k => {
          const isChosen = chosen === k;
          const label = k === 'a' ? option_a : option_b;
          return (
            <div key={k} style={{
              padding: '0.85rem 1.25rem',
              background: isChosen ? G_DIM : 'transparent',
              borderRight: k === 'a' ? '1px solid rgba(15,23,42,0.08)' : 'none',
              borderTop: '1px solid rgba(15,23,42,0.08)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                {isChosen && <span style={{ width: 6, height: 6, borderRadius: '50%', background: G, flexShrink: 0, display: 'inline-block' }} />}
                <span style={{ fontSize: '0.78rem', fontWeight: isChosen ? 700 : 400, color: isChosen ? G_DARK : INK_MID, ...SANS }}>{label}</span>
              </div>
              {isChosen && <span style={{ fontSize: '0.62rem', color: G, ...SANS, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>chosen</span>}
            </div>
          );
        })}
      </div>
      <div style={{ padding: '0.9rem 1.25rem', borderTop: '1px solid rgba(15,23,42,0.08)', background: 'rgba(15,23,42,0.015)' }}>
        <p style={{ fontSize: '0.8rem', color: INK_MID, ...SANS, lineHeight: 1.65, margin: 0 }}>{why}</p>
      </div>
    </div>
  );
}

function PipelineStep({
  num, label, sublabel, detail, accent = G,
}: { num: string; label: string; sublabel: string; detail: string; accent?: string }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: 3 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 8, background: `${accent}15`,
          border: `1.5px solid ${accent}40`, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.7rem', fontWeight: 700, ...MONO, color: accent,
        }}>{num}</div>
        <div style={{ width: 1.5, flex: 1, minHeight: 24, background: `${accent}25`, marginTop: 4 }} />
      </div>
      <div style={{ paddingBottom: '1.25rem' }}>
        <div style={{ fontSize: '0.95rem', fontWeight: 700, color: INK, ...SANS, marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: '0.72rem', color: accent, fontWeight: 600, ...MONO, marginBottom: 8, letterSpacing: '0.02em' }}>{sublabel}</div>
        <div style={{ fontSize: '0.82rem', color: INK_MID, ...SANS, lineHeight: 1.7 }}>{detail}</div>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function RagifyCaseStudy() {

  const handleBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ── Dark Hero ── */}
      <div style={{
        background: INK,
        position: 'relative', overflow: 'hidden',
        paddingBottom: '5rem',
      }}>
        {/* Grid texture */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        {/* Green glow */}
        <div aria-hidden style={{
          position: 'absolute', top: 0, right: 0, width: '50%', height: '100%',
          background: `radial-gradient(ellipse 60% 70% at 80% 30%, ${G}18 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        {/* Green top bar */}
        <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${G}, transparent)` }} />

        <div style={{ maxWidth: 820, margin: '0 auto', padding: '2.5rem 1.5rem 0' }}>

          {/* Back nav */}
          <motion.button
            {...fade(0)}
            onClick={handleBack}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 8, padding: '7px 14px', cursor: 'pointer',
              fontSize: '0.72rem', fontWeight: 600, color: 'rgba(246,241,234,0.6)', ...SANS,
              marginBottom: '3rem',
            }}
          >
            <ArrowLeft size={12} /> Back to work
          </motion.button>

          {/* Eyebrow */}
          <motion.p {...fade(0.08)} style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: G, ...SANS, fontWeight: 700, marginBottom: '1rem' }}>
            Case Study · AI Engineering
          </motion.p>

          {/* Title */}
          <motion.h1 {...fade(0.14)} style={{
            ...SERIF, fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', fontWeight: 700,
            color: '#F6F1EA', letterSpacing: '-0.035em', lineHeight: 0.95, marginBottom: '1.4rem',
          }}>
            Ragify
          </motion.h1>

          <motion.p {...fade(0.2)} style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: 'rgba(246,241,234,0.55)',
            ...SANS, lineHeight: 1.8, maxWidth: '56ch', marginBottom: '2rem',
          }}>
            A production-grade Retrieval-Augmented Generation pipeline built from scratch —
            no LangChain abstractions, no managed vector DB, no tutorial shortcuts.
          </motion.p>

          {/* Tags */}
          <motion.div {...fade(0.25)} style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '3rem' }}>
            {['Python', 'FastAPI', 'Gemini', 'Groq', 'pgvector', 'Supabase', 'React'].map(t => (
              <span key={t} style={{
                padding: '4px 12px', borderRadius: 6, fontSize: '0.7rem', fontWeight: 600, ...SANS,
                background: 'rgba(62,207,142,0.1)', border: '1px solid rgba(62,207,142,0.22)', color: G,
              }}>{t}</span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div {...fade(0.3)} style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gap: '1.5rem', padding: '2rem', borderRadius: 12,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <Stat value="768" label="Embedding dims" />
            <Stat value="~800" label="Tok/s on Groq" />
            <Stat value="2k" label="Chunk size (chars)" />
            <Stat value="0.2" label="LLM temperature" />
            <Stat value="5" label="Default top-k" />
          </motion.div>

          {/* Links */}
          <motion.div {...fade(0.35)} style={{ display: 'flex', gap: 10, marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="https://ragify.vercel.app" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '10px 20px', borderRadius: 9, background: G, color: '#fff',
              fontSize: '0.76rem', fontWeight: 700, ...SANS, textDecoration: 'none',
            }}>
              Live Demo <ArrowUpRight size={13} />
            </a>
            <a href="https://ragify.vercel.app/architecture.html" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '10px 20px', borderRadius: 9, background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(246,241,234,0.75)',
              fontSize: '0.76rem', fontWeight: 600, ...SANS, textDecoration: 'none',
            }}>
              Architecture <ExternalLink size={12} />
            </a>
            <a href="https://github.com/shaunChikerema" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '10px 20px', borderRadius: 9, background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(246,241,234,0.75)',
              fontSize: '0.76rem', fontWeight: 600, ...SANS, textDecoration: 'none',
            }}>
              GitHub <Github size={13} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Body Content ── */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

        {/* 1. The Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          style={{ marginBottom: '4rem' }}
        >
          <SectionLabel>01 — The Problem</SectionLabel>
          <h2 style={{ ...SERIF, fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 700, color: INK, letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '1.2rem' }}>
            Most RAG demos are toys.
          </h2>
          <p style={{ ...SANS, fontSize: '0.95rem', color: INK_MID, lineHeight: 1.85, marginBottom: '1rem' }}>
            The typical tutorial route — LangChain <Code>RetrievalQA</Code>, Pinecone managed vectors, OpenAI embeddings — gets you a working demo in an afternoon. But it teaches you almost nothing about what's actually happening inside a retrieval pipeline, and it produces a system where every design parameter is hidden behind an abstraction.
          </p>
          <p style={{ ...SANS, fontSize: '0.95rem', color: INK_MID, lineHeight: 1.85 }}>
            I wanted to understand — and be able to explain to an interviewer — exactly how each stage works, why each decision was made, and what breaks when parameters change. That requires building it yourself.
          </p>
          <Callout>
            The goal wasn't "build a chatbot." It was: build something where I can defend every technical decision from the scraper to the prompt template.
          </Callout>
        </motion.section>

        {/* 2. Pipeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          style={{ marginBottom: '4rem' }}
        >
          <SectionLabel>02 — The Pipeline</SectionLabel>
          <h2 style={{ ...SERIF, fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 700, color: INK, letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '2rem' }}>
            Five stages, zero magic.
          </h2>

          <div style={{ background: '#f8fafc', borderRadius: 14, padding: '1.75rem', border: '1px solid rgba(15,23,42,0.08)', marginBottom: '2rem' }}>
            <PipelineStep
              num="01" label="Scrape" sublabel="BeautifulSoup · requests"
              detail="Fetch any HTML URL, strip boilerplate tags (nav, footer, script, style), extract readable text. No headless browser — if it requires JS to render, it's not a valid knowledge source for this pipeline."
            />
            <PipelineStep
              num="02" label="Chunk" sublabel="2,048 chars · 200-char overlap"
              detail="Split text at word boundaries — never mid-word. Overlap ensures that a sentence crossing a chunk boundary isn't lost. Chunk size and overlap are both configurable from the UI settings tab."
            />
            <PipelineStep
              num="03" label="Embed" sublabel="Gemini gemini-embedding-001 · 768 dims · batched 50"
              detail="Each chunk is embedded into a 768-dimensional vector. Batched in groups of 50 to stay inside API rate limits. Deduplication runs before embedding — identical chunks from re-ingesting the same URL are skipped."
            />
            <PipelineStep
              num="04" label="Store" sublabel="pgvector via Supabase · cosine similarity"
              detail="Vectors stored in a PostgreSQL table with a pgvector column. Retrieval uses a Supabase RPC call — the cosine similarity math runs inside the database, not in Python. The similarity threshold is configurable."
            />
            <PipelineStep
              num="05" label="Generate" sublabel="Llama 3.3 70B via Groq · temperature 0.2 · ~800 tok/s"
              detail="Top-k retrieved chunks are injected into a structured prompt with citation markers. Llama 3.3 70B runs on Groq's inference infrastructure — at ~800 tok/s it's fast enough that streaming felt unnecessary for the demo. Temperature 0.2 keeps answers grounded without being robotic."
              accent="#6366f1"
            />
          </div>

          <p style={{ ...SANS, fontSize: '0.85rem', color: INK_MUT, lineHeight: 1.7 }}>
            The full conversation history is passed on every query turn — multi-turn follow-ups work naturally. Inline citations are tied to source URLs, not just chunk text.
          </p>
        </motion.section>

        {/* 3. Design Decisions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          style={{ marginBottom: '4rem' }}
        >
          <SectionLabel>03 — Design Decisions</SectionLabel>
          <h2 style={{ ...SERIF, fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 700, color: INK, letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Every tradeoff, documented.
          </h2>
          <p style={{ ...SANS, fontSize: '0.9rem', color: INK_MID, lineHeight: 1.8, marginBottom: '2rem' }}>
            These are the four choices that shaped the architecture — not the ones tutorials make for you, but the ones you actually think about when building for production.
          </p>

          <div style={{ display: 'grid', gap: '1rem' }}>
            <DecisionCard
              number="D-01" title="Vector database"
              option_a="Pinecone (managed)" option_b="pgvector on Supabase" chosen="b"
              why="Pinecone is a dependency you don't control — it adds latency, cost, and a third-party failure mode. pgvector keeps vectors inside the same Postgres instance that already holds the rest of the data. Cosine similarity runs as a Supabase RPC, so the vector math never leaves the database."
            />
            <DecisionCard
              number="D-02" title="Embedding model"
              option_a="OpenAI text-embedding-3-small" option_b="Gemini gemini-embedding-001" chosen="b"
              why="Gemini's gemini-embedding-001 uses task_type parameter — RETRIEVAL_DOCUMENT at ingest time, RETRIEVAL_QUERY at query time. This asymmetric embedding is specifically designed for retrieval workloads and produces meaningfully better recall than symmetric embeddings on factual Q&A tasks."
            />
            <DecisionCard
              number="D-03" title="LLM inference"
              option_a="OpenAI GPT-4o" option_b="Llama 3.3 70B via Groq" chosen="b"
              why="Groq's LPU hardware runs Llama 3.3 70B at ~800 tok/s — comparable to GPT-3.5 in speed, closer to GPT-4 in quality, and significantly cheaper per token. For a RAG use case where the model is primarily synthesizing retrieved context rather than doing complex reasoning, 70B is more than sufficient."
            />
            <DecisionCard
              number="D-04" title="RAG framework"
              option_a="LangChain / LlamaIndex" option_b="Raw API calls in Python" chosen="b"
              why="LangChain would have hidden every interesting decision behind a .from_chain_type() call. Implementing scraping, chunking, embedding, retrieval, and generation manually means I understand what's happening at every step — and can explain it. The total implementation is ~400 lines across 3 files."
            />
          </div>
        </motion.section>

        {/* 4. Tunable Parameters */}
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          style={{ marginBottom: '4rem' }}
        >
          <SectionLabel>04 — Parameters</SectionLabel>
          <h2 style={{ ...SERIF, fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 700, color: INK, letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '1.2rem' }}>
            What you can tune, and why.
          </h2>
          <p style={{ ...SANS, fontSize: '0.9rem', color: INK_MID, lineHeight: 1.8, marginBottom: '1.5rem' }}>
            The Settings tab in the UI exposes the retrieval parameters directly. Understanding what each one does is the difference between operating a RAG system and just using one.
          </p>

          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {[
              { name: 'top_k', default: '5', range: '1–20', effect: 'How many chunks are retrieved per query. Higher = more context, higher cost, more noise. Lower = faster, potentially missing relevant context.' },
              { name: 'similarity_threshold', default: '0.3', range: '0.0–1.0', effect: 'Minimum cosine similarity score for a chunk to be included. 0.3 is permissive — good for exploratory queries. Raise to 0.6+ for high-precision factual retrieval.' },
              { name: 'chunk_size', default: '2048', range: '512–4096', effect: 'Character length of each text chunk at ingest time. Smaller chunks = more precise retrieval. Larger chunks = more context per chunk, fewer total vectors.' },
              { name: 'chunk_overlap', default: '200', range: '0–512', effect: 'Character overlap between adjacent chunks. Prevents sentences at chunk boundaries from being split across two separate retrieval units.' },
              { name: 'temperature', default: '0.2', range: '0.0–1.0', effect: 'LLM generation temperature. 0.0 = deterministic and literal. 0.2 = grounded but slightly natural. Above 0.5, the model starts adding information not in the retrieved context.' },
            ].map(p => (
              <div key={p.name} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr', gap: '1rem',
                padding: '1rem 1.25rem', background: '#f8fafc',
                border: '1px solid rgba(15,23,42,0.08)', borderRadius: 10,
                alignItems: 'start',
              }}>
                <div>
                  <div style={{ ...MONO, fontSize: '0.8rem', fontWeight: 700, color: G_DARK, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    <Tag>{p.default}</Tag>
                    <span style={{ fontSize: '0.65rem', color: INK_MUT, ...SANS, alignSelf: 'center' }}>{p.range}</span>
                  </div>
                </div>
                <p style={{ ...SANS, fontSize: '0.8rem', color: INK_MID, lineHeight: 1.65, margin: 0 }}>{p.effect}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5. What I'd Do Next */}
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          style={{ marginBottom: '4rem' }}
        >
          <SectionLabel>05 — What's Next</SectionLabel>
          <h2 style={{ ...SERIF, fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 700, color: INK, letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '1.2rem' }}>
            Known gaps and next moves.
          </h2>
          <p style={{ ...SANS, fontSize: '0.9rem', color: INK_MID, lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Production-readiness isn't a checkbox — it's a continuous process. Here's what I'd build next with more time.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              { title: 'Streaming responses', body: 'Add stream=True on the Groq client and SSE on FastAPI. ~30 lines. Makes the demo feel dramatically faster to users — senior engineers notice this immediately.' },
              { title: 'Hybrid retrieval', body: 'Combine pgvector cosine similarity with BM25 keyword search (full-text search in Postgres). Hybrid retrieval outperforms pure vector search on precise factual queries.' },
              { title: 'Re-ranking', body: 'Add a cross-encoder re-ranker (Cohere or a local model) after initial vector retrieval. Bi-encoder retrieval is fast but approximate — re-ranking on top-20, returning top-5, improves precision.' },
              { title: 'Evaluation harness', body: 'Build a test suite using RAGAS metrics — faithfulness, answer relevancy, context precision. Right now quality is assessed manually; a proper eval loop would make parameter tuning data-driven.' },
            ].map(item => (
              <div key={item.title} style={{
                padding: '1.25rem', background: '#f8fafc',
                border: '1px solid rgba(15,23,42,0.08)', borderRadius: 12,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: 2, background: G, flexShrink: 0 }} />
                  <h4 style={{ ...SANS, fontSize: '0.88rem', fontWeight: 700, color: INK, margin: 0 }}>{item.title}</h4>
                </div>
                <p style={{ ...SANS, fontSize: '0.8rem', color: INK_MID, lineHeight: 1.65, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 6. Takeaways */}
        <motion.section
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          style={{ marginBottom: '4rem' }}
        >
          <SectionLabel>06 — Takeaways</SectionLabel>
          <h2 style={{ ...SERIF, fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 700, color: INK, letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '1.2rem' }}>
            What this project actually taught me.
          </h2>

          <div style={{
            background: INK, borderRadius: 14, padding: '2rem 2.25rem',
            position: 'relative', overflow: 'hidden',
          }}>
            <div aria-hidden style={{
              position: 'absolute', inset: 0, opacity: 0.035, pointerEvents: 'none',
              backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,1) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,1) 25%, transparent 25%), linear-gradient(315deg, rgba(255,255,255,1) 25%, transparent 25%), linear-gradient(45deg, rgba(255,255,255,1) 25%, transparent 25%)',
              backgroundSize: '24px 24px',
              backgroundPosition: '0 0, 12px 0, 12px -12px, 0 12px',
            }} />
            <div style={{ display: 'grid', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
              {[
                { label: 'Chunking strategy matters more than model choice', body: 'Poor chunking produces poor retrieval regardless of how good your embedding model is. Getting the chunk boundaries right — word-aligned, with overlap — improved answer quality more than switching models did.' },
                { label: 'Vector math belongs in the database', body: 'Running cosine similarity in Python on the application server means you load all vectors into memory first. Pushing it into Postgres as an RPC is architecturally correct and dramatically more scalable.' },
                { label: 'Temperature is a grounding dial, not a creativity dial', body: '0.2 is the right temperature for RAG — the model should mostly synthesize retrieved context, not hallucinate. Above 0.4 the model starts generating plausible-sounding information that isn\'t in the retrieved chunks.' },
                { label: 'Framework abstractions hide the interesting problems', body: 'Every difficulty I ran into — overlap edge cases, API rate limiting on batch embedding, prompt injection via malicious URLs — would have been silently handled by LangChain. Building from scratch means understanding those problems firsthand.' },
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ ...MONO, fontSize: '0.6rem', color: G, fontWeight: 700, paddingTop: 4, flexShrink: 0 }}>0{i + 1}</span>
                  <div>
                    <div style={{ ...SANS, fontSize: '0.88rem', fontWeight: 700, color: '#F6F1EA', marginBottom: 4 }}>{t.label}</div>
                    <div style={{ ...SANS, fontSize: '0.8rem', color: 'rgba(246,241,234,0.55)', lineHeight: 1.7 }}>{t.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '1rem',
            padding: '1.5rem 2rem', borderRadius: 12,
            background: G_DIM, border: `1px solid ${G_BORD}`,
          }}
        >
          <div>
            <div style={{ ...SANS, fontSize: '0.88rem', fontWeight: 700, color: INK, marginBottom: 3 }}>Want to talk through the architecture?</div>
            <div style={{ ...SANS, fontSize: '0.8rem', color: INK_MID }}>I can walk through any part of the pipeline in detail.</div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="https://ragify.vercel.app" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '9px 18px', borderRadius: 8, background: G, color: '#fff',
              fontSize: '0.75rem', fontWeight: 700, ...SANS, textDecoration: 'none',
            }}>
              Live Demo <ArrowUpRight size={12} />
            </a>
            <a href="mailto:shaunchikerema28@gmail.com?subject=Ragify architecture question" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '9px 18px', borderRadius: 8, background: 'transparent',
              border: `1px solid ${G_BORD}`, color: G_DARK,
              fontSize: '0.75rem', fontWeight: 600, ...SANS, textDecoration: 'none',
            }}>
              Get in touch
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}