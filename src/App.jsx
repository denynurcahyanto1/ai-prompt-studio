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
  Sliders,
  Layers,
  Wand2,
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
  Heart,
  List,
  Maximize2,
  Minimize2,
  Layout,
  Command,
  Plus
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ===== Helper Icons ===== */
function GithubIcon({ size = 18, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.93 3.59c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

/* ===== Constants ===== */
const CATEGORIES = [
  { id: 'creative', label: 'Creative Writing', icon: PenTool, desc: 'Cerita, naskah, konten kreatif' },
  { id: 'coding', label: 'Coding & Dev', icon: Code, desc: 'Refactor, API, debug, arsitektur' },
  { id: 'business', label: 'Business & Marketing', icon: Briefcase, desc: 'Copywriting, proposal, pitch' },
  { id: 'data', label: 'Data Analysis', icon: Database, desc: 'SQL, pandas, visualisasi data' },
  { id: 'learning', label: 'Learning & Tutoring', icon: GraduationCap, desc: 'Penjelasan konsep, kuis, roadmap' },
  { id: 'art', label: 'AI Art & Media', icon: Palette, desc: 'Midjourney, SDXL, Flux.1' },
  { id: 'custom', label: 'Custom Canvas', icon: Settings, desc: 'Bebas eksperimen tanpa batasan' }
]

const TEMPLATES = {
  creative: [
    { label: 'Character Arc Outline', value: 'Create a deep 3-act character arc for [character] in a [genre] setting.' },
    { label: 'Sci-Fi Worldbuilding', value: 'Draft a rich lore document about a futuristic city governed by [faction/AI].' }
  ],
  coding: [
    { label: 'React Component Spec', value: 'Design a production-ready React component for [feature] using TypeScript & Tailwind.' },
    { label: 'SQL Query Optimization', value: 'Optimize this slow SQL query: [query]. Context: PostgreSQL database.' }
  ],
  business: [
    { label: 'High-Converting Copy', value: 'Write landing page hero copy for [product] targeting [audience].' },
    { label: 'Cold Outreach Sequence', value: 'Draft a 3-part email sequence for selling [service] to B2B executives.' }
  ],
  data: [
    { label: 'Pandas Data Cleaning', value: 'Write a Python script to clean a dataset containing missing values in [column].' }
  ],
  learning: [
    { label: 'Explain Like I\'m 5', value: 'Explain quantum computing using simple everyday analogies.' }
  ],
  art: [
    { label: 'Cyberpunk Portrait', value: 'Cyberpunk street runner, neon visor, rain reflection, 8k resolution, cinematic --ar 16:9' }
  ],
  custom: [
    { label: 'Empty Canvas', value: '' }
  ]
}

const DEFAULT_NODE_STATE = {
  role: '',
  task: '',
  context: '',
  format: 'Tidak ada',
  tone: 'Tidak ada',
  constraints: ''
}

const FORMATS = ['Tidak ada', 'Markdown', 'JSON', 'Code Block', 'Bullet Points', 'Table', 'Plain Text']
const TONES = ['Tidak ada', 'Professional', 'Concise', 'Creative', 'Technical', 'Friendly', 'Persuasive']

/* ===== Main Studio ===== */
export default function App() {
  const [theme, setTheme] = useState('cyberpunk')
  const [category, setCategory] = useState('creative')
  const [nodes, setNodes] = useState(DEFAULT_NODE_STATE)
  const [copied, setCopied] = useState(false)
  const [toast, setToast] = useState('')
  const [history, setHistory] = useState([])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  const handleNodeChange = (key, val) => {
    setNodes(prev => ({ ...prev, [key]: val }))
  }

  const generatePrompt = () => {
    const parts = []
    if (nodes.role) parts.push(`**Role:** ${nodes.role}`)
    if (nodes.task) parts.push(`**Task:** ${nodes.task}`)
    if (nodes.context) parts.push(`**Context:** ${nodes.context}`)
    if (nodes.format !== 'Tidak ada') parts.push(`**Format:** ${nodes.format}`)
    if (nodes.tone !== 'Tidak ada') parts.push(`**Tone:** ${nodes.tone}`)
    if (nodes.constraints) parts.push(`**Constraints:** ${nodes.constraints}`)
    return parts.join('\n\n')
  }

  const compiledPrompt = generatePrompt()

  const handleCopy = async () => {
    if (!compiledPrompt) return
    await navigator.clipboard.writeText(compiledPrompt)
    setCopied(true)
    showToast('Prompt disalin ke clipboard!')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSave = () => {
    if (!compiledPrompt) return
    const item = { id: Date.now(), prompt: compiledPrompt, category, date: new Date().toLocaleTimeString() }
    const updated = [item, ...history]
    setHistory(updated)
    showToast('Disimpan ke riwayat studio!')
  }

  return (
    <div className="min-h-screen relative pb-20">
      <div className="ambient-glow" />
      <div className="cyber-grid fixed inset-0 pointer-events-none -z-10" />

      {/* Header Bar */}
      <nav className="sticky top-0 z-50 px-6 py-4 glass-panel rounded-none border-x-0 border-t-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="text-[#00f0ff] animate-pulse-soft" size={24} />
            <span className="font-mono text-xl font-bold tracking-wider">UNIVERSAL PROMPT STUDIO</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => setTheme('cyberpunk')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1 ${
                  theme === 'cyberpunk' ? 'bg-[#00f0ff] text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]' : 'text-slate-400'
                }`}
              >
                <Moon size={13} /> Cyberpunk
              </button>
              <button
                onClick={() => setTheme('universal')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1 ${
                  theme === 'universal' ? 'bg-blue-600 text-white font-bold shadow-md' : 'text-slate-400'
                }`}
              >
                <Sun size={13} /> Clean Light
              </button>
            </div>

            <a href="https://github.com/denynurcahyanto1/ai-prompt-studio" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <GithubIcon size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Studio Canvas */}
      <main className="max-w-7xl mx-auto px-6 pt-10">
        {/* Category Pill Bar */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
          {CATEGORIES.map(cat => {
            const Icon = cat.icon
            const active = category === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs flex items-center gap-2 transition-all whitespace-nowrap border ${
                  active
                    ? 'border-[#00f0ff] bg-[#00f0ff]/10 text-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                    : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700'
                }`}
              >
                <Icon size={14} />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Studio Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Interactive Node Controls (8 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <Layout size={14} className="text-[#00f0ff]" /> NODE-BASED BUILDER
              </span>
              <button onClick={() => setNodes(DEFAULT_NODE_STATE)} className="text-xs font-mono text-slate-400 hover:text-red-400 flex items-center gap-1">
                <RotateCcw size={12} /> Reset Nodes
              </button>
            </div>

            {/* Role Node */}
            <div className="node-card">
              <div className="node-header">
                <span className="node-title"><MessageSquare size={14} /> 01. Role & Identity</span>
              </div>
              <input
                type="text"
                placeholder="e.g. Act as a Senior AI Solutions Architect..."
                value={nodes.role}
                onChange={e => handleNodeChange('role', e.target.value)}
                className="w-full bg-slate-900/60 border border-slate-800 rounded-lg p-3 text-sm font-mono focus:outline-none focus:border-[#00f0ff]"
              />
            </div>

            {/* Task Node */}
            <div className="node-card active">
              <div className="node-header">
                <span className="node-title text-[#bfff3c]"><Target size={14} /> 02. Core Task (Wajib)</span>
              </div>
              <textarea
                rows={3}
                placeholder="e.g. Refactor the backend pipeline to handle 10k req/s using Node.js cluster..."
                value={nodes.task}
                onChange={e => handleNodeChange('task', e.target.value)}
                className="w-full bg-slate-900/60 border border-slate-800 rounded-lg p-3 text-sm font-mono focus:outline-none focus:border-[#bfff3c]"
              />
            </div>

            {/* Context Node */}
            <div className="node-card">
              <div className="node-header">
                <span className="node-title"><Globe size={14} /> 03. Context & Background</span>
              </div>
              <textarea
                rows={2}
                placeholder="e.g. Current stack uses AWS Lambda + DynamoDB. System encounters high latency..."
                value={nodes.context}
                onChange={e => handleNodeChange('context', e.target.value)}
                className="w-full bg-slate-900/60 border border-slate-800 rounded-lg p-3 text-sm font-mono focus:outline-none focus:border-[#00f0ff]"
              />
            </div>

            {/* Format & Tone Selection Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="node-card">
                <div className="node-header">
                  <span className="node-title"><FileText size={14} /> Format</span>
                </div>
                <select
                  value={nodes.format}
                  onChange={e => handleNodeChange('format', e.target.value)}
                  className="w-full bg-slate-900/60 border border-slate-800 rounded-lg p-2.5 text-xs font-mono focus:outline-none focus:border-[#00f0ff]"
                >
                  {FORMATS.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>

              <div className="node-card">
                <div className="node-header">
                  <span className="node-title"><Heart size={14} /> Tone</span>
                </div>
                <select
                  value={nodes.tone}
                  onChange={e => handleNodeChange('tone', e.target.value)}
                  className="w-full bg-slate-900/60 border border-slate-800 rounded-lg p-2.5 text-xs font-mono focus:outline-none focus:border-[#00f0ff]"
                >
                  {TONES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Right Column: Output Studio & Monitor (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <span className="font-mono text-xs text-[#bfff3c] font-bold tracking-wider flex items-center gap-1.5">
                  <Terminal size={14} /> LIVE PROMPT COMPILER
                </span>
                <span className="text-[10px] font-mono text-slate-500">{compiledPrompt.length} chars</span>
              </div>

              <textarea
                readOnly
                rows={12}
                value={compiledPrompt || '// Isikan data pada node di sebelah kiri untuk menghasilkan prompt...'}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-200 resize-none focus:outline-none focus:border-[#00f0ff]"
              />

              <div className="mt-4 flex gap-3">
                <button
                  onClick={handleCopy}
                  disabled={!compiledPrompt}
                  className="flex-1 py-3 bg-[#00f0ff] hover:bg-[#00f0ff]/80 text-slate-950 font-mono font-bold text-xs rounded-xl transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? 'Tersalin!' : 'Salin Prompt'}
                </button>
                <button
                  onClick={handleSave}
                  disabled={!compiledPrompt}
                  className="px-4 py-3 border border-slate-700 hover:border-slate-500 rounded-xl font-mono text-xs text-slate-300 transition-all disabled:opacity-50"
                >
                  <Bookmark size={14} />
                </button>
              </div>
            </div>

            {/* History List */}
            {history.length > 0 && (
              <div className="glass-panel p-5">
                <span className="font-mono text-xs text-slate-400 block mb-3">RIWAYAT STUDIO</span>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {history.map(item => (
                    <div key={item.id} className="p-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-xs font-mono flex justify-between items-center">
                      <span className="truncate max-w-[200px] text-slate-300">{item.prompt}</span>
                      <button onClick={() => setHistory(history.filter(h => h.id !== item.id))} className="text-slate-500 hover:text-red-400">
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Toast Notification */}
      {toast && <div className="toast-box">⚡ {toast}</div>}
    </div>
  )
}
