import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

// ── Data ─────────────────────────────────────────────────────────────────────

const SKILLS = [
  { title: 'Data Analysis', tags: ['Power BI', 'R Studio', 'SPSS', 'Google Sheets'] },
  { title: 'CRM & Automation', tags: ['HubSpot CRM', 'Salesforce', 'Aloware', 'Apollo', 'Zapier'] },
  { title: 'Marketing Tech', tags: ['Meta Ads', 'Facebook Lead Forms', 'Typeform', 'WordPress'] },
  { title: 'Programming & Tools', tags: ['Python', 'JSON', 'QuickBooks', 'MS Office'] },
]

const SERVICES = [
  { icon: '⚙️', title: 'HubSpot Setup & Optimization', desc: 'CRM buildout, workflow automation, data hygiene, pipeline setup, and landing page creation.' },
  { icon: '🔗', title: 'CRM & Platform Integration', desc: 'Connect HubSpot with Meta, WordPress, Aloware, Apollo, Salesforce, and more via Zapier or API.' },
  { icon: '📊', title: 'Dashboards & Reporting', desc: 'AI-driven dashboards, Power BI reports, KPI tracking, and executive-level data visualization.' },
  { icon: '📣', title: 'Marketing Automation', desc: 'Email campaigns, Facebook lead forms, Meta-to-CRM syncing, and ad algorithm optimization.' },
  { icon: '📈', title: 'Business Analytics', desc: 'Workforce planning, headcount forecasting, P&L reporting, and data-driven strategy support.' },
  { icon: '💼', title: 'Virtual Assistant / Tech Support', desc: 'Ongoing operational support, system troubleshooting, and performance reporting for business owners.' },
]

const EXPERIENCE = [
  {
    role: 'Tech Manager',
    company: 'Lemon Law Assist',
    date: 'Dec 2023 – Present',
    bullets: [
      'Designed and implemented optimized workflows within HubSpot CRM',
      'Engineered Google Sheets database for company records and data retrieval',
      'Created Facebook lead forms and integrated Meta data directly into CRM',
      'Built complex Zapier automations connecting two CRMs and syncing leads back to Meta',
      'Developed AI-driven executive dashboard for CEO and marketing head',
    ],
  },
  {
    role: 'HubSpot Developer',
    company: 'Adobo Ace',
    date: 'Mar 2026 – Present',
    bullets: [
      'Created and managed landing pages and forms within HubSpot',
      'Performed HubSpot workflow cleanup and data hygiene',
      'Integrated WordPress with HubSpot for seamless data sync',
      'Serves as HubSpot support for the entire team',
    ],
  },
  {
    role: 'Marketing Specialist',
    company: 'OVA Virtual',
    date: 'May 2025 – Sep 2025',
    bullets: [
      'Developed and executed marketing campaigns driving brand awareness',
      'Created and optimized HubSpot landing pages for campaigns',
      'Built Apollo workflows and lead enrichment sequences',
    ],
  },
  {
    role: 'Business Analytics Specialist',
    company: 'Manulife (MBPS)',
    date: 'Jul 2020 – Jul 2024',
    bullets: [
      'Oversaw capacity planning, headcount analysis, and forecasting',
      'Directed the Headcount Analytics team and provided strategic mentorship',
      'Designed and implemented Power BI dashboards for KPI tracking',
    ],
  },
  {
    role: 'Research Analyst',
    company: 'ePerformax',
    date: 'Oct 2018 – Jul 2020',
    bullets: [
      'Interpreted employee satisfaction survey data into visual insights',
      'Managed end-to-end survey processes using SurveyMonkey and SurveyGizmo',
    ],
  },
]

const PROJECTS = [
  { icon: '🤖', bg: '#2C6E6A', tag: 'Dashboard · AI', title: 'AI Executive Dashboard', desc: 'One-stop reporting hub for CEO and marketing head consolidating all business and campaign KPIs.' },
  { icon: '🔄', bg: '#3D5854', tag: 'Integration · Zapier', title: 'Dual-CRM Meta Integration', desc: 'Complex Zapier automation bridging HubSpot and Meta, transferring leads back to optimize ad algorithm.' },
  { icon: '🌐', bg: '#2C6E6A', tag: 'CRM · HubSpot', title: 'WordPress–HubSpot Sync', desc: 'Full integration of WordPress and HubSpot to keep contact and lead data in sync across platforms.' },
  { icon: '📊', bg: '#1A2E2C', tag: 'Analytics · Power BI', title: 'Headcount KPI Dashboards', desc: 'Power BI dashboards tracking headcount, MOVE Global KPIs, and NPS data for strategic workforce decisions.' },
]

