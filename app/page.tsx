const stats = [
  ['500+', 'consultants across Asia-Pacific supporting regional hiring programmes'],
  ['3.5M', 'people helped into work globally each year through the Adecco Group'],
  ['60+', 'years of workforce expertise across staffing, recruitment, and HR services'],
  ['24/7', 'rapid response capability for high-volume and shift-based operations'],
];

const sectors = [
  'Technology & digital',
  'Banking, finance & insurance',
  'Logistics, supply chain & manufacturing',
  'Healthcare & life sciences',
  'Retail, hospitality & customer experience',
  'Corporate functions & shared services',
];

const solutions = [
  {
    title: 'Flexible staffing',
    text: 'Contract, temporary, and project talent for peak seasons, maternity coverage, urgent backfills, events, and business continuity.',
  },
  {
    title: 'Permanent recruitment',
    text: 'End-to-end sourcing, screening, shortlisting, interview coordination, offer support, and onboarding guidance for critical roles.',
  },
  {
    title: 'Managed recruitment programmes',
    text: 'Scalable recruitment operations for businesses that need consistent hiring outcomes, clear reporting, and stronger candidate pipelines.',
  },
  {
    title: 'Workforce advisory',
    text: 'Market mapping, salary benchmarking, workforce planning, talent mobility, and practical hiring insights for Singapore employers.',
  },
];

const process = [
  ['01', 'Understand the brief', 'We align on role requirements, skills, budget, timelines, shift needs, compliance expectations, and success metrics.'],
  ['02', 'Build the shortlist', 'Recruiters activate local networks, digital campaigns, screening workflows, and structured assessment criteria.'],
  ['03', 'Coordinate selection', 'We help manage interviews, feedback, references, offer steps, onboarding readiness, and candidate communication.'],
  ['04', 'Support after placement', 'Post-placement check-ins, performance feedback, replacement support, and workforce reporting keep outcomes on track.'],
];

const seekerBenefits = [
  'Access roles across leading Singapore employers',
  'Get practical CV, interview, and market guidance',
  'Choose temporary, contract, or permanent pathways',
  'Work with consultants who understand your skills and goals',
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Adecco Singapore home">
          <span className="brandMark" />
          <strong>Adecco</strong>
          <em>Singapore</em>
        </a>
        <div className="navLinks" aria-label="Primary navigation">
          <a href="#solutions">Solutions</a>
          <a href="#employers">Employers</a>
          <a href="#careers">Job seekers</a>
          <a href="#contact" className="navCta">Talk to us</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Adecco Singapore workforce solutions</p>
          <h1>People, skills, and opportunity — connected at speed.</h1>
          <p className="lede">
            A detailed landing experience for Adecco Singapore: helping employers hire faster, build resilient teams, and support job seekers with meaningful work across the future economy.
          </p>
          <div className="actions">
            <a className="primary" href="#contact">Find talent</a>
            <a className="secondary" href="#careers">Explore jobs</a>
          </div>
          <div className="trustLine">
            <span>Recruitment</span><span>Staffing</span><span>Managed hiring</span><span>Workforce advisory</span>
          </div>
        </div>
        <aside className="heroCard" aria-label="Singapore workforce dashboard preview">
          <div className="cardTop"><b>Singapore workforce pulse</b><span>Live market focus</span></div>
          <div className="metricHero"><strong>28 days</strong><small>sample average time-to-shortlist target</small></div>
          <div className="bars"><i /><i /><i /><i /><i /></div>
          <div className="miniGrid">
            <div><strong>94%</strong><small>role-fit screening target</small></div>
            <div><strong>6</strong><small>priority sectors covered</small></div>
          </div>
        </aside>
      </section>

      <section className="stats" aria-label="Adecco highlights">
        {stats.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section id="solutions" className="panel">
        <div>
          <p className="eyebrow">What we do</p>
          <h2>Talent solutions for every stage of growth.</h2>
          <p>Whether you are hiring one specialist or mobilising a large operational workforce, Adecco Singapore can structure a practical programme around speed, quality, compliance, and candidate experience.</p>
        </div>
        <div className="solutionGrid">
          {solutions.map((service) => <article key={service.title}><h3>{service.title}</h3><p>{service.text}</p></article>)}
        </div>
      </section>

      <section className="sectorSection">
        <div className="sectionHead">
          <p className="eyebrow">Industry coverage</p>
          <h2>Built for Singapore’s diverse hiring landscape.</h2>
        </div>
        <div className="sectorGrid">
          {sectors.map((sector) => <article key={sector}>{sector}</article>)}
        </div>
      </section>

      <section id="employers" className="split featureSplit">
        <div>
          <p className="eyebrow">For employers</p>
          <h2>Hire confidently in a competitive market.</h2>
          <p>Adecco helps HR and business leaders respond to workforce demand with stronger pipelines, structured assessment, consistent communication, and practical market intelligence.</p>
          <ul>
            <li>Short-term coverage for sudden demand spikes</li>
            <li>Permanent recruitment for specialist and leadership roles</li>
            <li>Volume hiring coordination across multiple locations</li>
            <li>Compliance-aware onboarding and assignment support</li>
          </ul>
        </div>
        <div className="insightCard">
          <span>Employer outcome focus</span>
          <strong>Reduce hiring friction while protecting quality.</strong>
          <p>Clear briefs, market-aligned expectations, curated shortlists, and transparent progress reporting help teams make faster decisions.</p>
        </div>
      </section>

      <section className="processSection">
        <div className="sectionHead centered">
          <p className="eyebrow">How it works</p>
          <h2>A clear recruitment process from brief to placement.</h2>
        </div>
        <div className="processGrid">
          {process.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="careers" className="careerBand">
        <div>
          <p className="eyebrow">For job seekers</p>
          <h2>Move your career forward with a partner who knows work.</h2>
          <p>From first conversations to interview preparation and placement support, Adecco Singapore helps candidates understand opportunities, present their strengths, and choose roles that fit their goals.</p>
        </div>
        <ul>
          {seekerBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
        </ul>
      </section>

      <section className="quoteBlock">
        <p>“The future of work is not only about filling vacancies. It is about matching people with the right skills, supporting businesses with the right workforce model, and creating opportunity that lasts.”</p>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Ready when you are</p>
        <h2>Build your next Singapore workforce plan with Adecco.</h2>
        <p>Tell us what you need: urgent staffing, permanent hiring, a managed recruitment programme, or career support.</p>
        <div className="contactActions">
          <a className="primary" href="mailto:singapore@adecco.example?subject=Workforce%20solutions%20enquiry">Contact Adecco Singapore</a>
          <a className="secondary dark" href="tel:+6500000000">Call +65 0000 0000</a>
        </div>
      </section>
    </main>
  );
}
