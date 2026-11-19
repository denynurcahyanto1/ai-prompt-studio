import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Brain,
  Zap,
  Terminal,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  ChevronDown,
  X,
  ExternalLink,
  Trash2,
  History,
  Eye,
  EyeOff,
  Sliders,
  Layers,
  Wand2,
  Plus,
  Bookmark,
  RotateCcw,
  Sun,
  Moon,
  Code,
  PenTool,
  Briefcase,
  Database,
  GraduationCap,
  Palette,
  Settings,
  MessageSquare,
  Globe,
  Target,
  FileText,
  Type,
  Heart,
  List,
  ChevronUp,
  ChevronRight,
  Save,
  Loader2,
  Copy as CopyIcon
} from 'lucide-react'

/* ===== Inline SVG Icons (safe, no missing exports) ===== */
function GithubIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.93 3.59c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function SunIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}

function MoonIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function XIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

function CheckIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function ChevronDownIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function ChevronRightIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function PlusIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M5 12h14M12 5v14" />
    </svg>
  )
}

function CopyIconInline({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function TrashIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}

function HistoryIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  )
}

function EyeIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function EyeOffIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
  )
}

function ArrowRightIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function ExternalLinkIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function BookmarkIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function RotateCcwIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...props}>
      <path d="M3 7v6h6" />
      <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
    </svg>
  )
}