const INITIAL_TESTIMONIALS = [
  {
    stars: 5,
    text: 'An incredible asset to our portfolio of law firms. From maintaining P&L reports to creating complex HubSpot workflows for our various firms, she has been crucial to our operational success. Her dedication and work ethic is unmatched.',
    author: 'Verified Client',
    role: 'Law Firm · Virtual Business Analyst',
    badge: '5.0 · Upwork · Committed to Quality',
  },
  {
    stars: 5,
    text: 'Awesome, very responsive, knowledgeable, and incredibly easy to work with. We love her, and I\'d recommend her to anyone who uses HubSpot.',
    author: 'Verified Client',
    role: 'Director · Non-profit Education Organization',
    badge: '5.0 · Recognized in first 3 weeks',
  },
  {
    stars: 5,
    text: 'Your loyalty and dedication do not go unnoticed. You consistently show up detail-oriented, communicate clearly, stay on top of every launch, handle HubSpot setups with precision, and implement quickly without needing to be chased.',
    author: 'Verified Client',
    role: 'CEO · Legal Tech Company',
    badge: 'Rate increase awarded for performance',
  },
]

// ── Sub-components ────────────────────────────────────────────────────────────

function StarRating({ rating, onChange }: { rating: number; onChange: (r: number) => void }) {
  const [hover, setHover] = useState(0)
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 22,
            color: n <= (hover || rating) ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
            padding: '0 1px',
            transition: 'color 0.15s',
          }}
          aria-label={`${n} star`}
        >
          ★
        </button>
      ))}
    </div>
  )
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <>
      <p style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '0.35rem' }}>{label}</p>
      <h2 className="font-serif" style={{ fontSize: 32, color: 'var(--teal)', fontWeight: 600, marginBottom: '0.4rem', lineHeight: 1.2 }}>{title}</h2>
      <div style={{ width: 44, height: 3, background: 'var(--gold)', marginBottom: '2.5rem', borderRadius: 2 }} />
    </>
  )
}

