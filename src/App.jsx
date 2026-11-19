import { useEffect, useRef, useState } from 'react'
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
  RotateCcw
} from 'lucide-react'

function GithubIcon({ size = 18, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.93 3.59c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

gsap.registerPlugin(ScrollTrigger)

function CyberGrid() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        backgroundPosition: '40px 40px',
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
  }, [])
  return <div ref={ref} className="fixed inset-0 cyber-grid pointer-events-none -z-10" />
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
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <h1 ref={ref} className={`font-mono ${className}`}>
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
  variant = 'cyan',
  className = '',
  onClick,
  ...props
}) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 90%',
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])
  const glow = variant === 'cyan' ? 'cyber-glow-cyan' : 'cyber-glow-lime'
  const borderColor = variant === 'cyan' ? 'border-cyan-400' : 'border-lime-400'
  const textColor = variant === 'cyan' ? 'text-cyan-400' : 'text-lime-400'
  const hoverBg = variant === 'cyan' ? 'hover:bg-cyan-400/10' : 'hover:bg-lime-400/10'
  return (
    <button
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={`relative clip-corner px-8 py-4 font-mono text-sm uppercase tracking-wider transition-all duration-300 ${borderColor} border-2 bg-transparent ${textColor} ${hoverBg} ${glow} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className={`absolute inset-0 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        {variant === 'cyan' ? (
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-transparent" />
        )}
      </div>
    </button>
  )
}

function StatCard({ label, value, icon: Icon, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3 + delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 90%',
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [delay])
  return (
    <div ref={ref} className="flex flex-col items-center gap-2 p-6 clip-corner border-2 border-cyan-400/30 bg-slate-950/50 backdrop-blur-sm">
      <Icon size={28} className="text-cyan-400" />
      <div className="font-mono text-3xl font-bold text-lime-400">{value}</div>
      <div className="text-xs uppercase tracking-wider text-slate-400">{label}</div>
    </div>
  )
}

function FeatureCard({ title, description, icon: Icon, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2 + delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [delay])
  return (
    <div ref={ref} className="p-6 clip-corner border-2 border-slate-700 bg-slate-950/50 backdrop-blur-sm hover:border-cyan-400/50 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 clip-corner border border-cyan-400/50 bg-cyan-400/10">
          <Icon size={20} className="text-cyan-400" />
        </div>
        <h3 className="font-mono text-lg font-bold text-white">{title}</h3>
      </div>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  )
}

