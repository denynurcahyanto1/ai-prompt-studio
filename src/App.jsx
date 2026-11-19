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
  const [prompt, setPrompt] = useState('')
  const [copied, setCopied] = useState(false)
  const textareaRef = useRef(null)

  const handleCopy = async () => {
    if (!prompt.trim()) return
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const templates = [
    { label: 'Cyberpunk Character', value: 'A cyberpunk hacker with neon implants, holographic HUD eyes, rain-soaked streets reflection, volumetric lighting, 8k, unreal engine 5, cinematic composition' },
    { label: 'Neural Network Visualization', value: 'Abstract neural network architecture, glowing nodes and connections, data flowing through layers, cyan and lime color scheme, dark background, scientific visualization style' },
    { label: 'Futuristic Cityscape', value: 'Megalopolis at night, towering skyscrapers with holographic advertisements, flying vehicles, neon reflections on wet streets, atmospheric fog, cyberpunk aesthetic, wide angle' },
  ]

  const [activeTemplate, setActiveTemplate] = useState(0)

  useEffect(() => {
    setPrompt(templates[activeTemplate].value)
  }, [activeTemplate])

  return (
    <section id="builder" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <GlitchText text="PROMPT BUILDER" className="text-4xl md:text-6xl" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Compose, refine, and export production-ready prompts for AI image generation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="clip-corner border-2 border-slate-700 bg-slate-950/50 backdrop-blur-sm p-6 h-full">
              <h3 className="font-mono text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles size={20} className="text-lime-400" />
                TEMPLATES
              </h3>
              <div className="space-y-2">
                {templates.map((t, i) => (
                  <button
                    key={t.label}
                    onClick={() => setActiveTemplate(i)}
                    className={`w-full text-left p-4 rounded-lg font-mono text-sm transition-all duration-200 ${
                      activeTemplate === i
                        ? 'bg-cyan-400/10 border border-cyan-400 text-cyan-300'
                        : 'bg-slate-900/50 border border-slate-700 text-slate-300 hover:border-cyan-400/50'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="clip-corner border-2 border-slate-700 bg-slate-950/50 backdrop-blur-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono text-lg font-bold text-white flex items-center gap-2">
                  <Terminal size={20} className="text-lime-400" />
                  PROMPT OUTPUT
                </h3>
                <NeonButton
                  variant="lime"
                  onClick={handleCopy}
                  className="text-sm px-4 py-2"
                >
                  {copied ? (
                    <>
                      <Check size={14} /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy
                    </>
                  )}
                </NeonButton>
              </div>
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-48 bg-slate-900/50 border border-slate-700 rounded-lg p-4 font-mono text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                placeholder="Select a template or write your own prompt..."
                spellCheck={false}
              />
              <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                <span>{prompt.split(/\s+/).filter(Boolean).length} tokens</span>
                <span className="text-cyan-400 font-mono">~{Math.ceil(prompt.length / 4)} characters</span>
              </div>
            </div>
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
            <NeonButton variant="cyan" className="w-full sm:w-auto">
              <ArrowRight size={18} />
              Start Building
            </NeonButton>
            <NeonButton variant="lime" className="w-full sm:w-auto border-lime-400 text-lime-400">
              <GithubIcon size={18} />
              View Source
            </NeonButton>
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
            <StatCard label="Models Supported" value="3+" icon={Brain} delay={0} />
            <StatCard label="Prompt Templates" value="12+" icon={Zap} delay={0.1} />
            <StatCard label="Export Formats" value="4" icon={Terminal} delay={0.2} />
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
              title="Multi-Model Optimization"
              description="Tailored prompt structures for Midjourney v6, Stable Diffusion XL, and DALL·E 3 with model-specific parameter injection."
              icon={Brain}
              delay={0}
            />
            <FeatureCard
              title="Real-Time Token Counter"
              description="Live character and token estimation with cost projection. Know exactly what you're sending before you hit generate."
              icon={Terminal}
              delay={0.1}
            />
            <FeatureCard
              title="Style Preset Library"
              description="Curated cyberpunk, synthwave, biopunk, and post-apocalyptic presets. One-click application to any base prompt."
              icon={Sparkles}
              delay={0.2}
            />
            <FeatureCard
              title="Parameter Injection"
              description="Automatic --ar, --stylize, --chaos, --quality flags for Midjourney. CFG, steps, sampler mapping for SDXL."
              icon={Zap}
              delay={0.3}
            />
            <FeatureCard
              title="Copy-to-Clipboard Ready"
              description="Formatted output with proper escaping. Paste directly into any AI generator without manual cleanup."
              icon={Copy}
              delay={0.4}
            />
            <FeatureCard
              title="Dark Mode Native"
              description="Built for the night. Pure black backgrounds, neon accents, zero eye strain. Works perfectly in any lighting."
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