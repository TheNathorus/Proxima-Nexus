import { useState } from 'react';
import Button from '../components/Button';
import { Award, Briefcase, Zap } from 'lucide-react';

const PORTRAIT_SOURCES = ['/branding/nathan-portrait.png', '/branding/nathan-portrait.jpg'];

const CREDIBILITY_POINTS = [
  'French SAS, active since 2025',
  'France Num certified digital advisor',
  'Documented ROI-driven delivery with 90-day deployment discipline',
];

export default function About() {
  const [portraitIx, setPortraitIx] = useState(0);
  const [portraitDead, setPortraitDead] = useState(false);

  return (
    <div>
      <section className="section page-header page-header--rule">
        <div className="container">
          <div className="two-col two-col--wide-left">
            <div>
              <div className="eyebrow">Founder-led execution</div>
              <h1 className="page-title">A boutique model built for measurable outcomes.</h1>
              <p className="page-lead">
                Proxima Nexus is run as an AI-augmented operator model: fast decision cycles, direct accountability, and
                architecture choices anchored in business impact.
              </p>
              <ul className="about-cred-list">
                {CREDIBILITY_POINTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <article className="founder-card">
              <div className="founder-card__media">
                {!portraitDead ? (
                  <img
                    src={PORTRAIT_SOURCES[portraitIx]}
                    alt="Nathan Becheroy"
                    className="founder-portrait"
                    onError={() => {
                      if (portraitIx + 1 < PORTRAIT_SOURCES.length) {
                        setPortraitIx((i) => i + 1);
                      } else {
                        setPortraitDead(true);
                      }
                    }}
                  />
                ) : (
                  <div className="founder-avatar-fallback">NB</div>
                )}
              </div>
              <div className="founder-card__body">
                <h3 className="founder-card__name">Nathan Becheroy</h3>
                <p className="founder-card__role">Founder & CEO</p>
                <p className="founder-card__quote">
                  “AI transformation only creates value when governance, workflow design, and adoption move together.”
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section container" style={{ paddingTop: '1rem' }}>
        <div className="grid grid-cols-3 gap-6">
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="stat-card-icon">
              <Award size={22} className="text-cyan" aria-hidden />
            </div>
            <h3 className="stat-card-title">France Num</h3>
            <p className="stat-card-desc">Government-backed credibility for SME digital and AI transformation.</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="stat-card-icon">
              <Briefcase size={22} className="text-cyan" aria-hidden />
            </div>
            <h3 className="stat-card-title">Fractional CAIO Delivery</h3>
            <p className="stat-card-desc">Executive steering and operational execution through one accountable point.</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="stat-card-icon">
              <Zap size={22} className="text-cyan" aria-hidden />
            </div>
            <h3 className="stat-card-title">90-Day Momentum</h3>
            <p className="stat-card-desc">From audit to first production outcomes with measurable KPI tracking.</p>
          </div>
        </div>
      </section>

      <section className="section mission-panel">
        <div className="container mission-panel__inner">
          <h2 className="mission-panel__title">Mission</h2>
          <p className="mission-panel__text">
            Deliver sovereign, measurable AI transformation for companies moving from experimentation to industrialized
            operations, with clear ownership and no vendor lock-in.
          </p>
          <Button href="https://calendar.app.google/aLF3LJrpDQG7dDsZ7" variant="primary">
            Work With Us
          </Button>
        </div>
      </section>
    </div>
  );
}
