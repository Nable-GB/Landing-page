import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDollarSign,
  Code2,
  Cpu,
  ExternalLink,
  Fingerprint,
  Gem,
  Globe2,
  Layers3,
  LockKeyhole,
  Menu,
  MessageSquare,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  WalletCards,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Portfolio", href: "#projects" },
  { label: "Blog", href: "#insights" },
  { label: "Work With Us", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const manualLinks = [
  "https://blog.naver.com/healthinfogec/224281081641",
  "https://blog.naver.com/healthinfogec/224281082351",
  "https://blog.naver.com/healthinfogec/224281130689",
  "https://blog.naver.com/healthinfogec/224281376780",
  "https://blog.naver.com/healthinfogec/224281391969",
  "https://blog.naver.com/healthinfogec/224281412051",
  "https://blog.naver.com/healthinfogec/224281447786",
  "https://blog.naver.com/healthinfogec/224281541893",
  "https://blog.naver.com/healthinfogec/224281558581",
  "https://blog.naver.com/healthinfogec/224281687333",
];

const projects = [
  {
    name: "VAISEN Mainnet",
    tag: "EVM Mainnet",
    featured: true,
    icon: Network,
    description:
      "An EVM-based proprietary mainnet project including MetaMask connectivity, block explorer, API documentation, wallet service, and POS payment integration.",
    useCases: ["Governments", "Enterprises", "Stablecoins", "Digital asset services"],
  },
  {
    name: "RealSun RWA Platform",
    tag: "RWA Platform",
    featured: true,
    icon: Sparkles,
    description:
      "An RWA platform connecting solar power plants with digital assets through solar-based NFTs, point participation, and reward models linked to real-world power generation revenue.",
    useCases: ["Solar NFTs", "Point rewards", "Revenue models", "Asset participation"],
    links: manualLinks,
  },
  {
    name: "Tetherbank Wallet",
    tag: "Wallet",
    icon: WalletCards,
    description:
      "A Web3 wallet service supporting MetaMask and Trust Wallet connection, P2P transfers, point management, NFT platform integration, and ETH/USDT charging structures.",
  },
  {
    name: "BuyZone",
    tag: "Marketplace",
    icon: CircleDollarSign,
    description:
      "A P2P token marketplace where users can list and sell their own ERC-20 tokens with USD-based prices, referral rewards, and custom trading conditions.",
  },
  {
    name: "Hubmembership",
    tag: "Payment",
    icon: Globe2,
    description:
      "Utility-based payment with crypto for global vendors, featuring P2P movement, swap functionality, and vendor-ready settlement flows.",
  },
  {
    name: "SocialMusicFi",
    tag: "MusicFi",
    icon: Gem,
    description:
      "A MusicFi platform where artists upload music and receive rewards based on NFTs, tokens, fan voting, and streaming data.",
  },
  {
    name: "I Love Korea",
    tag: "Settlement",
    icon: BriefcaseBusiness,
    description:
      "A settlement platform for foreigners in Korea, combining jobs, hospitals, housing, visas, community, and point-based rewards.",
  },
];

const services = [
  "Web3 Business Planning",
  "Tokenomics Design",
  "Smart Contract Development",
  "ERC-20 / NFT Issuance",
  "Wallet-Connected Platform Development",
  "RWA Platform Development",
  "P2P Token Trading Systems",
  "Point & Reward Systems",
  "Landing Page / IR Deck Creation",
  "Blockchain Consulting",
  "MVP Development",
  "Investor Demo Development",
];

const technologies = [
  "EVM-Based Mainnet Architecture",
  "MetaMask / Trust Wallet Integration",
  "ERC-20 / ERC-721 / ERC-1155",
  "Smart Contract Design",
  "Web3 Wallet Login",
  "Point and Token Ledger Systems",
  "NFT Marketplace",
  "P2P Trading and Escrow Logic",
  "Admin Dashboard",
  "API-Based Platform Integration",
  "Token Burn and Reward Policies",
  "Web3 Game Economy Systems",
];

const audiences = [
  "Companies launching crypto projects",
  "Teams preparing token issuance",
  "Brands building NFT platforms",
  "Businesses tokenizing real-world assets",
  "Platforms adopting point and reward systems",
  "Teams developing Web3 games",
  "Projects preparing investor-ready IR materials",
  "Startups needing fast MVP development",
];

const stats = [
  { value: "EVM", label: "mainnet architecture" },
  { value: "RWA", label: "asset-backed platforms" },
  { value: "P2P", label: "token marketplace logic" },
  { value: "IR", label: "investor-ready materials" },
];

const insights = [
  "A token launch needs product logic, operating policy, and transaction design.",
  "RWA projects work best when asset revenue, user flow, and reward rules are clear.",
  "Investor demos should explain the economy before asking users to trust the technology.",
];

const CONTACT_EMAIL = "hello@example.com";

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));

    if (!elements.length) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("reveal-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();

  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    messenger: "",
    projectType: "",
    budget: "",
    stage: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subjectName = form.name.trim() || "New Lead";
    const subject = `Project Inquiry from ${subjectName}`;
    const body = [
      `Name / Company: ${form.name}`,
      `Email: ${form.email}`,
      `Phone / Messenger: ${form.messenger}`,
      `Project Type: ${form.projectType}`,
      `Estimated Budget: ${form.budget}`,
      `Current Stage: ${form.stage}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) {
      return;
    }

    window.location.href = mailtoHref;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <div className="site-shell" aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyanfire/35 bg-cyanfire/10 text-cyanfire shadow-glow">
              <Blocks size={22} />
            </span>
            <span className="font-display text-lg font-semibold tracking-normal text-white">
              Web3 Builders
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={`${item.label}-${item.href}`} className="nav-link" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a className="hidden rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-cyanfire lg:inline-flex" href="#contact">
            Request a Consultation
          </a>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white lg:hidden"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-ink/95 px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a key={`${item.label}-mobile`} className="mobile-nav-link" href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative isolate min-h-screen px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div data-reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanfire/30 bg-cyanfire/10 px-4 py-2 text-sm font-medium text-cyan-100">
                <Zap size={16} className="text-cyanfire" />
                Real Web3 products, not token-only promises
              </div>
              <h1 className="max-w-5xl font-display text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
                We Build Real Web3, Blockchain, RWA, and Payment Platforms
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                We are a Web3 build-up team experienced in developing mainnets, digital wallets, token systems, NFT platforms, RWA investment platforms, P2P token marketplaces, and point-based payment ecosystems.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400">
                From early-stage ideas to launch-ready products, we support technical architecture, smart contracts, web platforms, tokenomics, and investor-ready materials.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="primary-button" href="#contact">
                  Request a Consultation
                  <ArrowRight size={18} />
                </a>
                <a className="secondary-button" href="#projects">
                  View Portfolio
                  <ChevronRight size={18} />
                </a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="stat-card rounded-lg border border-white/10 bg-white/[0.04] p-4"
                    style={{ "--delay": `${240 + index * 80}ms` }}
                  >
                    <div className="font-display text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" data-reveal style={{ "--delay": "140ms" }}>
              <div className="hero-visual">
                <div className="visual-topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
                  <EcosystemNode icon={Network} title="Mainnet" detail="EVM chain, explorer, APIs" tone="cyan" delay="0ms" />
                  <EcosystemNode icon={WalletCards} title="Wallet" detail="MetaMask, Trust Wallet, points" tone="violet" delay="420ms" />
                  <EcosystemNode icon={Gem} title="NFT / RWA" detail="Assets, revenue, ownership logic" tone="mint" delay="760ms" />
                  <EcosystemNode icon={CircleDollarSign} title="Payment" detail="P2P, POS, settlement flows" tone="cyan" delay="1120ms" />
                </div>
                <div className="mx-5 mb-5 rounded-lg border border-white/10 bg-ink/70 p-5 sm:mx-6 sm:mb-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-300">Launch pipeline</span>
                    <span className="rounded-md bg-mintfire/12 px-2.5 py-1 text-xs font-semibold text-mintfire">Active</span>
                  </div>
                  <div className="space-y-3">
                    {["Architecture", "Smart Contracts", "Platform UX", "Investor Demo"].map((item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="grid h-6 w-6 place-items-center rounded-md bg-white/10 text-xs text-cyan-100">
                          {index + 1}
                        </span>
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                          <div className="pipeline-fill h-full rounded-full bg-gradient-to-r from-cyanfire via-mintfire to-violetfire" style={{ "--target-width": `${88 - index * 11}%`, "--delay": `${index * 180}ms` }} />
                        </div>
                        <span className="w-28 text-right text-xs text-slate-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-spacing border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div data-reveal>
                <SectionEyebrow icon={ShieldCheck}>Structured for market launch</SectionEyebrow>
              </div>
              <div data-reveal style={{ "--delay": "120ms" }}>
                <h2 className="section-title">We Are Not Just Developers. We Are Web3 Business Builders.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  A crypto project is not completed by simply issuing a token. It requires a full ecosystem: wallet, platform, user flow, payment structure, token economy, operation policy, security, and transaction logic.
                </p>
                <p className="mt-5 text-base leading-7 text-slate-400">
                  Based on real project experience, we transform ideas into structured services, design them for development, and deliver results that can be presented to the market.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-spacing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="section-heading" data-reveal>
              <SectionEyebrow icon={Layers3}>Portfolio systems</SectionEyebrow>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-copy">
                From proprietary chains to user-facing marketplaces, each build connects business design with practical blockchain infrastructure.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {projects.filter((project) => project.featured).map((project, index) => (
                <ProjectCard key={project.name} project={project} featured delay={index * 120} />
              ))}
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.filter((project) => !project.featured).map((project, index) => (
                <ProjectCard key={project.name} project={project} delay={index * 90} />
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-spacing border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="section-heading" data-reveal>
              <SectionEyebrow icon={Rocket}>Build services</SectionEyebrow>
              <h2 className="section-title">Our Services</h2>
              <p className="section-copy">
                Practical services for teams that need the business model, the platform, and the investor story to move together.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div key={service} className="service-card" data-reveal style={{ "--delay": `${index * 45}ms` }}>
                  <Check size={18} className="shrink-0 text-mintfire" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="technology" className="section-spacing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div data-reveal>
                <SectionEyebrow icon={Cpu}>Technical capability</SectionEyebrow>
                <h2 className="section-title mt-5">Technology Capabilities</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  We connect the essential technologies required for blockchain projects into one practical service flow.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {technologies.map((technology, index) => (
                  <div key={technology} className="tech-card" data-reveal style={{ "--delay": `${index * 45}ms` }}>
                    <span className="tech-index">{String(index + 1).padStart(2, "0")}</span>
                    <span>{technology}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="insights" className="section-spacing border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="section-heading" data-reveal>
              <SectionEyebrow icon={MessageSquare}>Blog thinking</SectionEyebrow>
              <h2 className="section-title">Built Around Real Launch Questions</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {insights.map((insight, index) => (
                <article
                  key={insight}
                  className="insight-card rounded-lg border border-white/10 bg-panel/80 p-6 transition hover:-translate-y-1 hover:border-cyanfire/40"
                  data-reveal
                  style={{ "--delay": `${index * 90}ms` }}
                >
                  <Code2 className="mb-5 text-cyanfire" size={24} />
                  <p className="leading-7 text-slate-300">{insight}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section-spacing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div data-reveal>
                <SectionEyebrow icon={Fingerprint}>Who we work with</SectionEyebrow>
                <h2 className="section-title mt-5">Who We Work With</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  We work with clients and partners building real blockchain utility, tokenized assets, platform economies, and launch-ready Web3 products.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {audiences.map((audience, index) => (
                  <div key={audience} className="audience-card" data-reveal style={{ "--delay": `${index * 55}ms` }}>
                    <ArrowRight size={16} className="text-cyanfire" />
                    <span>{audience}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-spacing pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="contact-panel" data-reveal>
              <div>
                <SectionEyebrow icon={LockKeyhole}>Project inquiry</SectionEyebrow>
                <h2 className="section-title mt-5">Start Your Project With Us</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Even if your idea is not fully organized yet, that is okay. Share your current situation, and we will help define the project structure, development scope, budget, timeline, and launch strategy.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {["Architecture review", "Token logic", "MVP scope", "Investor demo"].map((item, index) => (
                    <div key={item} className="mini-card rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300" style={{ "--delay": `${index * 100}ms` }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name / Company" name="name" value={form.name} onChange={handleChange} required />
                  <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>
                <Field label="Phone / Messenger" name="messenger" value={form.messenger} onChange={handleChange} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <SelectField label="Project Type" name="projectType" value={form.projectType} onChange={handleChange} required options={["Mainnet", "Wallet", "RWA Platform", "NFT Platform", "P2P Marketplace", "Payment / Point System", "Consulting", "Other"]} />
                  <SelectField label="Estimated Budget" name="budget" value={form.budget} onChange={handleChange} options={["Not decided", "Under $10k", "$10k - $30k", "$30k - $75k", "$75k+"]} />
                </div>
                <SelectField label="Current Stage" name="stage" value={form.stage} onChange={handleChange} options={["Idea only", "Planning", "Prototype", "Existing product", "Preparing launch", "Need investor materials"]} />
                <label className="grid gap-2">
                  <span className="form-label">Message</span>
                  <textarea
                    className="form-input min-h-36 resize-y"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you want to build, where the project is now, and what kind of support you need."
                    required
                  />
                </label>
                <button className="primary-button justify-center border-0" type="submit">
                  Send Project Inquiry
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>We Build Web3 Projects From Idea to Launch.</p>
          <p>Blockchain, RWA, NFT, token, wallet, and payment platforms built for real-world use.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionEyebrow({ children, icon: Icon }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-cyan-100">
      <Icon size={16} className="text-cyanfire" />
      {children}
    </div>
  );
}

function EcosystemNode({ icon: Icon, title, detail, tone, delay = "0ms" }) {
  return (
    <div className={`ecosystem-node tone-${tone}`} style={{ "--float-delay": delay }}>
      <div className="mb-5 flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white">
          <Icon size={22} />
        </span>
        <span className="h-2 w-2 rounded-full bg-current" />
      </div>
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
    </div>
  );
}

function ProjectCard({ project, featured = false, delay = 0 }) {
  const Icon = project.icon;

  return (
    <article
      className={featured ? "project-card project-card-featured" : "project-card"}
      data-reveal
      style={{ "--delay": `${delay}ms` }}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-cyanfire/30 bg-cyanfire/10 text-cyanfire">
          <Icon size={24} />
        </div>
        <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
          {project.tag}
        </span>
      </div>
      <h3 className="font-display text-2xl font-semibold tracking-normal text-white">{project.name}</h3>
      <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

      {project.useCases && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.useCases.map((item) => (
            <span key={item} className="rounded-md bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-300">
              {item}
            </span>
          ))}
        </div>
      )}

      {project.links && (
        <div className="mt-7">
          <p className="mb-3 text-sm font-semibold text-white">RealSun Platform Full Manual References</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {project.links.map((link, index) => (
              <a
                key={link}
                className="manual-link"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                View Full Manual {index + 1}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function Field({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <label className="grid gap-2">
      <span className="form-label">{label}</span>
      <input
        className="form-input"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={label}
      />
    </label>
  );
}

function SelectField({ label, name, value, onChange, options, required = false }) {
  return (
    <label className="grid gap-2">
      <span className="form-label">{label}</span>
      <select className="form-input" name={name} value={value} onChange={onChange} required={required}>
        <option value="">{required ? `Select ${label}` : "Optional"}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default App;
