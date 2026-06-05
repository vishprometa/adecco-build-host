const stats = [
  ['60+', 'years of global workforce expertise'],
  ['3.5M', 'careers supported every year'],
  ['100K+', 'clients served worldwide'],
];

const services = [
  'Flexible staffing for peak demand',
  'Permanent placement and executive search',
  'Outsourced recruitment programmes',
  'Workforce upskilling and transition support',
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand"><span />Adecco</div>
        <a href="#contact" className="navCta">Talk to us</a>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Adecco Singapore</p>
          <h1>Connecting people, skills, and opportunity.</h1>
          <p className="lede">
            Build a more agile workforce with recruitment, staffing, and talent solutions designed for Singapore’s fast-moving businesses.
          </p>
          <div className="actions">
            <a className="primary" href="#contact">Find talent</a>
            <a className="secondary" href="#services">Explore services</a>
          </div>
        </div>
        <div className="heroCard" aria-label="Workforce dashboard preview">
          <div className="cardTop"><b>Workforce pulse</b><span>Live</span></div>
          <div className="bars"><i /><i /><i /><i /></div>
          <div className="miniGrid">
            <div><strong>94%</strong><small>roles matched</small></div>
            <div><strong>28d</strong><small>avg. time to hire</small></div>
          </div>
        </div>
      </section>

      <section className="stats">
        {stats.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section id="services" className="panel">
        <div>
          <p className="eyebrow">What we do</p>
          <h2>Talent solutions for every stage of growth.</h2>
        </div>
        <div className="serviceList">
          {services.map((service) => <article key={service}>{service}</article>)}
        </div>
      </section>

      <section className="split">
        <div>
          <p className="eyebrow">For employers</p>
          <h2>Scale with confidence.</h2>
          <p>From temporary coverage to strategic hiring, Adecco helps teams respond faster while keeping candidate experience at the centre.</p>
        </div>
        <div>
          <p className="eyebrow">For job seekers</p>
          <h2>Move your career forward.</h2>
          <p>Access meaningful roles, practical guidance, and a partner who understands the future of work.</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Ready when you are</p>
        <h2>Let’s build your next workforce plan.</h2>
        <a className="primary" href="mailto:hello@adecco.example">Contact Adecco</a>
      </section>
    </main>
  );
}
