import Button from '../components/Button';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ENGAGEMENT_STEPS = [
  { id: '01', title: 'Conference', duration: '0.5–1 day', detail: 'Executive awareness and alignment on business priorities.' },
  { id: '02', title: 'Workshop', duration: '1–2 days', detail: 'Use-case framing, KPI baseline, and operating constraints.' },
  { id: '03', title: 'Audit', duration: '4–6 weeks', detail: 'Proxima Scan with compliance matrix and action roadmap.' },
  { id: '04', title: 'Training', duration: '0.5–2 days', detail: 'Teams and leaders upskilling for adoption and execution.' },
  { id: '05', title: 'Deployment', duration: '2–18+ months', detail: 'Pilot-to-scale delivery with Fractional CAIO governance.' },
];

const MARKET_BENCHMARK = [
  {
    profile: 'Junior AI Consultant (2–4 yrs)',
    france: '€600–€900/day',
    europe: '€700–€1,100/day',
    uk: '£700–£1,000/day',
  },
  {
    profile: 'Senior AI Consultant (5–8 yrs)',
    france: '€900–€1,400/day',
    europe: '€1,000–€1,600/day',
    uk: '£1,100–£1,600/day',
  },
  {
    profile: 'Expert Fractional CAIO',
    france: '€1,200–€2,000/day',
    europe: '€1,400–€2,200/day',
    uk: '£1,200–£2,500/day',
  },
];

export default function Services() {
  const services = [
    {
      id: 'scan',
      title: 'Proxima Scan',
      subtitle: 'AI Readiness Audit',
      price: '€8k – €15k',
      duration: '4–6 weeks',
      description:
        'Audit, process mapping, AI maturity score, EU AI Act compliance matrix, and ISO/IEC 42001 gap analysis.',
      features: ['Process Mapping', 'Maturity Scoring', 'Compliance Matrix'],
    },
    {
      id: 'pilot',
      title: 'Proxima Pilot',
      subtitle: 'Transformation Sprint',
      price: '€25k – €50k',
      duration: '6–12 weeks',
      description:
        'Deploy 2–3 AI agents into production. Includes automated workflows, team training, and a 90-day hypercare period.',
      features: ['2–3 Custom Agents', 'Automated Workflows', '90-Day Hypercare'],
    },
    {
      id: 'command',
      title: 'Proxima Command',
      subtitle: 'Fractional CAIO',
      price: '€5k – €20k / month',
      duration: 'Min. 3-month retainer',
      description:
        'Executive AI leadership, EXCOM participation, AI governance, and KPI reporting integrated into your C-suite.',
      features: ['Executive Leadership', 'EXCOM Participation', 'KPI Governance'],
    },
    {
      id: 'training',
      title: 'AI Training & Enablement',
      subtitle: 'Executive & Team Workshops',
      price: '€3k – €8k / session',
      duration: 'Half-day to 2 days',
      description:
        'Hands-on workshops and executive sessions designed to upskill your team. OPCO-eligible training modules.',
      features: ['Hands-on Workshops', 'Executive Briefings', 'OPCO Eligible'],
    },
    {
      id: 'comply',
      title: 'Proxima Comply',
      subtitle: 'AI Governance & ISO/IEC 42001',
      price: '€12k – €30k',
      duration: '8–16 weeks',
      description:
        'Design your AI Management System (AIMS), risk registers, and prepare for formal ISO/IEC 42001 certification.',
      features: ['AIMS Design', 'Risk Register', 'Certification Prep'],
      link: '/compliance',
    },
    {
      id: 'custom',
      title: 'Custom Development',
      subtitle: 'Agents & Automation',
      price: '€10k – €80k+',
      duration: 'Variable',
      description:
        'Proprietary AI agents, bespoke RAG pipelines, and deep business system connectors tailored to your operations.',
      features: ['Proprietary Agents', 'RAG Pipelines', 'Deep Integrations'],
    },
    {
      id: 'accelerator',
      title: 'Proxima Accelerator',
      subtitle: 'PE Portfolio Programme',
      price: '€15k – €40k / quarter',
      duration: 'Quarterly cycle',
      description:
        'Industrialised AI acceleration designed specifically to scale across Private Equity portfolios.',
      features: ['Portfolio Scaling', 'Standardized Audits', 'Value Creation'],
    },
  ];

  return (
    <div>
      <section className="section page-header page-header--rule">
        <div className="container">
          <div className="eyebrow">Service Catalogue</div>
          <h1 className="page-title">From diagnosis to industrialization.</h1>
          <p className="page-lead">
            Structured offers with clear scope, clear deliverables, and clear economics. We remove ambiguity so teams can execute.
          </p>
        </div>
      </section>

      <section className="section services-journey">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-intro__title">How we engage</h2>
            <p className="section-intro__desc">
              Customers can enter at multiple points, but every path follows the same KPI-first operating discipline.
            </p>
          </div>
          <div className="services-journey__grid">
            {ENGAGEMENT_STEPS.map((step) => (
              <article key={step.id} className="card services-journey__item">
                <div className="services-journey__index">{step.id}</div>
                <h3 className="card-heading">{step.title}</h3>
                <div className="card-pill">{step.duration}</div>
                <p className="card-body">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container services-board">
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="card service-card-layout">
              <div>
                <div style={{ marginBottom: '1.25rem' }}>
                  <h2 style={{ fontSize: '1.35rem', marginBottom: '0.2rem' }}>{service.title}</h2>
                  <div className="service-subtitle">{service.subtitle}</div>
                </div>

                <p className="text-muted" style={{ marginBottom: '1.75rem', lineHeight: 1.65 }}>
                  {service.description}
                </p>

                <ul className="feature-bullet-list">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="text-cyan flex-shrink-0" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-card-footer">
                <div className="service-meta">
                  <div className="service-price">{service.price}</div>
                  <div className="service-duration">{service.duration}</div>
                </div>

                <div className="service-actions">
                  {service.link ? (
                    <Link to={service.link} className="btn btn-secondary">
                      Learn More
                    </Link>
                  ) : null}
                  <Button href="https://calendar.app.google/aLF3LJrpDQG7dDsZ7" variant="primary">
                    Book Call
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section service-benchmark">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-intro__title">Day-rate benchmark context</h2>
            <p className="section-intro__desc">
              Our pricing aligns with top-tier specialist positioning while keeping focus on fixed-scope outcomes.
            </p>
          </div>
          <div className="service-benchmark__table-wrap">
            <table className="service-benchmark__table" aria-label="AI consulting day-rate benchmark">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>France</th>
                  <th>Europe</th>
                  <th>UK</th>
                </tr>
              </thead>
              <tbody>
                {MARKET_BENCHMARK.map((row) => (
                  <tr key={row.profile}>
                    <td>{row.profile}</td>
                    <td>{row.france}</td>
                    <td>{row.europe}</td>
                    <td>{row.uk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

