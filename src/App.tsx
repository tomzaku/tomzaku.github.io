import './App.css'

interface AppLink {
  name: string
  tagline: string
  href: string
  accent: string
}

const APPS: AppLink[] = [
  {
    name: 'Voca',
    tagline: 'Learn vocabulary through fun games.',
    href: 'https://v.trile.site',
    accent: '#7c5cff',
  },
  {
    name: 'Dreamer',
    tagline: 'Build habits and track your day, one checklist at a time.',
    href: 'https://d.trile.site',
    accent: '#22c1dc',
  },
  {
    name: 'Interview Prep',
    tagline: 'Frontend interview practice with English speaking practice.',
    href: 'https://i.trile.site',
    accent: '#ff6b81',
  },
]

const HEADLINE = "Hi There, I'm Tri (Tom)"

interface Particle {
  left: number
  size: number
  delay: number
  duration: number
}

const PARTICLES: Particle[] = [
  { left: 6, size: 3, delay: 0, duration: 16 },
  { left: 16, size: 2, delay: 3, duration: 20 },
  { left: 27, size: 4, delay: 6, duration: 18 },
  { left: 38, size: 2, delay: 1, duration: 22 },
  { left: 49, size: 3, delay: 8, duration: 17 },
  { left: 60, size: 2, delay: 4, duration: 21 },
  { left: 70, size: 4, delay: 10, duration: 19 },
  { left: 80, size: 2, delay: 2, duration: 23 },
  { left: 90, size: 3, delay: 7, duration: 18 },
  { left: 12, size: 2, delay: 12, duration: 20 },
  { left: 55, size: 2, delay: 14, duration: 24 },
  { left: 85, size: 3, delay: 9, duration: 16 },
]

function App() {
  return (
    <>
      <div className="ant-wrapper" aria-hidden="true">
        <svg className="ant" viewBox="0 0 100 50" width="34" height="17">
          <g className="ant-bob">
            <ellipse className="ant-body-part" cx="30" cy="25" rx="16" ry="10" />
            <circle className="ant-body-part" cx="52" cy="22" r="9" />
            <circle className="ant-body-part" cx="66" cy="19" r="7" />
            <g className="ant-leg ant-leg-a" style={{ transformOrigin: '34px 28px' }}>
              <polyline points="34,28 28,38 22,44" />
            </g>
            <g className="ant-leg ant-leg-b" style={{ transformOrigin: '50px 26px' }}>
              <polyline points="50,26 48,38 46,45" />
            </g>
            <g className="ant-leg ant-leg-a" style={{ transformOrigin: '62px 26px' }}>
              <polyline points="62,26 68,37 74,44" />
            </g>
            <g className="ant-antennae" style={{ transformOrigin: '66px 16px' }}>
              <line x1="66" y1="16" x2="76" y2="4" />
              <line x1="66" y1="16" x2="72" y2="2" />
            </g>
          </g>
        </svg>
      </div>
      <div className="container">
      <div className="particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={
              {
                '--left': `${p.left}%`,
                '--size': `${p.size}px`,
                '--delay': `${p.delay}s`,
                '--duration': `${p.duration}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <h1 className="headline">
        {HEADLINE.split('').map((char, i) => (
          <span
            key={i}
            className="headline-char"
            style={{ '--i': i } as React.CSSProperties}
          >
            {char === ' ' ? ' ' : char}
          </span>
        ))}
      </h1>
      <p className="subtitle">Here&apos;s what I&apos;ve been building.</p>

      <div className="cards">
        {APPS.map((app, i) => (
          <a
            key={app.name}
            className="card"
            href={app.href}
            style={
              {
                '--accent': app.accent,
                '--i': i,
              } as React.CSSProperties
            }
          >
            <span className="card-glow" />
            <span className="card-name">{app.name}</span>
            <span className="card-tagline">{app.tagline}</span>
          </a>
        ))}
      </div>
      </div>
    </>
  )
}

export default App
