const metrics = [
  { value: "100M+", label: "Product downloads" },
  { value: "US$50M+", label: "Annual recurring revenue" },
  { value: "30", label: "Product & Marketing organization" },
  { value: "15%", label: "Subscription conversion growth" },
];

const leadershipPillars = [
  {
    number: "01",
    title: "Product leadership",
    description:
      "Product strategy, multi-year roadmaps, 0→1 development, customer discovery, and cross-functional delivery.",
  },
  {
    number: "02",
    title: "Marketing & GTM",
    description:
      "Positioning, product marketing, demand generation, launch strategy, and commercialization across B2C and B2B.",
  },
  {
    number: "03",
    title: "Growth & monetization",
    description:
      "Acquisition, lifecycle, subscriptions, retention, pricing, packaging, CAC, LTV, and revenue efficiency.",
  },
  {
    number: "04",
    title: "AI-native operations",
    description:
      "Agentic workflows, competitive intelligence, marketing automation, product operations, and faster decision-making.",
  },
];

const experience = [
  {
    period: "2024 — Present",
    company: "PSafe US",
    role: "Vice President of Product & Marketing",
    scope:
      "Global ownership across product, marketing, growth, GTM, monetization, retention, and AI-enabled operations.",
    impact:
      "100M+ downloads · US$50M+ ARR · 30-person organization · 15% subscription conversion growth · 15% CAC reduction",
  },
  {
    period: "2023 — 2024",
    company: "Target Marketing",
    role: "CEO & Owner",
    scope:
      "Strategic advisory and hands-on execution across SaaS creation, product strategy, positioning, growth, and commercialization.",
    impact: "4 SaaS products developed · B2B advisory · 0→1 product and GTM",
  },
  {
    period: "2021 — 2023",
    company: "Grupo CyberLabs",
    role: "Vice President of Products & Marketing",
    scope:
      "Executive leadership across a multi-product portfolio, connecting customer insight, roadmap priorities, brand, acquisition, and monetization.",
    impact:
      "15% B2C conversion growth · 15% CAC reduction · 10% gross profit growth · 15% B2B lead growth",
  },
  {
    period: "2021",
    company: "Grupo Estado",
    role: "Head of Growth Marketing & GTM Strategy",
    scope:
      "Led the growth agenda across Product, Marketing, Sales, CRM, subscriptions, digital channels, and customer lifecycle.",
    impact:
      "US$10M ARR · 834K subscribers · 10% conversion growth · 5% monthly lead growth",
  },
  {
    period: "2020 — 2021",
    company: "Peixe Urbano",
    role: "Head of Product Marketing",
    scope:
      "Led product and go-to-market strategy for payments, digital wallet, loyalty, and a partner-facing SaaS platform across LATAM.",
    impact:
      "20K merchants · 15 countries · US$5M GMV · 1M monthly sessions",
  },
  {
    period: "2012 — 2020",
    company: "Burger King",
    role: "Regional Trade Marketing & Sales",
    scope:
      "Connected marketing, sales, operations, analytics, and store-level execution across a large regional restaurant network.",
    impact:
      "US$40M revenue under influence · 150 stores · 90 openings · 140% gross profit growth",
  },
];