function LoaderIcon({ size = 18, className = '', ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className} animate-spin`} aria-hidden="true" {...props}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}

/* ===== GSAP ===== */
gsap.registerPlugin(ScrollTrigger)

/* ===== Categories & Templates Data ===== */
const CATEGORIES = [
  { id: 'creative', label: 'Creative Writing', icon: PenTool, desc: 'Cerita, puisi, naskah, ide tulisan kreatif' },
  { id: 'coding', label: 'Coding & Dev', icon: Code, desc: 'Refactor, debug, generate code, arsitektur' },
  { id: 'business', label: 'Business & Marketing', icon: Briefcase, desc: 'Copywriting, strategi, email, proposal' },
  { id: 'data', label: 'Data Analysis', icon: Database, desc: 'SQL, analisis, visualisasi, insight data' },
  { id: 'learning', label: 'Learning & Tutoring', icon: GraduationCap, desc: 'Jelaskan konsep, latihan soal, roadmap belajar' },
  { id: 'art', label: 'AI Art (Midjourney/SD/Flux)', icon: Palette, desc: 'Prompt gambar, parameter, style presets' },
  { id: 'custom', label: 'Custom / Bebas', icon: Settings, desc: 'Struktur bebas untuk kebutuhan khusus' }
]

const CATEGORY_TEMPLATES = {
  creative: [
    { label: 'Short Story Outline', value: 'Write a compelling short story about [topic]. Genre: [genre]. Tone: [tone]. Length: ~[word count] words. Include: compelling hook, character development, twist ending.' },
    { label: 'Blog Post Structure', value: 'Create a comprehensive blog post outline for: [topic]. Target audience: [audience]. Tone: [professional/friendly/authoritative]. Include: H1, H2s, key points, statistics placeholders, CTA.' },
    { label: 'Character Profile', value: 'Create a detailed character profile for a [role] in a [setting] story. Include: name, age, appearance, personality (MBTI), backstory, motivations, fears, strengths, weaknesses, speech patterns, character arc.' },
    { label: 'Poetry Prompt', value: 'Write a [form: sonnet/haiku/free verse] poem about [theme]. Mood: [melancholic/joyful/contemplative]. Imagery focus: [nature/urban/emotional]. Include specific metaphors.' }
  ],
  coding: [
    { label: 'Refactor Legacy Code', value: 'Refactor this [language] code to be more [readable/performant/maintainable]. Follow [style guide: Clean Code/SOLID/functional]. Add TypeScript types. Preserve exact functionality. Code: [paste code]' },
    { label: 'Generate REST API', value: 'Create a complete REST API endpoint for [resource] in [framework: Express/FastAPI/Next.js]. Include: validation, error handling, pagination, authentication middleware, OpenAPI docs, unit tests.' },
    { label: 'Debug & Fix', value: 'Debug this error: [error message]. Context: [framework, version, relevant code]. Provide: root cause, fixed code, explanation, prevention tips.' },
    { label: 'Code Review', value: 'Review this PR for: security vulnerabilities, performance issues, code smells, test coverage gaps, documentation needs. Suggest specific improvements with code examples.' }
  ],
  business: [
    { label: 'Cold Email Sequence', value: 'Write a 5-email cold outreach sequence for [product/service] targeting [ICP]. Tone: professional but warm. Structure: hook → value → social proof → objection handling → CTA. Each email < 150 words.' },
    { label: 'LinkedIn Thought Leadership', value: 'Write a LinkedIn post about [topic] for [target audience]. Format: hook (1 line) → story/insight (3-4 paragraphs) → key takeaway (bulleted) → question to drive engagement. Tone: authentic, authoritative, not salesy.' },
    { label: 'Executive Summary', value: 'Create an executive summary for [project/proposal]. Audience: [C-suite/investors/board]. Length: 1 page max. Sections: problem, solution, market opportunity, financial highlights, risks, ask.' },
    { label: 'Marketing Campaign Brief', value: 'Create a campaign brief for [product launch/seasonal promo]. Include: objective, target audience, key message, channels, timeline, budget allocation, success metrics, creative requirements.' }
  ],
  data: [
    { label: 'SQL Query Generator', value: 'Write a [dialect: PostgreSQL/MySQL/Snowflake/BigQuery] query to [business question]. Tables: [schema description]. Requirements: CTEs, window functions, optimized for [large dataset/real-time]. Explain logic.' },
    { label: 'Data Analysis Plan', value: 'Design an analysis plan for [business question]. Dataset: [description]. Include: hypothesis, metrics, segmentation, visualization recommendations, statistical tests, potential biases.' },
    { label: 'Python Pandas Analysis', value: 'Write Python code using pandas to [analysis task]. Data: [columns, types, size]. Requirements: clean, vectorized, documented, handles edge cases (nulls, outliers), outputs [chart/CSV/summary].' },
    { label: 'Dashboard Spec', value: 'Design a dashboard specification for [KPI/metric]. Audience: [exec/analyst/ops]. Include: layout wireframe, charts types, filters, drill-downs, refresh frequency, alerting thresholds.' }
  ],
  learning: [
    { label: 'Concept Explainer (Feynman)', value: 'Explain [complex concept] using the Feynman technique. Target: [beginner/intermediate/advanced]. Use: analogies, step-by-step breakdown, visual descriptions, common misconceptions, practice exercise with solution.' },
    { label: 'Study Plan Generator', value: 'Create a [4-week/12-week] study plan for [subject]. Current level: [beginner/some knowledge]. Goal: [certification/project mastery/job ready]. Hours/week: [X]. Include: resources, milestones, practice projects, review schedule.' },
    { label: 'Interview Prep', value: 'Generate [behavioral/technical/system design] interview questions for [role: frontend/backend/fullstack/data/ML]. Level: [junior/mid/senior]. For each: question, what interviewer looks for, sample answer structure, follow-up questions.' },
    { label: 'Language Learning', value: 'Create a language learning exercise for [target language] at [CEFR level]. Topic: [daily life/business/travel]. Include: vocab list (20 words), grammar point, dialogue, comprehension questions, speaking prompts.' }
  ],
  art: [
    { label: 'Midjourney Character', value: 'A [character description], [art style: anime/realistic/oil painting/cyberpunk], [lighting: cinematic/volumetric/neon], [camera: portrait/wide angle/macro], --ar 16:9 --v 6.0 --stylize 250 --q 2' },
    { label: 'Stable Diffusion Landscape', value: 'A [landscape type: fantasy/sci-fi/post-apocalyptic] landscape, [time: golden hour/blue hour/night], [atmosphere: fog/mist/clear], highly detailed, 8k, masterpiece, trending on artstation, negative: blurry, low quality, distorted, ugly' },
    { label: 'Flux.1 Photorealistic', value: 'A photorealistic photo of [subject], [environment], shot on [camera: Sony A7R IV/Canon R5], [lens: 85mm f/1.2], [lighting: natural/studio], raw photo, 8k uhd, film grain, hyperrealistic' },
    { label: 'DALL-E 3 Illustration', value: 'An illustration of [scene] in the style of [artist/style: Studio Ghibli/Pixar/watercolor/flat design], vibrant colors, clean composition, detailed background, whimsical atmosphere' }
  ],
  custom: [
    { label: 'Blank Structure', value: '' },
    { label: 'Role-Task-Context', value: 'Role: Act as a [expert persona]\nTask: [specific task]\nContext: [background information]\nFormat: [output format]\nTone: [tone]\nConstraints: [limitations]' },
    { label: 'Step-by-Step Guide', value: 'Create a step-by-step guide for [process]. Audience: [level]. Format: numbered steps with explanations. Include: prerequisites, common pitfalls, verification steps, troubleshooting.' }
  ]
}

/* ===== Default Structure Blocks ===== */
const DEFAULT_STRUCTURE = {
  role: '',
  task: '',
  context: '',
  format: 'Tidak ada',
  tone: 'Tidak ada',
  constraints: ''
}

const FORMAT_OPTIONS = ['Tidak ada', 'Plain Text', 'Markdown', 'JSON', 'Code Block', 'Bullet Points', 'Table', 'YAML', 'XML', 'CSV']
const TONE_OPTIONS = ['Tidak ada', 'Professional', 'Friendly', 'Concise', 'Creative', 'Authoritative', 'Conversational', 'Technical', 'Persuasive', 'Empathetic', 'Humorous']

/* ===== Helper Functions ===== */
function getStorageKey(category, theme) {
  return `universal_prompt_${theme}_${category}`
}

function loadHistory(category, theme) {
  try {
    const key = getStorageKey(category, theme)
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : []
  } catch { return [] }
}

function saveHistory(category, theme, history) {
  try {
    const key = getStorageKey(category, theme)
    localStorage.setItem(key, JSON.stringify(history.slice(0, 20)))
  } catch (e) { console.error(e) }
}

function buildFinalPrompt(structure, category, model) {
  const parts = []
  
  if (structure.role) parts.push(`**Role:** ${structure.role}`)
  if (structure.task) parts.push(`**Task:** ${structure.task}`)
  if (structure.context) parts.push(`**Context:** ${structure.context}`)
  if (structure.format && structure.format !== 'Tidak ada') parts.push(`**Format:** ${structure.format}`)
  if (structure.tone && structure.tone !== 'Tidak ada') parts.push(`**Tone:** ${structure.tone}`)
  if (structure.constraints) parts.push(`**Constraints:** ${structure.constraints}`)

  let prompt = parts.join('\n\n')

  // Model-specific formatting
  if (category === 'art') {
    const modelParams = {
      'Midjourney v6': ' --ar 16:9 --v 6.0 --stylize 250',
      'Stable Diffusion XL': '',
      'Flux.1': '',
      'DALL-E 3': ''
    }
    prompt += modelParams[model] || ''
  } else if (model === 'Midjourney v6' && structure.format === 'Code Block') {
    prompt += '\n\n--no markdown formatting'
  }

  return prompt.trim()
}

/* ===== Components ===== */

function CyberGrid({ theme }) {
  const ref = useRef(null)
  useEffect(() => {
    if (theme !== 'cyberpunk') return
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        backgroundPosition: '50px 50px',
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [theme])
  return theme === 'cyberpunk' ? (
    <div ref={ref} className="fixed inset-0 cyber-grid pointer-events-none -z-10" />
  ) : null
}

function GlitchText({ text, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = ref.current?.querySelectorAll('.glitch-char')
      if (!chars) return
      gsap.fromTo(chars,
        { opacity: 0, y: 20, rotationX: -90 },
        {
          opacity: 1, y: 0, rotationX: 0,
          duration: 0.8, stagger: 0.03, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%' }
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <h1 ref={ref} className={`glitch-text font-mono ${className}`}>
      {text.split('').map((char, i) => (
        <span key={i} className="glitch-char inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  )
}

function NeonButton({
  children,
  variant = 'primary',
  className = '',
  onClick,
  disabled,
  loading,
  ...props
}) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 95%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])
  
  const isPrimary = variant === 'primary'
  const baseClasses = `btn ${isPrimary ? 'btn-primary' : 'btn-secondary'} relative clip-corner`
  const disabledClasses = disabled || loading ? 'opacity-50 cursor-not-allowed' : ''
  
  return (
    <button
      ref={ref}
      onMouseEnter={() => !disabled && !loading && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${disabledClasses} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {loading && <LoaderIcon size={16} />}
        {children}
      </span>
    </button>
  )
}

function StatCard({ label, value, icon: Icon, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2 + delay, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 90%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [delay])
  return (
    <div ref={ref} className="stat-card">
      <Icon size={28} className="text-primary mx-auto mb-2" />
      <div className="value">{value}</div>
      <div className="label">{label}</div>
    </div>
  )
}

function FeatureCard({ title, description, icon: Icon, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2 + delay, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [delay])
  return (
    <div ref={ref} className="feature-card">
      <div className="icon"><Icon size={22} /></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function ToastContainer({ toasts, onRemove }) {
  if (toasts.length === 0) return null
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast ${toast.type}`} onClick={() => onRemove(toast.id)}>
          <span>{toast.message}</span>
          <XIcon size={16} className="text-muted hover:text-primary cursor-pointer ml-2" />
        </div>
      ))}
    </div>
  )
}