// ── Section Components ────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, background: 'var(--teal)', zIndex: 100,
      padding: '0 2rem', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', height: 56, borderBottom: '2px solid var(--gold)',
    }}>
      <span className="font-serif" style={{ color: 'var(--white)', fontSize: 20, fontWeight: 600 }}>
        J. <span style={{ color: 'var(--gold)' }}>Amo</span>
      </span>
      <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
        {['About', 'Skills', 'Services', 'Experience', 'Projects', 'Reviews', 'Contact'].map((link) => (
          <li key={link} className="hidden sm:block">
            <a
              href={`#${link.toLowerCase()}`}
              style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section id="about" style={{ background: 'var(--teal)', padding: '0 2rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 280px', alignItems: 'end', gap: '2rem' }}>
        <div style={{ padding: '4rem 0' }}>
          <span style={{
            display: 'inline-block', background: 'var(--gold)', color: 'var(--teal)',
            fontSize: 10, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase',
            padding: '4px 14px', borderRadius: 2, marginBottom: '1.25rem',
          }}>
            Open to Freelance &amp; Full-time
          </span>
          <h1 className="font-serif" style={{ fontSize: 50, fontWeight: 600, color: 'var(--white)', lineHeight: 1.1, marginBottom: '0.5rem' }}>
            Tech Manager &amp;<br />HubSpot Expert
          </h1>
          <p style={{ fontSize: 15, color: 'var(--gold-light)', fontWeight: 300, marginBottom: '1.25rem' }}>
            Business Analyst · CRM Specialist · Marketing Automation
          </p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, maxWidth: 480, marginBottom: '1.75rem' }}>
            Results-driven tech professional with 7+ years of experience turning complex data and systems into streamlined, high-performing operations. Specializing in CRM architecture, marketing automation, AI-driven dashboards, and cross-platform integrations.
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--gold)', color: 'var(--teal)', textDecoration: 'none',
              fontSize: 13, fontWeight: 500, padding: '10px 22px', borderRadius: 3, transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
          >
            Let's work together →
          </a>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
            {[
              { label: '✉', value: 'amojuliet0713@gmail.com' },
              { label: '📍', value: 'Manila, Philippines' },
            ].map(({ label, value }) => (
              <span key={value} style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: 5 }}>
                {label} <b style={{ color: 'var(--gold-light)', fontWeight: 400 }}>{value}</b>
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: '1.25rem', flexWrap: 'wrap' }}>
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/juliet-amo' },
              { label: 'Facebook', href: 'https://facebook.com/amojuliet0713' },
              { label: 'Instagram', href: 'https://instagram.com/heyitsmejuliet' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none', fontSize: 12, padding: '6px 14px',
                  borderRadius: 20, border: '0.5px solid rgba(255,255,255,0.2)', transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--gold)'
                  e.currentTarget.style.color = 'var(--teal)'
                  e.currentTarget.style.borderColor = 'var(--gold)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div style={{ alignSelf: 'end', display: 'flex', justifyContent: 'center' }} className="hidden md:flex">
          <div style={{
            width: 240, height: 300, borderRadius: '12px 12px 0 0',
            overflow: 'hidden', border: '3px solid var(--gold)', borderBottom: 'none',
            background: 'var(--teal-mid)',
          }}>
            <img
              src="/profile.jpg"
              alt="Juliet Amo"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" style={{ padding: '4rem 2rem', maxWidth: 900, margin: '0 auto' }}>
      <SectionHeader label="What I Know" title="Skills & Tools" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.1rem' }}>
        {SKILLS.map(({ title, tags }) => (
          <div key={title} style={{
            background: 'var(--white)', border: '0.5px solid #C8DFDD',
            borderRadius: 8, padding: '1.25rem 1.4rem', borderTop: '3px solid var(--teal-mid)',
          }}>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: '0.7rem' }}>{title}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {tags.map((tag) => (
                <span key={tag} style={{ background: 'var(--teal-pale)', color: 'var(--teal)', fontSize: 12, padding: '3px 10px', borderRadius: 3 }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <div style={{ background: 'var(--off-white)', padding: '4rem 2rem' }}>
      <section id="services" style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeader label="What I Offer" title="Services" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.1rem' }}>
          {SERVICES.map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{
                background: 'var(--white)', border: '0.5px solid #C8DFDD',
                borderRadius: 8, padding: '1.4rem', position: 'relative', overflow: 'hidden', transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--teal-mid)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#C8DFDD'
                e.currentTarget.style.transform = 'none'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--gold)' }} />
              <div style={{ width: 34, height: 34, background: 'var(--teal-bg)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, marginBottom: '0.8rem' }}>{icon}</div>
              <p style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--teal)', marginBottom: '0.35rem' }}>{title}</p>
              <p style={{ fontSize: 12.5, color: 'var(--gray-mid)', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function Experience() {
  return (
    <section id="experience" style={{ padding: '4rem 2rem', maxWidth: 900, margin: '0 auto' }}>
      <SectionHeader label="My Journey" title="Work Experience" />
      <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
        <div style={{ position: 'absolute', left: 0, top: 8, bottom: 0, width: 2, background: 'linear-gradient(to bottom, var(--teal-mid), #C8DFDD)' }} />
        {EXPERIENCE.map(({ role, company, date, bullets }) => (
          <div key={role + company} style={{ position: 'relative', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <div style={{ position: 'absolute', left: '-1.55rem', top: 7, width: 10, height: 10, borderRadius: '50%', background: 'var(--gold)', border: '2px solid var(--white)', boxShadow: '0 0 0 2px var(--gold)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 4, marginBottom: 2 }}>
              <p style={{ fontSize: 15, fontWeight: 500, color: 'var(--teal)' }}>{role}</p>
              <span style={{ fontSize: 11, color: 'var(--gold)', fontWeight: 500, background: 'var(--gold-pale)', padding: '2px 10px', borderRadius: 20, whiteSpace: 'nowrap' }}>{date}</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--teal-light)', marginBottom: '0.5rem' }}>{company}</p>
            <ul style={{ listStyle: 'none' }}>
              {bullets.map((b) => (
                <li key={b} style={{ fontSize: 13, color: 'var(--text-body)', padding: '2px 0 2px 14px', position: 'relative', lineHeight: 1.6 }}>
                  <span style={{ position: 'absolute', left: 0, top: 10, width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <div style={{ background: 'var(--off-white)', padding: '4rem 2rem' }}>
      <section id="projects" style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeader label="Featured Work" title="Portfolio & Projects" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.1rem' }}>
          {PROJECTS.map(({ icon, bg, tag, title, desc }) => (
            <div
              key={title}
              style={{ background: 'var(--white)', border: '0.5px solid #C8DFDD', borderRadius: 10, overflow: 'hidden', transition: 'transform 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              <div style={{ height: 110, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.07, backgroundImage: 'repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
                <span style={{ position: 'relative', zIndex: 1 }}>{icon}</span>
              </div>
              <div style={{ padding: '1.1rem' }}>
                <p style={{ fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '0.35rem' }}>{tag}</p>
                <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--teal)', marginBottom: '0.35rem' }}>{title}</p>
                <p style={{ fontSize: 12.5, color: 'var(--gray-mid)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

interface Testimonial {
  stars: number
  text: string
  author: string
  role: string
  badge: string
  isNew?: boolean
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className={t.isNew ? 'animate-fade-in-up' : ''}
      style={{
        background: 'rgba(255,255,255,0.08)', border: '0.5px solid rgba(255,255,255,0.15)',
        borderRadius: 10, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem',
      }}
    >
      <div style={{ color: 'var(--gold)', fontSize: 13, letterSpacing: 2 }}>{'★'.repeat(t.stars)}</div>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, fontStyle: 'italic', flex: 1 }}>"{t.text}"</p>
      <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.12)', paddingTop: '0.75rem' }}>
        <p style={{ fontSize: 13, color: 'var(--gold-light)', fontWeight: 500 }}>{t.author}</p>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{t.role}</p>
        <span style={{ display: 'inline-block', marginTop: 6, background: 'rgba(201,168,76,0.15)', color: 'var(--gold-light)', fontSize: 10, letterSpacing: 1, padding: '2px 8px', borderRadius: 20 }}>{t.badge}</span>
      </div>
    </div>
  )
}

function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS)
  const [rating, setRating] = useState(5)
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')
  const [successMsg, setSuccessMsg] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setSubmitting(true)
    try {
      const formData = new URLSearchParams()
      formData.append('form-name', 'testimonial')
      formData.append('stars', String(rating))
      formData.append('name', name)
      formData.append('role', role)
      formData.append('message', message)

      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      })
    } catch {
      // continue even if submission fails
    }

    const newCard: Testimonial = {
      stars: rating,
      text: message,
      author: name.trim() || 'Verified Client',
      role: role.trim() || 'Client',
      badge: '✓ Submitted via portfolio',
      isNew: true,
    }
    setTestimonials((prev) => [...prev, newCard])
    setName('')
    setRole('')
    setMessage('')
    setRating(5)
    setSubmitting(false)
    setSuccessMsg(true)
    setTimeout(() => setSuccessMsg(false), 4000)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 14px', borderRadius: 6,
    border: '0.5px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)',
    color: 'var(--white)', fontSize: 13, outline: 'none',
  }

  return (
    <div id="reviews" style={{ background: 'var(--teal)', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(232,201,122,0.85)', fontWeight: 500, marginBottom: '0.35rem' }}>What Clients Say</p>
        <h2 className="font-serif" style={{ fontSize: 32, color: 'var(--white)', fontWeight: 600, marginBottom: '0.4rem', lineHeight: 1.2 }}>Client Reviews</h2>
        <div style={{ width: 44, height: 3, background: 'var(--gold)', marginBottom: '2.5rem', borderRadius: 2 }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.1rem', marginBottom: '3rem' }}>
          {testimonials.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>

        {/* Submit testimonial form */}
        <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px dashed rgba(201,168,76,0.4)', borderRadius: 12, padding: '2rem' }}>
          <h3 className="font-serif" style={{ fontSize: 22, color: 'var(--white)', fontWeight: 600, marginBottom: '0.25rem' }}>Leave a Review</h3>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>Worked with me? Share your experience below.</p>
          <form onSubmit={handleSubmit} name="testimonial" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="testimonial" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <input
                name="name"
                placeholder="Your name (or leave blank to stay anonymous)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
              <input
                name="role"
                placeholder="Your role / company (optional)"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={inputStyle}
              />
            </div>
            <textarea
              name="message"
              placeholder="Share your experience working with me..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              style={{ ...inputStyle, resize: 'vertical', marginBottom: '0.75rem', display: 'block' }}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <StarRating rating={rating} onChange={setRating} />
              <button
                type="submit"
                disabled={submitting}
                style={{
                  background: 'var(--gold)', color: 'var(--teal)', border: 'none',
                  padding: '10px 24px', borderRadius: 4, fontSize: 13, fontWeight: 500,
                  cursor: 'pointer', transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
              >
                {submitting ? 'Submitting…' : 'Submit Review'}
              </button>
            </div>
            {successMsg && (
              <p style={{ marginTop: '1rem', fontSize: 13, color: 'var(--gold-light)' }}>
                ✓ Thank you for your review! It has been added above.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 14px', borderRadius: 6,
    border: '0.5px solid #C8DFDD', background: 'var(--white)',
    color: 'var(--text-body)', fontSize: 13, outline: 'none', marginBottom: '0.75rem',
  }

  return (
    <section id="contact" style={{ padding: '4rem 2rem', maxWidth: 900, margin: '0 auto' }}>
      <SectionHeader label="Get in Touch" title="Contact" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
        {/* Contact info */}
        <div>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--text-body)' }}>
            Open to freelance projects, full-time roles, and consulting engagements. Let's talk about how I can help your business.
          </p>
          {[
            { label: 'Email', value: 'amojuliet0713@gmail.com', href: 'mailto:amojuliet0713@gmail.com' },
            { label: 'Location', value: 'Manila, Philippines', href: null },
            { label: 'LinkedIn', value: 'linkedin.com/in/juliet-amo', href: 'https://linkedin.com/in/juliet-amo' },
            { label: 'Facebook', value: 'facebook.com/amojuliet0713', href: 'https://facebook.com/amojuliet0713' },
            { label: 'Instagram', value: '@heyitsmejuliet', href: 'https://instagram.com/heyitsmejuliet' },
          ].map(({ label, value, href }) => (
            <div key={label} style={{ display: 'flex', gap: 12, marginBottom: '0.85rem', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--teal)', minWidth: 70, paddingTop: 1 }}>{label}</span>
              {href ? (
                <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" style={{ fontSize: 13, color: 'var(--gold)', textDecoration: 'none' }}>{value}</a>
              ) : (
                <span style={{ fontSize: 13 }}>{value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Contact form */}
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" placeholder="Your name" required style={inputStyle} />
          <input name="email" type="email" placeholder="Your email" required style={inputStyle} />
          <input name="subject" placeholder="Subject" style={inputStyle} />
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows={5}
            required
            style={{ ...inputStyle, resize: 'vertical', display: 'block' }}
          />
          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            style={{
              background: 'var(--teal)', color: 'var(--white)', border: 'none',
              padding: '10px 24px', borderRadius: 4, fontSize: 13, fontWeight: 500,
              cursor: 'pointer', marginTop: '0.5rem', transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--teal-mid)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--teal)')}
          >
            {status === 'sending' ? 'Sending…' : status === 'sent' ? '✓ Message Sent!' : 'Send Message'}
          </button>
          {status === 'error' && <p style={{ color: '#c0392b', fontSize: 12, marginTop: 8 }}>Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: 'var(--text-dark)', padding: '2rem', textAlign: 'center' }}>
      <p className="font-serif" style={{ color: 'var(--gold)', fontSize: 18, fontWeight: 600, marginBottom: 4 }}>J. <span style={{ color: 'var(--white)' }}>Amo</span></p>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>Tech Manager & HubSpot Expert · Manila, Philippines</p>
    </footer>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

function Portfolio() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