const aiImpact = [
  { value: "10", label: "Automated workflows" },
  { value: "4", label: "Internally built dashboards" },
  { value: "6", label: "AI tools in the operating stack" },
  { value: "1 week → 1 day", label: "Creative production cycle" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const basePath = process.env.NODE_ENV === "production" ? "/andre-melo-portfolio" : "";

  return (
    <main>
      <div className="heroStage">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#top">
            Andre Melo
          </a>
          <div className="navLinks">
            <a href="#profile">Profile</a>
            <a href="#experience">Experience</a>
            <a href="#impact">Impact</a>
            <a
              href="https://www.linkedin.com/in/andrefelipemelo"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </nav>

        <section className="hero shell" id="top">
          <div className="heroCopy">
            <p className="kicker">Product & Marketing Executive</p>
            <h1>
              <span>Building products and</span>
              <span>the commercial engines</span>
              <span>that scale them.</span>
            </h1>
            <p className="lede">
              I connect product strategy, marketing, growth, monetization, and
              technology to build scalable businesses across B2C, B2B SaaS,
              mobile, subscriptions, and digital platforms.
            </p>
            <div className="heroActions">
              <a className="primaryLink" href="#experience">
                Explore my work <Arrow />
              </a>
              <a
                className="secondaryLink"
                href="https://www.linkedin.com/in/andrefelipemelo"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <figure className="portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}/andre-melo-portrait.webp`}
              alt="Andre Melo, Product and Marketing Executive"
              decoding="async"
            />
          </figure>
        </section>

        <section className="metrics shell" aria-label="Selected career metrics">
          {metrics.map((metric) => (
            <article className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </section>
      </div>

      <section className="section shell profileSection" id="profile">
        <div className="sectionHeading">
          <p className="kicker">Executive profile</p>
          <h2>One leadership model. Four connected disciplines.</h2>
        </div>
        <div className="profileIntro">
          <p>
            I build products and the commercial systems around them. My work
            spans strategy, customer experience, brand, go-to-market,
            acquisition, retention, monetization, and organizational
            execution.
          </p>
          <p>
            That integrated perspective allows me to move from market
            opportunity to product decision—and from product launch to
            sustainable business growth.
          </p>
        </div>
        <div className="pillarGrid">
          {leadershipPillars.map((pillar) => (
            <article className="pillar" key={pillar.title}>
              <span>{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experienceSection" id="experience">
        <div className="shell">
          <div className="sectionHeading experienceHeading">
            <p className="kicker">Career portfolio</p>
            <h2>From consumer brands to digital platforms and SaaS.</h2>
            <p>
              A career built at the intersection of product creation,
              commercial execution, customer growth, and organizational scale.
            </p>
          </div>

          <div className="experienceList">
            {experience.map((item, index) => (
              <article className="experienceItem" key={`${item.company}-${item.role}`}>
                <div className="experienceIndex">
                  <span>0{index + 1}</span>
                  <p>{item.period}</p>
                </div>
                <div className="experienceRole">
                  <p>{item.company}</p>
                  <h3>{item.role}</h3>
                </div>
                <div className="experienceDetails">
                  <p>{item.scope}</p>
                  <strong>{item.impact}</strong>
                </div>
              </article>
            ))}
          </div>

          <p className="careerFoundation">
            Earlier commercial and brand leadership experience includes
            Heineken and Diageo, with responsibility for premium brands,
            channel strategy, sales growth, and market execution.
          </p>
        </div>
      </section>

      <section className="aiSection" id="impact">
        <div className="shell aiGrid">
          <div className="aiCopy">
            <p className="kicker">AI as an operating advantage</p>
            <h2>Applied to the work—not added to the story.</h2>
            <p>
              I use AI as operating infrastructure across product,
              competitive intelligence, marketing, analytics, and team
              workflows. The objective is practical: better decisions, faster
              execution, and more capacity for high-value work.
            </p>
          </div>
          <div className="aiMetrics">
            {aiImpact.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell leadershipSection">
        <div className="sectionHeading">
          <p className="kicker">Leadership & advisory</p>
          <h2>Close to the board. Close to the work.</h2>
        </div>
        <div className="leadershipColumns">
          <p>
            I lead multidisciplinary teams across Product, Marketing, Growth,
            Design, Data, and commercial functions, with ownership of
            roadmaps, budgets, P&L drivers, and performance communication.
          </p>
          <p>
            Published work includes perspectives on AI in business and
            marketing, product-led growth, product culture, and mobile
            technology.
          </p>
        </div>
        <div className="availability">
          <span>Based in Orlando, Florida</span>
          <span>U.S. Permanent Resident</span>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footerGrid">
          <div>
            <p className="kicker">Let&apos;s connect</p>
            <h2>Building the next stage of growth.</h2>
          </div>
          <a
            className="footerLink"
            href="https://www.linkedin.com/in/andrefelipemelo"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow />
          </a>
        </div>
        <div className="shell legal">
          <span>© {new Date().getFullYear()} Andre Melo</span>
          <span>Product & Marketing Executive</span>
        </div>
      </footer>
    </main>
  );
}