function ThemeSwitcher({ theme, onChange }) {
  return (
    <div className="theme-switcher" role="radiogroup" aria-label="Pilih tema">
      <button
        role="radio"
        aria-checked={theme === 'cyberpunk'}
        onClick={() => onChange('cyberpunk')}
        className={theme === 'cyberpunk' ? 'active' : ''}
        title="Mode Cyberpunk (Gelap, Neon)"
      >
        <MoonIcon size={14} /> Cyberpunk
      </button>
      <button
        role="radio"
        aria-checked={theme === 'universal'}
        onClick={() => onChange('universal')}
        className={theme === 'universal' ? 'active' : ''}
        title="Mode Universal (Terang, Bersih)"
      >
        <SunIcon size={14} /> Universal
      </button>
    </div>
  )
}

function CategorySelector({ selected, onChange, theme }) {
  return (
    <div className="custom-scrollbar flex gap-3 overflow-x-auto pb-2" role="tablist" aria-label="Kategori prompt">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          role="tab"
          aria-selected={selected === cat.id}
          onClick={() => onChange(cat.id)}
          className={`category-pill ${selected === cat.id ? 'active' : ''} whitespace-nowrap`}
          title={cat.desc}
        >
          <cat.icon size={16} className="mr-1.5" />
          {cat.label}
        </button>
      ))}
    </div>
  )
}

