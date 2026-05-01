import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PROOF_METRICS = [
  { value: '€100k+', label: 'Signed since start of 2026' },
  { value: '7', label: 'Active clients' },
  { value: '159.8%', label: 'Median client ROI' },
];

const OFFER_LADDER = [
  { step: '01', title: 'Conference', detail: 'Awareness and executive alignment (half to 1 day)' },
  { step: '02', title: 'Workshop', detail: 'Use-case framing and KPI definition (1 to 2 days)' },
  { step: '03', title: 'Audit', detail: 'Proxima Scan readiness and compliance matrix (4 to 6 weeks)' },
  { step: '04', title: 'Training', detail: 'Operational and leadership enablement (half-day to 2 days)' },
  { step: '05', title: 'Deployment', detail: 'Pilot and scale with Fractional CAIO governance' },
];

const TRUST_CUSTOMERS = [
  { src: '/branding/customers/marle.svg', alt: 'Marle Groupe', invert: true },
  { src: '/branding/customers/serfim-tic.png', alt: 'Serfim TIC', invert: true },
  { src: '/branding/customers/comptasante.png', alt: 'Compta Santé' },
  { src: '/branding/customers/diapason.png', alt: 'Diapason' },
  { src: '/branding/customers/activateur-ia.png', alt: 'Activateur IA' },
  { src: '/branding/customers/covea.png', alt: 'Covéa' },
  { src: '/branding/customers/dalkia.png', alt: 'Dalkia' },
  { src: '/branding/customers/dspace.png', alt: 'dSPACE' },
  { src: '/branding/customers/psg.png', alt: 'Paris Saint-Germain' },
  { src: '/branding/customers/russam.png', alt: 'Russam' },
  { src: '/branding/customers/sofia.png', alt: 'Sofia Group' },
  { src: '/branding/customers/xpm.png', alt: 'XPM' },
];

