import { useEffect, useRef, useState } from 'react'
import './App.css'

interface AppLink {
  name: string
  tagline: string
  aiFeature: string
  href: string
  image: string
  accent: string
}

const APPS: AppLink[] = [
  {
    name: 'Voca',
    tagline: 'A playful vocabulary game. Guess words, drag them into stories, speak them out loud.',
    aiFeature: 'AI writes the clues, dialogues, and stories, and doubles as a voice tutor for speaking practice.',
    href: 'https://v.trile.site',
    image: '/art/vocalearn.jpg',
    accent: 'var(--coral)',
  },
  {
    name: 'Dreamer',
    tagline: 'Build habits and track your day, one checklist at a time.',
    aiFeature: 'Type what you want to build and AI turns it into a full checklist with fields, schedule, and notes.',
    href: 'https://d.trile.site',
    image: '/art/dreamer.jpg',
    accent: 'var(--mint)',
  },
  {
    name: 'Interview Prep',
    tagline: '327 frontend interview questions with a built-in code runner and study plan.',
    aiFeature: 'Practice with an AI interviewer that asks follow-ups, probes edge cases, and gives real feedback.',
    href: 'https://i.trile.site',
    image: '/art/interview-prep.jpg',
    accent: 'var(--cobalt)',
  },
]

function SparklesIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
      <path d="M20 2v4" />
      <path d="M22 4h-4" />
      <circle cx="4" cy="20" r="2" />
    </svg>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let raf2 = 0
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setIsLoaded(true))
    })
    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [])

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const handleMove = (e: MouseEvent) => {
      el.style.setProperty('--pointer-x', `${e.clientX}px`)
      el.style.setProperty('--pointer-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <main
      ref={rootRef}
      className={`one-page-portfolio${isLoaded ? ' is-loaded' : ''}`}
    >
      <div className="intro-curtain" aria-hidden="true">
        <span>TRI / TOM</span>
      </div>
      <div className="pointer-glow" aria-hidden="true" />

      <header className="one-page-header">
        <a className="wordmark" href="/" aria-label="Tri home">
          T<span>&bull;</span>T
        </a>
        <div className="availability">
          <i /> Available for new ideas
        </div>
        <span className="edition">PORTFOLIO / 2026</span>
      </header>

      <section className="one-page-intro" aria-labelledby="hero-title">
        <p className="hero-kicker">
          <SparklesIcon /> Hello, I&apos;m
        </p>
        <h1 id="hero-title">
          Tri <em>(Tom)</em>
        </h1>
        <p className="intro-copy">Here&apos;s what I&apos;ve been building.</p>
      </section>

      <section className="project-grid" aria-label="Selected projects">
        {APPS.map((app, i) => (
          <a
            key={app.name}
            className="project-card"
            href={app.href}
            style={{ '--project-accent': app.accent } as React.CSSProperties}
          >
            <div className="card-art">
              <img
                src={app.image}
                alt={`Screenshot of the ${app.name} app`}
                loading="eager"
                width={1328}
                height={896}
              />
              <div className="image-sheen" aria-hidden="true" />
              <span className="card-number">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="card-copy">
              <h2>{app.name}</h2>
              <p>{app.tagline}</p>
              <p className="card-ai">
                <SparklesIcon /> {app.aiFeature}
              </p>
              <ArrowUpRightIcon className="card-arrow" />
            </div>
          </a>
        ))}
      </section>

      <footer className="one-page-footer">
        <span>Frontend &middot; Product &middot; Play</span>
        <span>Three ideas, always evolving.</span>
      </footer>
    </main>
  )
}

export default App
