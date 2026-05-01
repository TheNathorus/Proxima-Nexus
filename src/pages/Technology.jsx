import { Layers, GitMerge, Lock, ArrowRight } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import proximaOsSlideDeckHtml from '../assets/proxima-os_Slide_Deck.html?raw';

const STACK_LAYERS = [
  {
    title: 'LLMs & reasoning',
    text: 'Claude for advanced reasoning, Gemini fallback, Mistral for sovereignty-first workloads, and local models for sensitive data.',
  },
  {
    title: 'Orchestration & agents',
    text: 'OpenClaw/Plexusia runtime with Paperclip control logic and Hermes coordination for modular multi-agent execution.',
  },
  {
    title: 'Execution workflows',
    text: 'n8n as the operational backbone for integrations, automations, and API-driven business workflows.',
  },
  {
    title: 'Sovereign infrastructure',
    text: 'VPS + OVH + local hardware strategy to preserve client confidentiality and avoid hyperscaler lock-in.',
  },
];

export default function Technology() {
  const { i18n } = useTranslation();
  const deckLang = i18n.resolvedLanguage?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  const localizedDeckHtml = useMemo(
    () => proximaOsSlideDeckHtml.replace('__DECK_LANG__', deckLang),
    [deckLang],
  );

  return (
    <div>
      <section className="section page-header page-header--rule page-header--surface">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Proxima OS</div>
          <h1 className="page-title">Sovereign AI infrastructure in production.</h1>
          <p className="page-lead page-lead--center">
            Built for enterprise reliability without hyperscaler dependency: modular stack, controlled costs, and governance by
            design.
          </p>
        </div>
      </section>

      <section className="section container">
        <div
          style={{
            width: '100%',
            aspectRatio: '16 / 9',
            minHeight: '520px',
            maxHeight: '78vh',
            borderRadius: '1rem',
            overflow: 'hidden',
            border: '1px solid var(--line)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <iframe
            title="Proxima OS Slide Deck"
            srcDoc={localizedDeckHtml}
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            loading="lazy"
          />
        </div>
      </section>

      <section className="section stack-band">
        <div className="container">
          <div className="section-intro" style={{ margin: '0 auto 2rem', textAlign: 'center' }}>
            <h2 className="section-intro__title">Production stack principles</h2>
            <p className="section-intro__desc">
              Data sovereignty, modular replacement, and frugal compute economics with up to 30× cost efficiency on targeted
              tasks.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 tech-stack-grid">
            {STACK_LAYERS.map((item) => (
              <article key={item.title} className="card">
                <h3 className="card-heading">{item.title}</h3>
                <p className="card-body" style={{ minHeight: 'auto', marginBottom: 0 }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6" style={{ marginTop: '1.5rem' }}>
            <div className="card">
              <Lock size={28} className="text-cyan" style={{ marginBottom: '1.1rem' }} aria-hidden />
              <h3 style={{ fontSize: '1.12rem', marginBottom: '0.6rem' }}>Data Sovereignty</h3>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                Local-first deployments and OVH-backed infrastructure with full client IP ownership.
              </p>
            </div>
            <div className="card">
              <GitMerge size={28} className="text-cyan" style={{ marginBottom: '1.1rem' }} aria-hidden />
              <h3 style={{ fontSize: '1.12rem', marginBottom: '0.6rem' }}>Intelligent Routing</h3>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                Runtime model selection across Claude, Gemini, Mistral, and local models based on context and cost.
              </p>
            </div>
            <div className="card">
              <Layers size={28} className="text-cyan" style={{ marginBottom: '1.1rem' }} aria-hidden />
              <h3 style={{ fontSize: '1.12rem', marginBottom: '0.6rem' }}>HITL / EITL Governance</h3>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>
                Human oversight at critical workflow checkpoints to align with EU AI Act Article 14 requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '0.6rem' }}>Build on Proxima OS</h2>
          <p className="text-muted" style={{ marginBottom: '1.6rem' }}>
            Start with a concrete architecture review and deployment roadmap.
          </p>
          <Button href="https://calendar.app.google/aLF3LJrpDQG7dDsZ7" variant="primary">
            Discuss Your Architecture <ArrowRight size={16} aria-hidden />
          </Button>
        </div>
      </section>
    </div>
  );
}