const REFERENCES = [
  {
    name: 'Serfim TIC',
    segment: 'Industrial services',
    detail:
      '8-day AI audit, 60-page roadmap, and 18-month Fractional CAIO program across operational entities.',
  },
  {
    name: 'Diapason',
    segment: 'Finance SaaS',
    detail:
      'Internal AI agents deployment, prompt library structuring, and team upskilling for consulting delivery speed.',
  },
  {
    name: 'ComptaSanté',
    segment: 'Healthcare accounting',
    detail:
      'AI readiness audit and n8n document-processing agent with three high-value automation opportunities identified.',
  },
  {
    name: 'PSG Equity Portfolio',
    segment: 'Private Equity',
    detail:
      'Portfolio-level AI acceleration setup combining executive steering, quick wins, and scalable governance methods.',
  },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="section hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">{t('home.eyebrow')}</div>
            <h1 className="hero-title">{t('home.title')}</h1>
            <p className="hero-lead">{t('home.desc')}</p>
            <div className="hero-cta">
              <Button href="https://calendar.app.google/aLF3LJrpDQG7dDsZ7" variant="primary">
                {t('home.cta1')}
              </Button>
              <Button to="/services" variant="secondary">
                {t('home.cta2')} <ArrowRight size={16} aria-hidden />
              </Button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-mockup">
              <div className="hero-mockup__top">
                <div className="hero-mockup__dots" aria-hidden>
                  <span className="hero-mockup__dot hero-mockup__dot--r" />
                  <span className="hero-mockup__dot hero-mockup__dot--y" />
                  <span className="hero-mockup__dot hero-mockup__dot--g" />
                </div>
                <div className="hero-mockup__title">Proxima OS Orchestration</div>
              </div>
              <div className="hero-mockup__body">
                <div className="hero-flow">
                  <div className="hero-flow__node">Input Stream</div>
                  <span className="hero-flow__arrow" aria-hidden>
                    →
                  </span>
                  <div className="hero-flow__node hero-flow__node--active">Plexusia Framework</div>
                  <span className="hero-flow__arrow" aria-hidden>
                    →
                  </span>
                  <div className="hero-flow__node">Execution</div>
                </div>
                <div className="hero-agents">
                  <div className="text-muted hero-agents__label">Active Agents</div>
                  <div className="hero-agents__row">
                    <CheckCircle2 size={14} className="text-cyan" aria-hidden />
                    Nexus Orchestrator
                  </div>
                  <div className="hero-agents__row">
                    <CheckCircle2 size={14} className="text-cyan" aria-hidden />
                    Scout Intelligence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-band">
        <div className="container proof-band__grid">
          {PROOF_METRICS.map((item) => (
            <article key={item.label} className="proof-band__card">
              <div className="proof-band__value">{item.value}</div>
              <div className="proof-band__label">{item.label}</div>
            </article>
          ))}
        </div>
        <p className="proof-band__note">As of April 2026.</p>
      </section>

      <section className="section market-window">
        <div className="container two-col two-col--start">
          <div>
            <div className="eyebrow">Why now</div>
            <h2 className="section-intro__title">A fast-growing market with a hard regulatory deadline.</h2>
            <p className="section-intro__desc">
              EU AI Act obligations are moving from optional awareness to operational reality. We help companies convert this
              constraint into a measurable transformation advantage.
            </p>
          </div>
          <div className="market-window__cards">
            <div className="feature-card-block">
              <h3 className="card-heading">EU AI Act urgency</h3>
              <p className="text-muted">Critical obligations and AI literacy requirements apply on 2 August 2026.</p>
            </div>
            <div className="feature-card-block">
              <h3 className="card-heading">ISO/IEC 42001 momentum</h3>
              <p className="text-muted">
                Procurement teams increasingly expect structured AI governance and audit-ready documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section offer-ladder">
        <div className="container">
          <div className="section-intro">
            <div className="eyebrow">Engagement path</div>
            <h2 className="section-intro__title">From diagnosis to industrialization.</h2>
          </div>
          <div className="offer-ladder__grid">
            {OFFER_LADDER.map((item) => (
              <article key={item.step} className="offer-ladder__step card">
                <div className="offer-ladder__index">{item.step}</div>
                <h3 className="card-heading">{item.title}</h3>
                <p className="card-body">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-strip__inner">
          <div className="trust-strip__label">{t('home.trustTitle')}</div>
          <div className="trust-strip__logos-grid" role="list">
            {TRUST_CUSTOMERS.map(({ src, alt, invert }) => (
              <div
                key={src}
                role="listitem"
                className={`trust-strip__logo-cell${invert ? ' trust-strip__logo-cell--dark' : ''}`}
              >
                <img src={src} alt={alt} className="trust-strip__logo-img" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section references-showcase">
        <div className="container">
          <div className="section-intro">
            <div className="eyebrow">References</div>
            <h2 className="section-intro__title">Missions delivered in high-expectation environments.</h2>
          </div>
          <div className="references-showcase__grid">
            {REFERENCES.map((item) => (
              <article key={item.name} className="card">
                <h3 className="card-heading">{item.name}</h3>
                <div className="card-pill">{item.segment}</div>
                <p className="card-body">{item.detail}</p>
              </article>
            ))}
            <article className="card references-showcase__cta-card">
              <h3 className="card-heading">Your company, next.</h3>
              <p className="card-body">
                We start with a business-grounded audit, align executive governance, and deploy measurable quick wins.
              </p>
              <Button href="https://calendar.app.google/aLF3LJrpDQG7dDsZ7" variant="primary">
                Book Strategy Call
              </Button>
            </article>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-intro">
          <h2 className="section-intro__title">Core service products</h2>
          <p className="section-intro__desc">
            Structured offers designed to eliminate day-rate ambiguity and move quickly from strategy to value.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="card">
            <h3 className="card-heading">Proxima Scan</h3>
            <p className="card-body">
              Audit, process mapping, AI maturity score, EU AI Act matrix, and ISO/IEC 42001 readiness baseline.
            </p>
            <div className="card-pill">4–6 weeks</div>
            <Link to="/services#scan" className="card-link">
              Explore Assessment →
            </Link>
          </div>

          <div className="card">
            <h3 className="card-heading">Proxima Pilot</h3>
            <p className="card-body">
              2–3 production agents, operational workflows, and a 90-day hypercare period for adoption.
            </p>
            <div className="card-pill">6–12 weeks</div>
            <Link to="/services#pilot" className="card-link">
              Explore Implementation →
            </Link>
          </div>

          <div className="card">
            <h3 className="card-heading">Proxima Command</h3>
            <p className="card-body">
              Fractional CAIO governance, executive steering, KPI tracking, and continuous AI program leadership.
            </p>
            <div className="card-pill">Min. 3-month retainer</div>
            <Link to="/services#command" className="card-link">
              Explore Retainer →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
