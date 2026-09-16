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
    accent: '#1b1246',
  },
  {
    name: 'Dreamer',
    tagline: 'Build habits and track your day, one checklist at a time.',
    href: 'https://d.trile.site',
    accent: '#0b7dc2',
  },
  {
    name: 'Interview Prep',
    tagline: 'Frontend interview practice with English speaking practice.',
    href: 'https://i.trile.site',
    accent: '#0e0e14',
  },
]

function App() {
  return (
    <div className="container">
      <h1>Hi There, I'm Tom</h1>
      <p className="subtitle">Here's what I've been building.</p>
      <div className="cards">
        {APPS.map((app) => (
          <a
            key={app.name}
            className="card"
            href={app.href}
            style={{ '--accent': app.accent } as React.CSSProperties}
          >
            <span className="card-name">{app.name}</span>
            <span className="card-tagline">{app.tagline}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default App
