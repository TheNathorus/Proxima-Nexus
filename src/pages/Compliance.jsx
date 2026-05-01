import Button from '../components/Button';
import { ShieldCheck, FileText, Activity, AlertTriangle } from 'lucide-react';

const AI_ACT_CHECKLIST = [
  'Inventory all AI systems and classify risk levels.',
  'Document AI-driven decision workflows and human oversight.',
  'Prepare compliance files for high-risk systems before deployment.',
  'Assign accountable AI governance leadership (internal or fractional).',
];

const ISO_BLOCKS = [
  {
    icon: ShieldCheck,
    title: 'AIMS Design',
    text: 'Build your AI Management System structure aligned with ISO/IEC 42001 requirements.',
  },
  {
    icon: Activity,
    title: 'Risk Register',
    text: 'Map and prioritize AI operational, legal, and governance risks with mitigation ownership.',
  },
  {
    icon: FileText,
    title: 'SoA & Audit Readiness',
    text: 'Deliver Statement of Applicability, internal audit simulation, and certification-readiness evidence.',
  },
];

export default function Compliance() {
  return (
    <div>
      <section className="section page-header page-header--rule page-header--surface">
        <div className="container">
          <div className="eyebrow">Proxima Comply</div>
          <h1 className="page-title">
            EU AI Act urgency. <br />
            ISO/IEC 42001 structure.
          </h1>
          <p className="page-lead">
            We help organizations turn the 2 August 2026 regulatory deadline into a governance advantage through a practical,
            audit-ready implementation path.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Button href="https://calendar.app.google/aLF3LJrpDQG7dDsZ7" variant="primary">
              Book a Compliance Audit
            </Button>
          </div>
        </div>
      </section>

      <section className="section compliance-dual">
        <div className="container two-col two-col--start">
          <article className="feature-card-block compliance-dual__card">
            <div className="eyebrow">You must</div>
            <h2 className="compliance-dual__title">EU AI Act readiness</h2>
            <p className="text-muted compliance-dual__lead">
              Regulatory obligations are non-discretionary for high-risk AI usage. We provide the operational checklist and
              evidence structure to close the gap quickly.
            </p>
            <ul className="compliance-checklist">
              {AI_ACT_CHECKLIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="compliance-alert">
              <AlertTriangle size={16} aria-hidden />
              <span>Critical date: 2 August 2026</span>
            </div>
          </article>

          <article className="feature-card-block compliance-dual__card">
            <div className="eyebrow">You should</div>
            <h2 className="compliance-dual__title">ISO/IEC 42001 governance maturity</h2>
            <p className="text-muted compliance-dual__lead">
              ISO/IEC 42001 is becoming a trust signal for procurement, investors, and enterprise partnerships. We build your
              pre-certification capability end-to-end.
            </p>
            <div className="compliance-benefits">
              <div className="compliance-benefits__item">Strengthen governance consistency across teams</div>
              <div className="compliance-benefits__item">Reduce compliance effort for EU AI Act documentation</div>
              <div className="compliance-benefits__item">Improve auditability for enterprise sales cycles</div>
            </div>
          </article>
        </div>
      </section>

      <section className="section container">
        <div className="section-intro">
          <h2 className="section-intro__title">What Proxima Comply delivers</h2>
          <p className="section-intro__desc">
            A structured pre-certification implementation package that naturally extends into Proxima Command for ongoing
            governance.
          </p>
        </div>

        <div className="feature-stack">
          {ISO_BLOCKS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="feature-card-block">
                <Icon size={30} className="text-cyan" style={{ marginBottom: '0.85rem' }} aria-hidden />
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.45rem' }}>{item.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.92rem', lineHeight: 1.55 }}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="disclaimer-callout">
          <strong>Important Notice:</strong> Proxima Nexus acts exclusively as a pre-certification implementation partner. The
          formal certification audit must be conducted by an accredited third-party body (e.g. SGS, Bureau Veritas, AFNOR,
          BSI) in accordance with ISO/IEC 17021 accreditation rules.
        </div>
      </section>

      <section className="section cta-band">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="cta-band__title">Ready for August 2026?</h2>
          <p className="cta-band__text">
            Start with a concrete compliance baseline, prioritize business-critical gaps, and operationalize governance before
            enforcement pressure accelerates.
          </p>
          <Button href="https://calendar.app.google/aLF3LJrpDQG7dDsZ7" variant="primary">
            Schedule a Readiness Call
          </Button>
        </div>
      </section>
    </div>
  );
}