function TemplateSelector({ category, onSelect, theme }) {
  const templates = CATEGORY_TEMPLATES[category] || []
  if (templates.length === 0) return null
  
  return (
    <div className="glass p-4 rounded-xl border border-border">
      <div className="flex items-center gap-2 mb-3">
        <Wand2 size={16} className="text-primary" />
        <span className="font-mono text-sm font-bold uppercase tracking-wider text-text-muted">Template Cepat</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {templates.map((t) => (
          <button
            key={t.label}
            onClick={() => onSelect(t.value)}
            className="template-card flex-1 min-w-[140px] text-left"
            title={t.label}
          >
            <div className="title">{t.label}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

function StructureBlock({ label, icon: Icon, children, required = false }) {
  return (
    <div className="structure-block">
      <label>
        <Icon className="icon" />
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
    </div>
  )
}

function StructureBuilder({ structure, onChange, category, theme }) {
  const isArt = category === 'art'
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StructureBlock label="Peran (Role)" icon={MessageSquare} required>
        <textarea
          className="input-field textarea"
          placeholder="Contoh: Act as a Senior Frontend Developer specializing in React & GSAP..."
          value={structure.role}
          onChange={(e) => onChange('role', e.target.value)}
          rows={3}
          aria-label="Peran yang harus diambil AI"
        />
        <p className="text-xs text-text-muted mt-1">Siapa AI harus berpura-pura? (contoh: expert, teacher, critic)</p>
      </StructureBlock>

      <StructureBlock label="Tugas (Task)" icon={Target} required>
        <textarea
          className="input-field textarea"
          placeholder="Contoh: Create a reusable button component with variants, sizes, and loading states..."
          value={structure.task}
          onChange={(e) => onChange('task', e.target.value)}
          rows={3}
          aria-label="Tugas spesifik yang harus diselesaikan"
        />
        <p className="text-xs text-text-muted mt-1">Apa yang harus AI lakukan? Jelas & spesifik.</p>
      </StructureBlock>

      <StructureBlock label="Konteks (Context)" icon={Globe}>
        <textarea
          className="input-field textarea"
          placeholder="Contoh: Project uses React 18, TypeScript, Tailwind v4. Team follows atomic design..."
          value={structure.context}
          onChange={(e) => onChange('context', e.target.value)}
          rows={3}
          aria-label="Informasi latar belakang tambahan"
        />
        <p className="text-xs text-text-muted mt-1">Info latar: tech stack, audience, constraints, prior art.</p>
      </StructureBlock>

      <StructureBlock label="Format Output" icon={FileText}>
        <select
          className="input-field"
          value={structure.format}
          onChange={(e) => onChange('format', e.target.value)}
          aria-label="Format output yang diinginkan"
        >
          {FORMAT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <p className="text-xs text-text-muted mt-1">Bagaimana output harus disajikan?</p>
      </StructureBlock>

      <StructureBlock label="Tone (Suara)" icon={Heart}>
        <select
          className="input-field"
          value={structure.tone}
          onChange={(e) => onChange('tone', e.target.value)}
          aria-label="Tone of voice untuk output"
        >
          {TONE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <p className="text-xs text-text-muted mt-1">Gaya bahasa & nuansa komunikasi.</p>
      </StructureBlock>

      <StructureBlock label="Constraints (Batasan)" icon={List}>
        <textarea
          className="input-field textarea"
          placeholder={isArt 
            ? 'Contoh: --ar 16:9 --v 6.0 --stylize 250 --no text, watermark' 
            : 'Contoh: Max 500 words. Indonesian language. Avoid jargon. Include code examples.'}
          value={structure.constraints}
          onChange={(e) => onChange('constraints', e.target.value)}
          rows={3}
          aria-label="Batasan dan aturan tambahan"
        />
        <p className="text-xs text-text-muted mt-1">
          {isArt ? 'Parameter model (aspect ratio, version, negative prompts)' : 'Panjang, bahasa, hal yang dihindari, requirements khusus'}
        </p>
      </StructureBlock>
    </div>
  )
}

function PromptOutput({ finalPrompt, copied, onCopy, theme }) {
  return (
    <div className="glass-strong p-4 rounded-xl border border-border-strong">
      <div className="flex items-center justify-between mb-3">
        <label className="font-mono text-sm font-bold uppercase tracking-wider text-text-muted flex items-center gap-2">
          <Terminal size={16} className="text-primary" />
          PROMPT SIAP PAKAI
        </label>
        <NeonButton
          variant="primary"
          onClick={onCopy}
          disabled={!finalPrompt.trim()}
          className="text-sm px-4 py-2"
        >
          {copied ? (
            <>
              <CheckIcon size={14} /> Tersalin!
            </>
          ) : (
            <>
              <CopyIconInline size={14} /> Salin Prompt
            </>
          )}
        </NeonButton>
      </div>
      <textarea
        readOnly
        className="input-field textarea font-mono text-sm bg-transparent border-0 resize-none focus:ring-0"
        rows={8}
        value={finalPrompt || 'Lengkapi struktur di kiri, lalu klik "Salin Prompt"'}
        placeholder="Prompt akan muncul di sini..."
        aria-label="Prompt final yang siap disalin"
      />
      {finalPrompt && (
        <div className="mt-3 flex items-center gap-4 text-xs font-mono text-text-muted">
          <span>Karakter: {finalPrompt.length}</span>
          <span>Kata: {finalPrompt.split(/\s+/).filter(Boolean).length}</span>
          <span>Baris: {finalPrompt.split('\n').length}</span>
        </div>
      )}
    </div>
  )
}

function HistoryPanel({ category, theme, structure, onLoad, onDelete }) {
  const history = loadHistory(category, theme)
  if (history.length === 0) return null
  
  return (
    <div className="glass p-4 rounded-xl border border-border custom-scrollbar max-h-64 overflow-y-auto">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-text-muted flex items-center gap-2">
          <HistoryIcon size={14} className="text-primary" />
          Riwayat {category} ({history.length})
        </h3>
        <button
          onClick={() => {
            if (confirm('Hapus semua riwayat kategori ini?')) {
              saveHistory(category, theme, [])
              window.location.reload()
            }
          }}
          className="text-xs font-mono text-accent hover:underline"
        >
          Hapus semua
        </button>
      </div>
      <div className="space-y-2">
        {history.map((item) => (
          <div key={item.id} className="history-item flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="flex-1 min-w-0 cursor-pointer" onClick={() => onLoad(item)}>
              <div className="meta">
                <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/30 rounded text-[10px] font-mono">
                  {item.model}
                </span>
                <span>{item.date}</span>
              </div>
              <p className="content">{item.prompt}</p>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); onDelete(item.id) }}
              className="text-text-muted hover:text-accent p-1 flex-shrink-0"
              title="Hapus entry ini"
            >
              <TrashIcon size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function PromptBuilder() {
  const [theme, setTheme] = useState(() => localStorage.getItem('universal_theme') || 'universal')
  const [category, setCategory] = useState('creative')
  const [structure, setStructure] = useState(DEFAULT_STRUCTURE)
  const [copied, setCopied] = useState(false)
  const [toasts, setToasts] = useState([])
  const [model, setModel] = useState('Universal LLM')
  const [isBuilding, setIsBuilding] = useState(false)

  // Theme persistence
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('universal_theme', theme)
  }, [theme])

  // Model options per category
  const modelOptions = {
    creative: ['Universal LLM', 'GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro'],
    coding: ['Universal LLM', 'GPT-4o', 'Claude 3.5 Sonnet', 'GitHub Copilot', 'CodeLlama'],
    business: ['Universal LLM', 'GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro'],
    data: ['Universal LLM', 'GPT-4o', 'Claude 3.5 Sonnet', 'Code Interpreter'],
    learning: ['Universal LLM', 'GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro'],
    art: ['Midjourney v6', 'Stable Diffusion XL', 'Flux.1', 'DALL-E 3'],
    custom: ['Universal LLM', 'GPT-4o', 'Claude 3.5 Sonnet', 'Any Model']
  }

  const currentModels = modelOptions[category] || modelOptions.custom
  if (!currentModels.includes(model)) setModel(currentModels[0])

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000)
  }, [])

  const handleStructureChange = useCallback((field, value) => {
    setStructure(prev => ({ ...prev, [field]: value }))
  }, [])

  const handleTemplateSelect = useCallback((template) => {
    if (!template) return
    // Parse template if it has structure
    if (template.includes('Role:') || template.includes('Role:')) {
      // Try to parse structured template
      const lines = template.split('\n')
      const newStructure = { ...DEFAULT_STRUCTURE }
      lines.forEach(line => {
        const lower = line.toLowerCase()
        if (lower.startsWith('role:')) newStructure.role = line.slice(5).trim()
        else if (lower.startsWith('task:')) newStructure.task = line.slice(5).trim()
        else if (lower.startsWith('context:')) newStructure.context = line.slice(8).trim()
        else if (lower.startsWith('format:')) newStructure.format = line.slice(7).trim()
        else if (lower.startsWith('tone:')) newStructure.tone = line.slice(5).trim()
        else if (lower.startsWith('constraints:')) newStructure.constraints = line.slice(12).trim()
      })
      setStructure(newStructure)
    } else {
      setStructure(prev => ({ ...prev, task: template }))
    }
    showToast('Template dimuat ke struktur')
  }, [showToast])

  const finalPrompt = buildFinalPrompt(structure, category, model)

  const handleCopy = useCallback(async () => {
    if (!finalPrompt.trim()) return
    setIsBuilding(true)
    try {
      await navigator.clipboard.writeText(finalPrompt)
      setCopied(true)
      showToast('Prompt disalin ke clipboard!', 'success')
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      showToast('Gagal menyalin', 'warning')
    } finally {
      setIsBuilding(false)
    }
  }, [finalPrompt, showToast])

  const handleSave = useCallback(() => {
    if (!finalPrompt.trim()) { showToast('Prompt kosong', 'warning'); return }
    const history = loadHistory(category, theme)
    const newItem = {
      id: Date.now(),
      prompt: finalPrompt,
      structure: { ...structure },
      model,
      category,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    saveHistory(category, theme, [newItem, ...history])
    showToast('Disimpan ke riwayat!', 'success')
  }, [finalPrompt, structure, model, category, theme, showToast])

  const handleClear = useCallback(() => {
    setStructure(DEFAULT_STRUCTURE)
    showToast('Struktur direset', 'info')
  }, [showToast])

  const handleLoadHistory = useCallback((item) => {
    setStructure(item.structure || DEFAULT_STRUCTURE)
    if (currentModels.includes(item.model)) setModel(item.model)
    showToast('Dimuat dari riwayat', 'info')
  }, [currentModels, showToast])

  const handleDeleteHistory = useCallback((id) => {
    const history = loadHistory(category, theme)
    saveHistory(category, theme, history.filter(h => h.id !== id))
    showToast('Entry dihapus', 'info')
  }, [category, theme, showToast])

  return (
    <section id="builder" className="py-20 px-6" aria-labelledby="builder-title">
      <ToastContainer toasts={toasts} onRemove={(id) => setToasts(t => t.filter(x => x.id !== id))} />
      
      <div className="section-container">
        <div className="text-center mb-12">
          <GlitchText text="PROMPT BUILDER" id="builder-title" className="text-4xl md:text-6xl" />
          <p className="mt-4 text-text-muted max-w-2xl mx-auto font-mono text-sm">
            Pilih kategori → isi struktur universal → dapatkan prompt siap pakai untuk model AI manapun.
          </p>
        </div>

        {/* Category & Model Selector Row */}
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_200px]">
          <CategorySelector selected={category} onChange={setCategory} theme={theme} />
          <div className="glass p-3 rounded-xl border border-border">
            <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2 flex items-center gap-2">
              <Layers size={14} className="text-primary" /> Model Target
            </label>
            <select
              className="input-field text-sm"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              aria-label="Pilih model AI target"
            >
              {currentModels.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Template Quick Pick */}
        <TemplateSelector category={category} onSelect={handleTemplateSelect} theme={theme} />

        {/* Main Builder Grid */}
        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          {/* Left: Structure Builder */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass p-5 rounded-xl border border-border">
              <h3 className="font-mono text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider border-b border-border pb-2">
                <Sliders size={16} className="text-primary" />
                STRUCTURE BUILDER
              </h3>
              <StructureBuilder
                structure={structure}
                onChange={handleStructureChange}
                category={category}
                theme={theme}
              />
            </div>

            {/* Save/Clear Actions */}
            <div className="glass p-4 rounded-xl border border-border flex flex-wrap gap-3">
              <NeonButton
                variant="secondary"
                onClick={handleSave}
                disabled={!finalPrompt.trim()}
                className="flex-1 min-w-[140px] justify-center"
              >
                <Save size={14} /> Simpan ke Riwayat
              </NeonButton>
              <NeonButton
                variant="ghost"
                onClick={handleClear}
                className="flex-1 min-w-[140px] justify-center"
              >
                <RotateCcwIcon size={14} /> Reset
              </NeonButton>
            </div>
          </div>

          {/* Right: Prompt Output + History */}
          <div className="lg:col-span-1 space-y-6">
            <PromptOutput
              finalPrompt={finalPrompt}
              copied={copied}
              onCopy={handleCopy}
              theme={theme}
            />
            <HistoryPanel
              category={category}
              theme={theme}
              structure={structure}
              onLoad={handleLoadHistory}
              onDelete={handleDeleteHistory}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer({ theme }) {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sparkles size={22} className="text-primary" />
          <span className="font-mono text-lg font-bold">UNIVERSAL PROMPT STUDIO</span>
        </div>
        <p className="text-text-muted text-sm">
          Dibangun dengan React, Vite, GSAP & Tailwind v4 — untuk semua kalangan, semua kebutuhan prompt.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/denynurcahyanto1/ai-prompt-studio" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors flex items-center gap-1">
            <ExternalLinkIcon size={16} />
            <span className="font-mono text-xs">GitHub</span>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors flex items-center gap-1">
            <Globe size={16} />
            <span className="font-mono text-xs">X</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ===== Main App ===== */
export default function App() {
  const scrollRef = useRef(null)
  const [theme, setTheme] = useState(() => localStorage.getItem('universal_theme') || 'universal')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('universal_theme', theme)
  }, [theme])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title .glitch-char',
        { opacity: 0, y: 50, rotationX: -90 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1, stagger: 0.02, ease: 'power4.out' }
      )
      gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      )
      gsap.fromTo('.hero-cta',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
      )
      gsap.fromTo('.stat-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.stats-section', start: 'top 80%' } }
      )
      gsap.fromTo('.feature-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.features-section', start: 'top 80%' } }
      )
    }, scrollRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={scrollRef} className="min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <CyberGrid theme={theme} />

      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass border-b border-border">
        <div className="section-container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={24} className="text-primary" />
            <span className="font-mono text-xl font-bold">UNIVERSAL PROMPT STUDIO</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <ThemeSwitcher theme={theme} onChange={setTheme} />
            <a href="#features" className="text-text-muted hover:text-primary transition-colors text-sm font-mono">Fitur</a>
            <a href="#builder" className="text-text-muted hover:text-primary transition-colors text-sm font-mono">Builder</a>
          </div>
        </div>
      </nav>

      <header id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="section-container text-center">
          <div className="hero-title mb-6">
            <GlitchText text="UNIVERSAL PROMPT STUDIO" className="text-4xl md:text-6xl lg:text-7xl animate-fade-in-up" />
          </div>
          <p className="hero-subtitle text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            Satu alat untuk semua kebutuhan prompt: menulis, coding, marketing, data, belajar, seni AI.
            Struktur universal. Multi-model. Bebas digunakan siapa saja.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#builder">
              <NeonButton variant="primary" className="w-full sm:w-auto glow-cyan">
                <ArrowRightIcon size={18} />
                Mulai Bangun Prompt
              </NeonButton>
            </a>
            <a href="https://github.com/denynurcahyanto1/ai-prompt-studio" target="_blank" rel="noopener noreferrer">
              <NeonButton variant="secondary" className="w-full sm:w-auto">
                <GithubIcon size={18} />
                Lihat Source
              </NeonButton>
            </a>
          </div>
          <div className="mt-16 flex items-center justify-center gap-2 text-text-muted">
            <ChevronDownIcon size={24} className="animate-bounce" />
            <span className="font-mono text-xs uppercase tracking-wider">Scroll</span>
          </div>
        </div>
      </header>

      <section id="stats" className="stats-section py-16 px-6">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-anim="fade-in-up">
            <StatCard label="Kategori" value="7" icon={Layers} delay={0} />
            <StatCard label="Template Siap Pakai" value="25+" icon={FileText} delay={0.1} />
            <StatCard label="Model Didukung" value="15+" icon={Brain} delay={0.2} />
            <StatCard label="Open Source" value="100%" icon={Sparkles} delay={0.3} />
          </div>
        </div>
      </section>

      <section id="features" className="features-section py-16 px-6">
        <div className="section-container">
          <div className="text-center mb-12">
            <GlitchText text="FITUR UTAMA" className="text-3xl md:text-5xl" />
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Dirancang untuk fleksibilitas maksimal — dari anak sekolah hingga profesional senior.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="7 Kategori Prompt"
              description="Creative Writing, Coding, Business, Data, Learning, AI Art, Custom. Setiap kategori punya template & model sendiri."
              icon={Layers}
              delay={0}
            />
            <FeatureCard
              title="Universal Structure Builder"
              description="6 blok bangunan: Role, Task, Context, Format, Tone, Constraints. Berlaku untuk semua LLM, bukan hanya AI Art."
              icon={Sliders}
              delay={0.1}
            />
            <FeatureCard
              title="Multi-Model Presets"
              description="GPT-4o, Claude 3.5, Gemini, Midjourney, Flux, DALL-E, Copilot. Sintaks otomatis menyesuaikan model target."
              icon={Brain}
              delay={0.2}
            />
            <FeatureCard
              title="Theme Switcher"
              description="Mode Cyberpunk (gelap, neon) ↔ Universal (terang, bersih, kontras tinggi, label Indonesia penuh)."
              icon={Sun}
              delay={0.3}
            />
            <FeatureCard
              title="LocalStorage History"
              description="Riwayat prompt tersimpan per kategori & tema. Load, edit, hapus — tidak hilang saat reload browser."
              icon={History}
              delay={0.4}
            />
            <FeatureCard
              title="Aksesibel & Responsif"
              description="Font besar, kontras WCAG AA, keyboard navigation, screen-reader friendly. Mobile-first bento grid."
              icon={Check}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      <PromptBuilder />

      <Footer theme={theme} />
    </div>
  )
}