function PromptBuilder() {
  const [prompt, setPrompt] = useState('A cyberpunk hacker with neon implants, holographic HUD eyes, rain-soaked streets reflection')
  const [negativePrompt, setNegativePrompt] = useState('')
  const [showNegative, setShowNegative] = useState(false)
  const [selectedModel, setSelectedModel] = useState('Midjourney v6')
  const [copied, setCopied] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const [history, setHistory] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('cyber_prompt_history')
    if (saved) {
      try {
        setHistory(JSON.parse(saved))
      } catch (e) {
        console.error(e)
      }
    }
  }, [])

  const showToast = (msg) => {
    setToastMsg(msg)
    setTimeout(() => setToastMsg(''), 3000)
  }

  const handleCopy = async () => {
    if (!prompt.trim()) return
    let textToCopy = prompt.trim()
    if (showNegative && negativePrompt.trim()) {
      if (selectedModel === 'Midjourney v6') {
        textToCopy += ` --no ${negativePrompt.trim()}`
      } else {
        textToCopy += `\n[Negative Prompt: ${negativePrompt.trim()}]`
      }
    }
    await navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    showToast('Prompt copied to clipboard!')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSave = () => {
    if (!prompt.trim()) return
    const newItem = {
      id: Date.now(),
      prompt,
      negativePrompt,
      model: selectedModel,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    const updated = [newItem, ...history.slice(0, 9)]
    setHistory(updated)
    localStorage.setItem('cyber_prompt_history', JSON.stringify(updated))
    showToast('Saved to history!')
  }

  const handleDeleteHistory = (id) => {
    const updated = history.filter(item => item.id !== id)
    setHistory(updated)
    localStorage.setItem('cyber_prompt_history', JSON.stringify(updated))
  }

  const handleClear = () => {
    setPrompt('')
    setNegativePrompt('')
    showToast('Prompt cleared')
  }

  const addModifier = (text) => {
    setPrompt((prev) => {
      const trimmed = prev.trim()
      if (!trimmed) return text
      if (trimmed.includes(text)) return prev
      if (text.startsWith('--')) {
        return `${trimmed} ${text}`
      }
      return `${trimmed}, ${text}`
    })
  }

  const models = ['Midjourney v6', 'Stable Diffusion XL', 'Flux.1', 'DALL-E 3']

  const modifierCategories = [
    {
      category: 'Art Style',
      items: ['cyberpunk', 'synthwave', 'photorealistic', 'anime style', 'octane render', 'concept art', 'surrealism', 'dark fantasy']
    },
    {
      category: 'Lighting',
      items: ['cinematic lighting', 'volumetric fog', 'neon glow', 'dramatic shadows', 'raytracing', 'bioluminescent', 'golden hour']
    },
    {
      category: 'Camera',
      items: ['wide angle', 'macro lens', 'bokeh', 'depth of field', 'drone shot', 'dramatic perspective', 'eye-level']
    },
    {
      category: 'Engine / Details',
      items: ['unreal engine 5', '8k resolution', 'hyperrealistic', 'highly detailed', 'smooth textures', 'vivid colors']
    },
    {
      category: 'Parameters',
      items: ['--ar 16:9', '--ar 9:16', '--ar 1:1', '--v 6.0', '--stylize 250', '--chaos 10']
    }
  ]

  const templates = [
    { label: 'Cyberpunk Character', value: 'A cyberpunk hacker with neon implants, holographic HUD eyes, rain-soaked streets reflection, volumetric lighting, 8k, unreal engine 5, cinematic composition' },
    { label: 'Neural Network', value: 'Abstract neural network architecture, glowing nodes and connections, data flowing through layers, cyan and lime color scheme, dark background, scientific visualization style' },
    { label: 'Futuristic Cityscape', value: 'Megalopolis at night, towering skyscrapers with holographic advertisements, flying vehicles, neon reflections on wet streets, atmospheric fog, cyberpunk aesthetic, wide angle' },
  ]

  return (
    <section id="builder" className="py-24 px-6 relative">
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 clip-corner border-2 border-lime-400 bg-slate-900/90 text-lime-400 font-mono text-sm px-6 py-3 shadow-lg cyber-glow-lime transition-all">
          ⚡ {toastMsg}
        </div>
      )}

      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <GlitchText text="PROMPT BUILDER" className="text-4xl md:text-6xl" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto font-mono text-sm">
            Manual input + Modifiers + Preset Switcher. Craft precision AI art prompts.
          </p>
        </div>

        {/* Top Control Bar: Model Selector & Quick Templates */}
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {/* Model Switcher */}
          <div className="p-4 clip-corner border-2 border-slate-800 bg-slate-950/70 backdrop-blur-md">
            <label className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-2">
              <Layers size={14} className="text-cyan-400" /> Target AI Model
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {models.map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedModel(m)}
                  className={`px-3 py-2 text-xs font-mono clip-corner border transition-all ${
                    selectedModel === m
                      ? 'border-cyan-400 bg-cyan-400/20 text-cyan-300 font-bold'
                      : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Templates */}
          <div className="p-4 clip-corner border-2 border-slate-800 bg-slate-950/70 backdrop-blur-md">
            <label className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-2">
              <Wand2 size={14} className="text-lime-400" /> Preset Starters
            </label>
            <div className="flex flex-wrap gap-2">
              {templates.map((t) => (
                <button
                  key={t.label}
                  onClick={() => setPrompt(t.value)}
                  className="px-3 py-2 text-xs font-mono clip-corner border border-slate-700 bg-slate-900/50 text-slate-300 hover:border-lime-400/50 hover:text-lime-300 transition-all"
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Editor Grid (Bento Style) */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column: Modifiers & Tags */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-5 clip-corner border-2 border-slate-800 bg-slate-950/70 backdrop-blur-md">
              <h3 className="font-mono text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider border-b border-slate-800 pb-2">
                <Sliders size={16} className="text-cyan-400" /> Click-to-Add Tags
              </h3>

              <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
                {modifierCategories.map((cat) => (
                  <div key={cat.category}>
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                      {cat.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <button
                          key={item}
                          onClick={() => addModifier(item)}
                          className="text-xs font-mono px-2.5 py-1 bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 rounded transition-all flex items-center gap-1 group"
                        >
                          <Plus size={10} className="text-slate-500 group-hover:text-cyan-400" />
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Main Textarea & Actions */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 clip-corner border-2 border-slate-800 bg-slate-950/70 backdrop-blur-md relative">
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <h3 className="font-mono text-sm font-bold text-white flex items-center gap-2 uppercase tracking-wider">
                  <Terminal size={18} className="text-lime-400" /> Prompt Workspace ({selectedModel})
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowNegative(!showNegative)}
                    className={`px-3 py-1.5 text-xs font-mono clip-corner border transition-all flex items-center gap-1 ${
                      showNegative ? 'border-pink-500 bg-pink-500/10 text-pink-400' : 'border-slate-700 bg-slate-900/50 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    {showNegative ? <EyeOff size={12} /> : <Eye size={12} />}
                    Negative
                  </button>

                  <button
                    onClick={handleClear}
                    className="px-3 py-1.5 text-xs font-mono clip-corner border border-slate-700 bg-slate-900/50 text-slate-400 hover:border-red-400 hover:text-red-400 transition-all flex items-center gap-1"
                    title="Clear prompt"
                  >
                    <RotateCcw size={12} /> Clear
                  </button>
                </div>
              </div>

              {/* Main Prompt Textarea */}
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-44 bg-slate-900/80 border border-slate-800 rounded-lg p-4 font-mono text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 resize-none transition-colors"
                placeholder="Type your prompt freely or click modifier tags on the left..."
                spellCheck={false}
              />

              {/* Negative Prompt Textarea (Conditional) */}
              {showNegative && (
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <label className="text-xs font-mono text-pink-400 uppercase tracking-wider block mb-2">
                    Negative Prompt (Elements to avoid):
                  </label>
                  <textarea
                    value={negativePrompt}
                    onChange={(e) => setNegativePrompt(e.target.value)}
                    className="w-full h-20 bg-slate-900/80 border border-pink-500/30 rounded-lg p-3 font-mono text-xs text-pink-200 placeholder-slate-600 focus:outline-none focus:border-pink-500 resize-none transition-colors"
                    placeholder="blurry, low quality, extra limbs, distorted hands..."
                    spellCheck={false}
                  />
                </div>
              )}

              {/* Bottom Action Bar */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                  <span>Words: {prompt.split(/\s+/).filter(Boolean).length}</span>
                  <span className="text-cyan-400">Chars: {prompt.length}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 text-xs font-mono clip-corner border border-lime-400/50 bg-lime-400/10 text-lime-400 hover:bg-lime-400/20 transition-all flex items-center gap-1.5"
                  >
                    <Bookmark size={14} /> Save
                  </button>

                  <NeonButton
                    variant="cyan"
                    onClick={handleCopy}
                    className="text-xs px-5 py-2"
                  >
                    {copied ? (
                      <>
                        <Check size={14} /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={14} /> Copy Final Prompt
                      </>
                    )}
                  </NeonButton>
                </div>
              </div>
            </div>

            {/* Local Storage History Section */}
            {history.length > 0 && (
              <div className="p-6 clip-corner border-2 border-slate-800 bg-slate-950/70 backdrop-blur-md">
                <h3 className="font-mono text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider border-b border-slate-800 pb-2">
                  <History size={16} className="text-lime-400" /> Saved History ({history.length})
                </h3>
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {history.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg flex items-start justify-between gap-3 hover:border-slate-700 transition-all"
                    >
                      <div
                        onClick={() => {
                          setPrompt(item.prompt)
                          if (item.negativePrompt) {
                            setNegativePrompt(item.negativePrompt)
                            setShowNegative(true)
                          }
                          if (item.model) setSelectedModel(item.model)
                          showToast('Loaded from history')
                        }}
                        className="cursor-pointer flex-1"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 rounded">
                            {item.model}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">{item.date}</span>
                        </div>
                        <p className="text-xs font-mono text-slate-300 line-clamp-2">{item.prompt}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteHistory(item.id)}
                        className="text-slate-600 hover:text-red-400 p-1 transition-colors"
                        title="Delete entry"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-6">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Zap size={24} className="text-lime-400" />
          <span className="font-mono text-xl font-bold text-white">AI PROMPT STUDIO</span>
        </div>
        <p className="text-slate-500 text-sm">
          Built with React, Vite, GSAP & Tailwind v4
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1">
            <ExternalLink size={16} />
            <span className="font-mono text-xs">GitHub</span>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1">
            <X size={16} />
            <span className="font-mono text-xs">X</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title .glitch-char',
        { opacity: 0, y: 50, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          stagger: 0.02,
          ease: 'power4.out',
        }
      )

      gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power3.out' }
      )

      gsap.fromTo('.hero-cta',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
      )

      gsap.fromTo('.stat-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.stats-section', start: 'top 80%' },
        }
      )

      gsap.fromTo('.feature-card',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.features-section', start: 'top 80%' },
        }
      )
    }, scrollRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={scrollRef} className="min-h-screen bg-slate-950">
      <CyberGrid />

      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap size={24} className="text-lime-400" />
            <span className="font-mono text-xl font-bold text-white">AI PROMPT STUDIO</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-mono">Features</a>
            <a href="#builder" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-mono">Builder</a>
          </div>
        </div>
      </nav>

      <header id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="hero-title mb-6">
            <GlitchText text="CYBERPUNK AI PROMPT STUDIO" className="text-4xl md:text-6xl lg:text-7xl" />
          </div>
          <p className="hero-subtitle text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Generate production-ready prompts for Midjourney, Stable Diffusion & DALL·E.
            Cyberpunk aesthetic. Zero fluff. Pure signal.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#builder">
              <NeonButton variant="cyan" className="w-full sm:w-auto">
                <ArrowRight size={18} />
                Start Building
              </NeonButton>
            </a>
            <a href="https://github.com/denynurcahyanto1/ai-prompt-studio" target="_blank" rel="noopener noreferrer">
              <NeonButton variant="lime" className="w-full sm:w-auto border-lime-400 text-lime-400">
                <GithubIcon size={18} />
                View Source
              </NeonButton>
            </a>
          </div>
          <div className="mt-16 flex items-center justify-center gap-2 text-slate-500">
            <ChevronDown size={24} className="animate-bounce" />
            <span className="font-mono text-xs uppercase tracking-wider">Scroll</span>
          </div>
        </div>
      </header>

      <section id="stats" className="stats-section py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Models Supported" value="4" icon={Brain} delay={0} />
            <StatCard label="Prompt Templates" value="12+" icon={Zap} delay={0.1} />
            <StatCard label="Modifier Tags" value="35+" icon={Terminal} delay={0.2} />
            <StatCard label="Open Source" value="100%" icon={Sparkles} delay={0.3} />
          </div>
        </div>
      </section>

      <section id="features" className="features-section py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <GlitchText text="CORE FEATURES" className="text-3xl md:text-5xl" />
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Everything you need to craft the perfect prompt, engineered for precision.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Multi-Model Preset Switcher"
              description="Seamlessly switch between Midjourney v6, SDXL, Flux.1, and DALL-E 3 syntax presets."
              icon={Brain}
              delay={0}
            />
            <FeatureCard
              title="Click-to-Add Modifier Tags"
              description="One-click tag insertion for Art Style, Lighting, Camera angles, Engine renderers, and Aspect Ratios."
              icon={Terminal}
              delay={0.1}
            />
            <FeatureCard
              title="Negative Prompt Toggle"
              description="Separate negative prompt input field with automatic syntax formatting per target AI model."
              icon={Sparkles}
              delay={0.2}
            />
            <FeatureCard
              title="Local History & Favorites"
              description="Automatically save prompt history to LocalStorage. Reload or clear entries with one click."
              icon={Zap}
              delay={0.3}
            />
            <FeatureCard
              title="Copy & Toast Feedback"
              description="Instant copy to clipboard with interactive floating toast notifications and real-time word/character counts."
              icon={Copy}
              delay={0.4}
            />
            <FeatureCard
              title="Cyberpunk Glassmorphism"
              description="Dark mode native interface with glowing neon borders, scanlines, and fluid GSAP animations."
              icon={Check}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      <PromptBuilder />

      <Footer />
    </div>
  )
}